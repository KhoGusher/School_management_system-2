require('dotenv').config();
require('dotenv').config({ path: '.sendgrid.env' });

const jwt = require('jsonwebtoken');

const sgMail = require('@sendgrid/mail'); 
    const pool = require('../pool');
    const toCamelCase = require('./utills/toCamelCase');

    var bcrypt = require('bcrypt');
    var crypto = require('crypto');
const studentAuth = require('../middlewares/studentAuth');
const teacherAuth = require('../middlewares/teacherAuth');

    var client = require('twilio')(
      process.env.TWILIO_ACCOUNT_SID,
       process.env.TWILIO_TOKEN);

class UserRepo {


        // sort student records by school
        static async callSendgrid(req, res){
          try {
                  sendGridConfirmEmail('$2b$04$pnzuthZ.cYX7Lu8wLEmVSupIOJAY1j.3rxkq8jMbSUCdzQ0Jt1UCu', res);      
          }catch(err){
              res.status(422).send("Something went wrong signing you up, please contact the administrator");
        }
        }


  /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ADMIN AUTH */
  static async processAdminDetails(tok, id, values, res){
    try {
      const { firstName, lastName, middleName, birthDate, gender, district, village, currentAddress, email, phoneNumber, password, nationality } = values;        

      
      const { rows } = await pool.query(`SELECT * FROM school WHERE schoolId=$1`, [id]);

      await checkPassword(email, rows[0].auth);
      

      const processedPassword =  await processPassword(password);
        if(processedPassword){
          const { rows } = await pool.query(`INSERT INTO manager(firstName, lastName, middleName, birthDate, gender,
            district, village, currentAddress, email, phoneNumber, password, nationality, schoolId)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`, 
            [firstName, lastName, middleName, birthDate, gender, district, village, currentAddress, email, phoneNumber, processedPassword, nationality, id]
            );
            
            if(rows){
              let adminId, firstNameLetter, fullLastName, processedIdentity; 
              
                 adminId = rows[0].managerid;
                 firstNameLetter = rows[0].firstname.charAt(0);
                 fullLastName = rows[0].lastname;
                  
                 processedIdentity = 'AMW'+id+'-'+firstNameLetter+fullLastName+adminId;
                
              let updatedSignature = await processAdminIdentity(processedIdentity, adminId);
                if(updatedSignature){
                  var { identity, managerid, schoolid } = updatedSignature[0];
                  
                      var token = jwt.sign({email: email}, process.env.BIG_DEE);
                      let adminSet = {
                         token,
                         identity,
                         managerid,
                         schoolid
                      }
                       res.status(200).send(adminSet);
                }
            }
         }
    }catch(err){
        res.status(422).send("Something went wrong signing you up, please contact the administrator");
    }
  }    

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* SIGNING IN */


static async adminSigningIn(req, res){
  const email = req.body.email;
 
 try { 
     const { rows } = await pool.query("SELECT * FROM manager WHERE email=$1", [email]);
   if(rows.length !== 0){
    const proccessedPassword = await AdminCheckPassword(req.body.password, rows[0], res)
    if(proccessedPassword){
     
      const token = jwt.sign({identity: req.body.identity}, process.env.BIG_DEE)
      const { managerid, schoolid, identity } = rows[0];

             const parcel = {
                    token,
                    identity,
                    managerid,
                    schoolid
             }  
             res.status(200).send(parcel);  
        } 
     }
   }catch(err){
     res.status(400).send("Something went wrong");
   }
 }


 static async teacherSigningIn(req, res){
  const email = req.body.email;
 
 try { 
     const { rows } = await pool.query("SELECT * FROM teacher WHERE email=$1", [email]);
   if(rows.length !== 0){

    const proccessedPassword = await AdminCheckPassword(req.body.password, rows[0], res)
   
    if(proccessedPassword){
  
      const token = jwt.sign({identity: req.body.identity}, process.env.BIG_DEE)
      
      const { teacherid, schoolid, identity } = rows[0];

      const teacherClass = await getClassTeacherTeaches(teacherid, schoolid);

             const parcel = {
                    token,
                    identity,
                    teacherid,
                    teacherClass,
                    schoolid
             }
      
             res.status(200).send(parcel);  
        } 
     }
  
   }catch(err){
     res.status(400).send("Something went wrong");
   }
 }

static async studentSigningIn(req, res){
   const userName = req.body.userName;

  try {
   if(userName.startsWith("SMW")){
       const { rows } = await pool.query("SELECT * FROM student WHERE identity=$1", [userName]);
       if(rows.length !== 0){
          const proccessedPassword = await AdminCheckPassword(req.body.password, rows[0], res);
          
          if(proccessedPassword){
          
             const token = jwt.sign({identity: req.body.identity}, process.env.BIG_DEE)
             
             const { studentid, schoolid, identity } = rows[0];

             const parcel = {
                    token,
                    identity,
                    studentid,
                    schoolid
             }
           
             res.status(200).send(parcel);
        }   
       }
    }
    }catch(err){
      res.status(400).send("Something went wrong");
    }
  }

  static async RenewPassword(req, res){
    var { temp1, values } = req.body;
     const validCerts = JSON.parse(temp1);
     
     try {
    if(validCerts.identity.startsWith("AMW")){
          
      const processedPassword =  await processPassword(values.password); 
    
      const { rows } = await pool.query(
        'UPDATE manager SET password=$1 WHERE managerId=$2 RETURNING *;',
          [ processedPassword, validCerts.managerid ] 
            );
     
            res.status(200).send(rows);
      
          }
    if(validCerts.identity.startsWith("TMW")){
     // const postValues = JSON.parse(values);
  
      const processedPassword =  await processPassword(values.password); 
    
      const { rows } = await pool.query(
        'UPDATE teacher SET password=$1 WHERE teacherId=$2 RETURNING *;',
          [ processedPassword, validCerts.teacherid ] 
            );
     
            res.status(200).send(rows);

    }
    
    if(validCerts.identity.startsWith("SMW")){
      const processedPassword =  await processPassword(values.password); 
    
      const { rows } = await pool.query(
        'UPDATE student SET password=$1 WHERE studentId=$2 RETURNING *;',
          [ processedPassword, validCerts.studentid ] 
            );
     
            res.status(200).send(rows);
       }
     }
     catch(err){
       res.status(400).send("Something went wrong");
     }
   }




/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ADMIN OPERATION ON TEACHER(S) */


static async adminHomeDisplays(req, res){
  try {
    let pending, free, xulId, processedVARS, teacherGenderVAR, studentGenderVAR, subjectCountVAR, classCountVAR, rankCountVAR;
       pending = req.params.schoolId.substring(1);
       free = JSON.parse(pending);
       xulId = free.schoolId;
    
    teacherGenderVAR = await teacherGenderCount(xulId);
    studentGenderVAR = await studentGenderCount(xulId);
    subjectCountVAR = await subjectsSchoolCount(xulId);
    classCountVAR = await schoolClassCount(xulId);
    rankCountVAR = await schoolRankCount(xulId); 
    
    processedVARS = {
      teacherGenderVAR,
      studentGenderVAR,
      subjectCountVAR,
      classCountVAR,
      rankCountVAR
    };

            res.status(200).send(processedVARS);

  }catch(err){
      res.status(422).send(err+"Something went wrong deleting record, please try again");
  }
}

  static async adminAddsTeacher(password, req, res){
    try {

      const { firstName, lastName, middleName, birthDate, email, phoneNumber, nationality, district, village, address, gender, rank, subjects } = req.body.data.values;
      const processedPassword =  await processPassword(password);
         const { rows } = await pool.query(`INSERT INTO teacher(firstName, lastName, middleName, birthDate, email, phoneNumber, nationality, district, village, address, gender, password, rank, subjects, schoolId)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`, 
                [firstName, lastName, middleName, birthDate, email, phoneNumber, nationality, district, village, address, gender, processedPassword, rank, subjects, req.body.data.schoolId]
             );
   
                let teacherId, firstNameLetter, fullLastName, processedIdentity; 
              
                    teacherId = rows[0].teacherid;
                    firstNameLetter = rows[0].firstname.charAt(0);
                    fullLastName = rows[0].lastname;

                    // schoolId will be sent by admin every time he makes a request
                    processedIdentity = 'TMW'+ req.body.data.schoolId +'-'+firstNameLetter+fullLastName+teacherId;
                    
                const updatedSignature = await processTeacherIdentity(processedIdentity, teacherId);
                       
                       res.status(200).send({updatedSignature, password});
    }catch(err){
        res.status(422).send(err+"Something went wrong signing you up, please contact the administrator");
    }
  }
  
  // for editing by admin
  static async adminEditsTeacher(req, res){
    try {
      const { firstName, lastName, middleName, birthDate, email, phoneNumber, nationality, district, village, address, gender, rank, subjects } = req.body.values.values;
    
      const { rows } = await pool.query(
        'UPDATE teacher SET firstName=$1, lastName=$2, middleName=$3, birthDate=$4, email=$5, phoneNumber=$6, nationality=$7, district=$8, village=$9, address=$10, gender=$11, rank=$12, subjects=$13 WHERE teacherId=$14 RETURNING *;',
        [firstName, lastName, middleName, birthDate, email, phoneNumber, nationality, district, village, address, gender, rank, subjects, req.body.values.td] 
            );
            
              res.status(200).send(rows);

    }catch(err){
        res.status(422).send(err+"Something went wrong editing teacher record, please try again");
    }
  }   

  // for listing teachers by admin
  static async listTeachers(req, res){
    try {
      const takeSchoolId = req.params.schoolId.substring(1);;
      const fineGrade = JSON.parse(takeSchoolId);
      const { rows } = await pool.query(`SELECT * FROM teacher WHERE schoolId=$1`, [fineGrade.schoolId]);
            
              res.status(200).send(rows);

    }catch(err){
        res.status(422).send(err+"Something went wrong deleting record, please try again");
    }
  }

   // for deleting by admin
   static async deleteTeacher(req, res){
    try {
      const assignedId = req.params.id.split(':');
      const { rows } = await pool.query(`DELETE FROM teacher WHERE teacherid=$1 RETURNING *`, [assignedId[1]]);
            
              res.status(200).send(rows);

    }catch(err){
        res.status(422).send(err+"Something went wrong deleting record, please try again");
    }
  }

    // for listing teachers by admin
    static async addSubjectTeacher(req, res){
      try {
        const { subjectName, subjectCode, schoolId, teacherId } = req.body;
        const { rows } = await pool.query(`INSERT INTO subject(subjectName, subjectCode, schoolId, teacherId)
              VALUES ($1, $2, $3, $4) RETURNING *`, 
                [ subjectName, subjectCode, schoolId, teacherId ]
             );
              
               res.status(200).send(rows);
  
      }catch(err){
          res.status(422).send(err+"Something went wrong deleting record, please try again");
      }
    }

   // sort teachers by class at a school
   static async listTeachersClass(req, res){
    try {
          const { rows } = await pool.query(`SELECT * FROM teacher WHERE schoolId=$1 AND class=$2`, [req.body.schoolId, req.body.classi])
 
            if(rows){
              res.status(200).send(rows);
            }
         
    }catch(err){
        res.status(422).send("Something went wrong signing you up, please contact the administrator");
  }
  }
  /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ADMIN OPERATION ON STUDENT(S) */

  static async adminAddsStudent(password, req, res){
    try {
      const { firstName, lastName, middleName, birthDate, regNumber, classi, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature } = req.body.values;
 
      const processedPassword =  await processPassword(password);
         const { rows } = await pool.query(`INSERT INTO student(firstName, lastName, middleName, birthDate, regNumber, class, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature, password, schoolId)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`, 
                [firstName, lastName, middleName, birthDate, regNumber, classi, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature, processedPassword, 2]
             );
            // on 2 place req.body.shoolId
                let studentId, firstNameLetter, fullLastName, processedIdentity; 
              
                    studentId = rows[0].studentid;
                    firstNameLetter = rows[0].firstname.charAt(0);
                    fullLastName = rows[0].lastname;

                    // schoolId will be sent by admin every time he makes a request
                    processedIdentity = 'SMW'+(2 || req.body.schoolId)+'-'+firstNameLetter+fullLastName+studentId;
                
                const updatedSignature = await processStudentIdentity(processedIdentity, studentId);
               
                res.status(200).send({updatedSignature, password});
    }catch(err){
        res.status(422).send(err+"Something went wrong signing you up, please contact the administrator");
    }
  }

  static async adminDeletesStudent(req, res){
    try {
      const assignedId = req.params.id.split(':');
      const { rows } = await pool.query(`DELETE FROM student WHERE studentId=$1`, [assignedId[1]]);
            
              res.status(200).send(rows);
    }catch(err){
        res.status(422).send(err+"Something went wrong deleteing record, please try again");
    }
  }

  static async adminEditsStudent(req, res){
    try {
      const { firstName, lastName, middleName, birthDate, regNumber, classi, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature } = req.body.values.values;
      const { rows } = await pool.query(
        'UPDATE student SET firstName=$1, lastName=$2, middleName=$3, birthDate=$4, regNumber=$5, class=$6, village=$7, gender=$8, nationality=$9, district=$10, address=$11, guardianNumber=$12, category=$13, countAttempts=$14, idPhoto=$15, signature=$16 WHERE studentId = $17 RETURNING *;',
        [firstName, lastName, middleName, birthDate, regNumber, classi, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature, req.body.values.td] 
            );
            
              res.status(200).send(rows);
    }catch(err){
        res.status(422).send(err+"Something went wrong editing student record, please try again");
    }
  }

  // sort student records by school
  static async listStudents(req, res){
    try {
      console.log(req.params.schoolId);
         const takeSchoolId = req.params.schoolId.substring(1);
         const fine = JSON.parse(takeSchoolId);
         
         const { rows } = await pool.query(`SELECT * FROM student WHERE schoolId=$1`, [fine.schoolId])
 
            if(rows){
              res.status(200).send(rows);
            }
         
    }catch(err){
        res.status(422).send("Something went wrong signing you up, please contact the administrator");
  }
  }

      // sort student records by gender at a school
      static async listStudentsGender(req, res){
        try {
              const { rows } = await pool.query(`SELECT * FROM student WHERE schoolId=$1 AND gender=$2`, [req.body.schoolId, req.body.gender])
     
                if(rows){
                  res.status(200).send(rows);
                }
             
        }catch(err){
            res.status(422).send("Something went wrong listing record, please try again");
      }
      }

        // sort student records by gender in class like form 5 at a school
        static async listStudentsClassGender(req, res){
          try {
                const { rows } = await pool.query(`SELECT * FROM student WHERE schoolId=$1 AND gender=$2 AND class=$3`, [req.body.schoolId, req.body.gender, req.body.classi])
       
                  if(rows){
                    res.status(200).send(rows);
                  }
               
          }catch(err){
              res.status(422).send("Something went wrong listing record, please try again");
        }
        }


        
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* TEACHER OPERATIONS  */


        

        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* STUDENT OPERATIONS */

        // STUDENT OPEATIONS
            // student bio

                
          static async studentHomeDisplays(req, res){
            try {
                  const { rows } = await pool.query(`SELECT * FROM student WHERE schoolId=$1`, [req.body.schoolId])
          
                    if(rows){
                      res.status(200).send(rows);
                    }
                  
            }catch(err){
                res.status(422).send("Something went wrong listing record, please try again");
          }
          }    

        static async studentBio(req, res){
          try {
                const { rows } = await pool.query(`SELECT * FROM student WHERE schoolId=$1`, [req.body.schoolId])
       
                  if(rows){
                    res.status(200).send(rows);
                  }
               
          }catch(err){
              res.status(422).send("Something went wrong listing record, please try again");
        }
        }

        static async studentGrades(req, res){
          try {
                const { rows } = await pool.query(`SELECT
                teacher_assignment.assignmentId,
                teacher_assignment.subjectId,
                teacher_assignment.assignmentName,
                teacher_assignment.schoolId,
                student_grades.studentId,
                student_grades.assignmentId,
                student_grades.schoolId
                FROM 
                  teacher_assignment
                FULL JOIN student_grades ON student_grades.assignmentId = teacher_assignment.assignmentId WHERE student_grades.studentId=$1;`, [req.body.studentId])
       
                  if(rows){
                    res.status(200).send(rows);
                  }
               
          }catch(err){
              res.status(422).send("Something went wrong listing records, please try again");
        }
        }


      /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ADMIN LISTING ON GUARDIANS  */


   // sort student records by school
  static async listGuardians(req, res){
    try {
       const temp = req.params.schoolId.substring(1);
       const fine = JSON.parse(temp);
         const { rows } = await pool.query(`SELECT * FROM guardian WHERE schoolId=$1`, [fine.schoolId])
 
            if(rows){
              res.status(200).send(rows);
            }
         
    }catch(err){
        res.status(422).send("Something went wrong signing you up, please contact the administrator");
  }
  }

  static async adminAddsGuardian(password, req, res){
    try {
      const { firstName, lastName, phoneNumber, gender, address, village, district, nationality } = req.body.values;
        
      const processedPassword =  await processPassword(password);
         const { rows } = await pool.query(`INSERT INTO guardian(firstName, lastName, phoneNumber, gender, address, village, district, nationality, password, schoolId)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`, 
                [firstName, lastName, phoneNumber, gender, address, village, district, nationality, processedPassword, 2]
             );
            // on 2 place req.body.shoolId
                let guardianId, firstNameLetter, fullLastName, processedIdentity; 
              
                    guardianId = rows[0].guardianid;
                    firstNameLetter = rows[0].firstname.charAt(0);
                    fullLastName = rows[0].lastname;

                    // schoolId will be sent by admin every time he makes a request
                    // should be 'GMW'+req.body.schoolId
                    processedIdentity = 'GMW'+(2 || req.body.schoolId) +'-'+firstNameLetter+fullLastName+guardianId;
                
                const updatedSignature = await processGuardianIdentity(processedIdentity, guardianId);
               
                res.status(200).send({updatedSignature, password});
    }catch(err){
        res.status(422).send(err+"Something went wrong signing you up, please contact the administrator");
    }
  }

  static async adminEditsGuardian(req, res){
    try {
      const { firstName, lastName, phoneNumber, gender, address, village, district, nationality } = req.body.values.values;
      const { rows } = await pool.query(
        'UPDATE guardian SET firstName=$1, lastName=$2, phoneNumber=$3, gender=$4, address=$5, village=$6, district=$7, nationality=$8 WHERE guardianId=$9 RETURNING *;',
        [firstName, lastName, phoneNumber, gender, address, village, district, nationality, req.body.values.gd] 
            );
            
              res.status(200).send(rows);
    }catch(err){
        res.status(422).send(err+"Something went wrong editing student record, please try again");
    }
  }


  static async adminDeletesGuardian(req, res){
    try {
      const assignedId = req.params.id.split(':');
      const { rows } = await pool.query(`DELETE FROM guardian WHERE guardianId=$1`, [assignedId[1]]);
            
              res.status(200).send(rows);
    }catch(err){
        res.status(422).send(err+"Something went wrong deleteing record, please try again");
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*   SUBJECTS       *  */ 

  
      // check how many teachers are talking a subject
      static async adminGetsSubjectsTeachers(req, res){
        try {
          const fine = JSON.parse(req.body.values);
             const { rows } = await pool.query(`SELECT 
             subject.subjectid,
             subject.subjectcode,
             subject.subjectName,
             teacher_subjects.subjectid, 
             COUNT(teacher_subjects.teacherid)
             FROM 
               teacher_subjects
             FULL JOIN subject ON teacher_subjects.subjectId = subject.subjectId WHERE teacher_subjects.schoolId=$1
                              GROUP BY teacher_subjects.subjectid, subject.subjectid, subject.subjectName;`, [fine.schoolId]);
     
                if(rows){
                  res.status(200).send(rows);
                }
             
        }catch(err){
            res.status(422).send(err+"Something went wrong processing, please try again");
      }
      }

     // check how many students are talking a subject
     static async adminGetsSubjectsStudents(req, res){
      try {
           const { rows } = await pool.query(`SELECT
           subject.subjectid,
           subject.subjectcode,
           subject.subjectName,
           student_subjects.subjectid,
           COUNT(studentid)
           FROM 
             student_subjects
           FULL JOIN subject ON student_subjects.subjectId = subject.subjectId WHERE student_subjects.schoolId=$1
           GROUP BY student_subjects.subjectid, subject.subjectid, subject.subjectName;`, [2]);
   
              if(rows){
                res.status(200).send(rows);
              }
           
      }catch(err){
          res.status(422).send(err+"Something went wrong processing, please try again");
    }
    }

      /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* CLASSES */

   // check how many teachers are talking a class
   static async adminGetsClassesTeachers(req, res){
     const fine = JSON.parse(req.body.values);
    try {
         const { rows } = await pool.query(`SELECT
         class.classname,
         class.classdescription,
         COUNT(teacherid) AS total_teachers
         FROM 
           class
         FULL JOIN teacher_class ON teacher_class.classid = class.classid WHERE teacher_class.schoolId=$1
         GROUP BY teacher_class.classid, class.classname, class.classdescription;`, [fine.schoolId]);
 
            if(rows){
              res.status(200).send(rows);
            }
         
    }catch(err){
        res.status(422).send(err+"Something went wrong processing, please try again");
  }
  }

 // check how many students are talking a class
 static async adminGetsClassesStudents(req, res){
    const fine = JSON.parse(req.body.values);
  try {
       const { rows } = await pool.query(`SELECT
       class.classname,
       class.classdescription,
       COUNT(student.studentid) AS total_students
       FROM 
         class
       FULL JOIN student ON student.class = class.classname WHERE student.schoolId=$1
       GROUP BY class.classname, class.classdescription;`, [fine.schoolId]);

          if(rows){
            res.status(200).send(rows); 
          }
       
        }catch(err){
      res.status(422).send(err+"Something went wrong processing, please try again");
      }
   }

    /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /* RANKS */


    static async listRanks(req, res){
      try {
           console.log(req.params.schoolId);
           const temp = req.params.schoolId;
           const temp1 = temp.substring(1);
           const fine = JSON.parse(temp1);
           const { rows } = await pool.query(`SELECT * FROM rank WHERE schoolId=$1`, [fine.schoolId])
   
              if(rows){
                res.status(200).send(toCamelCase(rows));
              }
           
      }catch(err){
          res.status(422).send("Something went wrong signing you up, please contact the administrator");
    }
    }
  
    static async adminAddsRank(req, res){
      try {
        const { rankName, rankHead, totalMembers, rankDescription } = req.body.values;
          
           const { rows } = await pool.query(`INSERT INTO rank(rank_name, rank_head, total_members, rank_description, schoolId)
                VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
                  [rankName, rankHead, totalMembers, rankDescription, 2]
               );
              // on 2 place req.body.shoolId

                  res.status(200).send(toCamelCase(rows));

      }catch(err){
          res.status(422).send(err+"Something went wrong adding rank, please try again");
      }
    }
  
    static async adminEditsRank(req, res){
      try {
        const { rankName, rankHead, totalMembers, rankDescription } = req.body.values.values;
      
        const { rows } = await pool.query(
          'UPDATE rank SET rank_name=$1, rank_head=$2, total_members=$3, rank_description=$4 WHERE rank_id=$5 RETURNING *;',
          [ rankName, rankHead, totalMembers, rankDescription, req.body.values.rankId] 
              );
              
                res.status(200).send(toCamelCase(rows));

      }catch(err){
          res.status(422).send(err+"Something went wrong editing rank record, please try again");
      }
    }
  
  
    static async adminDeletesRank(req, res){
      try {
        const assignedId = req.params.id.split(':');
        const { rows } = await pool.query(`DELETE FROM rank WHERE rank_id=$1`, [assignedId[1]]);
              
                res.status(200).send(rows);
      }catch(err){
          res.status(422).send(err+"Something went wrong deleteing record, please try again");
      }
    }


        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /* CANDIDATES */


      // sort candidates records
      static async listCandidates(req, res){
        try {
             const takeSchoolId = req.params.schoolId.substring(1);
             const fine = JSON.parse(takeSchoolId);
             console.log(fine.schoolId);
 
             const { rows } = await pool.query(`SELECT * FROM student WHERE schoolId=$1`, [fine.schoolId])
     
                if(rows){
                  res.status(200).send(rows);
                }
             
        }catch(err){
            res.status(422).send("Something went wrong signing you up, please contact the administrator");
      }
      }
  
  

    static async adminAddsCandidate(password, req, res){
      try {
        const { firstName, lastName, middleName, birthDate, regNumber, classi, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature } = req.body.values;
   
        const processedPassword =  await processPassword(password);
           const { rows } = await pool.query(`INSERT INTO student(firstName, lastName, middleName, birthDate, regNumber, class, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature, password, schoolId)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`, 
                  [firstName, lastName, middleName, birthDate, regNumber, classi, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature, processedPassword, 2]
               );
              // on 2 place req.body.shoolId
                  let studentId, firstNameLetter, fullLastName, processedIdentity; 
                
                      studentId = rows[0].studentid;
                      firstNameLetter = rows[0].firstname.charAt(0);
                      fullLastName = rows[0].lastname;
  
                      // schoolId will be sent by admin every time he makes a request
                      processedIdentity = 'SMW'+(2 || req.body.schoolId)+'-'+firstNameLetter+fullLastName+studentId;
                  
                  const updatedSignature = await processStudentIdentity(processedIdentity, studentId);
                 
                  res.status(200).send({updatedSignature, password});
      }catch(err){
          res.status(422).send(err+"Something went wrong signing you up, please contact the administrator");
      }
    }
  

    static async adminEditsCandidate(req, res){
      try {
        const { firstName, lastName, middleName, birthDate, regNumber, classi, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature } = req.body.values.values;
        const { rows } = await pool.query(
          'UPDATE student SET firstName=$1, lastName=$2, middleName=$3, birthDate=$4, regNumber=$5, class=$6, village=$7, gender=$8, nationality=$9, district=$10, address=$11, guardianNumber=$12, category=$13, countAttempts=$14, idPhoto=$15, signature=$16 WHERE studentId = $17 RETURNING *;',
          [firstName, lastName, middleName, birthDate, regNumber, classi, village, gender, nationality, district, address, guardianNumber, category, countAttempts, idPhoto, signature, req.body.values.td] 
              );
              
                res.status(200).send(rows);
      }catch(err){
          res.status(422).send(err+"Something went wrong editing student record, please try again");
      }
    }

    
    static async adminDeletesCandidate(req, res){
      try {
        const assignedId = req.params.id.split(':');
        
        const { rows } = await pool.query(`DELETE FROM student WHERE studentid=$1`, [assignedId[1]]);
        
                res.status(200).send(rows);
      }catch(err){
          res.status(422).send(err+"Something went wrong deleteing record, please try again");
      }
    }


/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* THESE ARE DONE BY TEACHERS */


static async teacherGetsHomeDisplays(req, res){
  try {
      let pending, free, studentNumberInClassVAR, subjectNumberInClassVAR, teacherNumberOfClassVAR, container;  
      pending = req.params.data.substring(1);
      free = JSON.parse(pending);
      
      studentNumberInClassVAR = await studentNumberInClass(free.class, free.schoolId);
      
      subjectNumberInClassVAR = await subjectNumberInClass(free.teacherId, free.schoolId);
      teacherNumberOfClassVAR = await teacherNumberOfClass(free.teacherId, free.schoolId);

      container = {
        studentNumberInClassVAR,
        subjectNumberInClassVAR,
        teacherNumberOfClassVAR
      };
          res.status(200).send(container); 
             
        }catch(err){
      res.status(422).send(err+"Something went wrong processing, please try again");
      }
   }

   static async teacherStudentsForTeacher(req, res){
    try {
       
         const { rows } = await pool.query(`SELECT
             * FROM student WHERE class=$1;`, [req.body.data.classname]);
  
            if(rows){
              res.status(200).send(toCamelCase(rows)); 
            }
         
          }catch(err){
        res.status(422).send(err+"Something went wrong processing, please try again");
        }
     }

 static async teacherGetsClassInfo(req, res){
  try {
     let pending = req.params.data.substring(1);
     let free = JSON.parse(pending);

       const { rows } = await pool.query(`SELECT
       class.classid,
       class.className,
       class.classDescription,
       class.schoolId,
       teacher_class.classid,
       COUNT(teacherid) AS totalclassteachers
       FROM 
         class
       FULL JOIN teacher_class ON teacher_class.classid = class.classid WHERE teacher_class.schoolid=$1
       GROUP BY class.classid, teacher_class.classid;`, [free.schoolId]);

          if(rows){
            res.status(200).send(toCamelCase(rows)); 
          }
       
        }catch(err){
      res.status(422).send(err+"Something went wrong processing, please try again");
      }
   }

   static async studentGetsClassInfo(req, res){
    try {
       let pending = req.params.data.substring(1);
       let free = JSON.parse(pending);
  
         const { rows } = await pool.query(`SELECT
         class.className,
         COUNT(studentid) AS totalclassstudents
          FROM 
            class
          FULL JOIN student ON student.class=class.classname WHERE student.schoolid=$1
          GROUP BY class.className;`, [free.schoolId]);
  
            if(rows){
              res.status(200).send(toCamelCase(rows)); 
            }
         
          }catch(err){
        res.status(422).send(err+"Something went wrong processing, please try again");
        }
     }

     static async teacherGetsStudentClassGrades(req, res){
      try {
         let pending = req.params.data.substring(1);
         let free = JSON.parse(pending);
    
           const { rows } = await pool.query(`SELECT
                student.studentid,
                student.firstname,
                student.lastname,
                student.birthdate,
                student.district,
                student.address,
                student.gender,
                student_grades.studentid,
                student_grades.assignmentid,
                student_grades.grade
         FROM 
           student
         FULL JOIN student_grades ON student.studentid = student_grades.studentid
         WHERE student.class=$1 AND student_grades.schoolid=$2;`, [free.class, free.schoolId]);
    
              if(rows){
                res.status(200).send(toCamelCase(rows)); 
              }
           
            }catch(err){
          res.status(422).send(err+"Something went wrong processing, please try again");
          }
       }


       static async teacherGetsStudentGuardians(req, res){
        try {
           let pending = req.params.data.substring(1);
           let free = JSON.parse(pending);
      
             const { rows } = await pool.query(`SELECT
                                student.studentid,
                                student.firstname,
                                student.lastname,
                                student.schoolid,
                                student.birthdate, 
                                student.gender,
                                student.guardiannumber,
                                guardian.guardianid,
                                guardian.firstname,
                                guardian.lastname, 
                                guardian.phonenumber,
                                guardian.gender,
                                guardian.schoolid,
                                guardian.district,
                                guardian.address
                                FROM 
                                  student
                              INNER JOIN guardian ON student.guardiannumber=guardian.phonenumber
                              WHERE student.schoolid=$1 AND guardian.schoolid=$2;`, [free.schoolId, free.schoolId]);
      
                if(rows){
                  res.status(200).send(toCamelCase(rows)); 
                }
             
              }catch(err){
            res.status(422).send(err+"Something went wrong processing, please try again");
            }
         }

           static async teacherAssignments(req, res){
            try {
              let pending = req.params.data.substring(1);
              let free = JSON.parse(pending);
         
                const { rows } = await pool.query(`SELECT
                subject.subjectid,
                subject.subjectname,
                subject.subjectcode,
                teacher_assignments.subjectid,
                teacher_assignments.assignmentid,
                teacher_assignments.assignmentname
                FROM 
                subject
              FULL JOIN teacher_assignments ON teacher_assignments.subjectid = subject.subjectid
              WHERE teacher_assignments.teacherid=$1 AND teacher_assignments.schoolid=$2;`, [free.teacherid, free.schoolid]);
         
                   if(rows){
                     res.status(200).send(toCamelCase(rows)); 
                   }
                
                 }catch(err){
               res.status(422).send(err+"Something went wrong processing, please try again");
               }
           }

           
           static async teacherAddsAssignment(req, res){
            try {
               const { teacherid, schoolid, values } = req.body.data;

               const { rows } = await pool.query(`INSERT INTO teacher_assignments(subjectid, assignmentname, schoolid, teacherid)
                  VALUES ($1, $2, $3, $4) RETURNING *`, 
                    [1, values.assignmentname, schoolid, teacherid]
                        );
          
                    if(rows){
                      res.status(200).send(toCamelCase(rows)); 
                    }
                 
                  }catch(err){
                res.status(422).send(err+"Something went wrong processing, please try again");
                }
             }
    
             static async teacherEditsAssignment(req, res){
              try {

                 const { values, subjectId, asignId } = req.body.values;
                
               let { rows } = await pool.query(
                  'UPDATE subject SET subjectcode=$1 WHERE subjectId = $2 RETURNING *;',
                  [values.subjectCode, subjectId] );
                let hold = rows;   
                  
                 if(hold){
                const { rows } = await pool.query(
                  'UPDATE teacher_assignments SET assignmentname=$1 WHERE assignmentId = $2 RETURNING *;',
                  [ values.assignmentName, asignId ] 
                      );
                      
                         res.status(200).send(rows);
                 }

              }catch(err){
                  res.status(422).send(err+"Something went wrong editing student record, please try again");
              }
            }

             static async deleteAssignment(req, res){
              try {
                const assignedId = req.params.id.split(':');
                            
                const { rows } = await pool.query(`DELETE FROM teacher_assignments WHERE assignmentid=$1 RETURNING *;`, [assignedId[1]]);
        
                        res.status(200).send(rows);
              }catch(err){
                  res.status(422).send(err+"Something went wrong deleteing record, please try again");
              }
            }

            static async teacherSubjects(req, res){
              try {
                console.log(req.params);
                let pending = req.params.data.substring(1);
                let free = JSON.parse(pending);
                 console.log(free);
                  const { rows } = await pool.query(`SELECT * FROM subject WHERE teacherid=$1 AND schoolid=$2;`, [free.teacherid, free.schoolid]);
           
                     if(rows){
                       res.status(200).send(rows); 
                     }
                  
                   }catch(err){
                 res.status(422).send(err+"Something went wrong processing, please try again");
                 }
             }


            
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* STUDENT OPERATIONS */ 


    static async studentBioForStudent(req, res){
      try {
        let pending = req.params.data.substring(1);
        let free = JSON.parse(pending);


          const { rows } = await pool.query(`SELECT * FROM student WHERE studentid=$1 AND schoolid=$2;`, [free.studentId, free.schoolId]);

            if(rows){
              res.status(200).send(rows); 
            }
          
          }catch(err){
        res.status(422).send(err+"Something went wrong processing, please try again");
        }
    }          

             static async studentSubjects(req, res){
              try {
                let pending = req.params.data.substring(1);
                let free = JSON.parse(pending);
           
                  const { rows } = await pool.query(`	SELECT
                        subject.subjectid,
                        subject.subjectname,
                        subject.subjectcode,
                        student_subjects.studentid,
                        student_subjects.subjectid,
                        student_subjects.schoolid
                FROM 
                  subject
                FULL JOIN student_subjects ON student_subjects.subjectid = subject.subjectid
                WHERE student_subjects.studentid=$1 AND student_subjects.schoolid=$2;`, [free.studentid, free.schoolid]);
           
                     if(rows){
                       res.status(200).send(toCamelCase(rows)); 
                     }
                  
                   }catch(err){
                 res.status(422).send(err+"Something went wrong processing, please try again");
                 }
             }



             static async studentGradesForStudent(req, res){
              try {
                let pending = req.params.data.substring(1);
                let free = JSON.parse(pending);
           
                  const { rows } = await pool.query(`SELECT
                          subject.subjectname,
                          subject.subjectcode,
                          teacher_assignments.subjectid,
                          teacher_assignments.assignmentname,
                          student_grades.studentid,
                          student_grades.assignmentid,
                          student_grades.grade
                  FROM 
                    teacher_assignments
                  FULL JOIN student_grades ON teacher_assignments.assignmentid = student_grades.assignmentid
                  FULL JOIN subject ON subject.subjectid = teacher_assignments.subjectid
                  WHERE student_grades.studentid=$1 AND student_grades.schoolid=$2;`, [free.studentid, free.schoolid]);
           
                     if(rows){
                       res.status(200).send(toCamelCase(rows)); 
                     }
                  
                   }catch(err){
                 res.status(422).send(err+"Something went wrong processing, please try again");
                 }
             }
      


        }

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* HELPER FUNCTIONS */

const AdminCheckPassword = (reqPassword, foundUser, response) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser.password, (err, res) => {
        if (err) {
          return reject(err)
        }
        else if (res) {
          return resolve(res)
        } else {
            return response.status(422).send({error:"Something went wrong, please try again"});            
        }
    })
  )
}

  const processPassword= (password) => {
    return new Promise((resolve, reject) =>
     bcrypt.hash(password, 2, (err, hash) => {
       err ? reject(err) : resolve(hash)
    })
  )
  }

  // check if passwords are the same
  const checkPassword = (email, password) => {   
    return new Promise((resolve, reject) =>
      bcrypt.compare(email, password, (err, res) => {
          if (err) {
            return reject(err)
          }
          else if (res) {
            return resolve(res)
          } else {
             reject("Something went wrong");            
          }
      })
    )
  }

  const processAdminIdentity = async (identity, adminId) => {
    
    const { rows } = await pool.query(`UPDATE manager SET identity=$1 WHERE managerId=$2 RETURNING *`, 
        [identity, adminId]
      );
      return rows;
  }

  const processTeacherIdentity = async (identity, teacherId) => {
    
    const { rows } = await pool.query(`UPDATE teacher SET identity=$1 WHERE teacherId=$2 RETURNING *`, 
        [identity, teacherId]
      );
      return rows;
  }

  const processStudentIdentity = async (identity, studentId) => {
    
    const { rows } = await pool.query(`UPDATE student SET identity=$1 WHERE studentId=$2 RETURNING *`, 
        [identity, studentId]
      );
      return rows;
  }
  const processGuardianIdentity = async (identity, guardianId) => {
    const { rows } = await pool.query(`UPDATE guardian SET identity=$1 WHERE guardianId=$2 RETURNING *`, 
        [identity, guardianId]
      );
      return rows;
  }
  const teacherGenderCount = async (schoolId) => { 
    const { rows } = await pool.query(`SELECT gender, COUNT(gender) FROM teacher WHERE schoolid=$1 GROUP BY gender;`, [schoolId]);
    
      return rows;
  }      
  const studentGenderCount = async (schoolId) => { 
    const { rows } = await pool.query(`SELECT gender, COUNT(gender) FROM student WHERE schoolid=$1 GROUP BY gender;`, [schoolId]);
      return rows;
  }
  const subjectsSchoolCount = async (schoolId) => { 
    const { rows } = await pool.query(`SELECT COUNT(subjectid) FROM subject WHERE schoolid=$1;`, [schoolId]);
      return rows;
  }
  const schoolClassCount = async (schoolId) => {
    const { rows } = await pool.query(`SELECT COUNT(classid) FROM class WHERE schoolid=$1;`, [schoolId]);
      return rows;
  }
  const schoolRankCount = async (schoolId) => { 
    const { rows } = await pool.query(`SELECT COUNT(rank_id) FROM rank WHERE schoolid=$1;`, [schoolId]);
      return rows;
  }
   
  // TEACHER HELPER FUNCTIONS

  const studentNumberInClass = async (className, schoolId) => { 
    
    const { rows } = await pool.query(`SELECT
              class.className,
              COUNT(studentid) AS totalclassstudents
                FROM 
                  class
                FULL JOIN student ON student.class=class.classname WHERE class.classname=$1 AND student.schoolid=$2 
                GROUP BY class.className;`, [className, schoolId]);

                      return rows;
                  }

  const subjectNumberInClass = async (teacherId, schoolId) => {
    const { rows } = await pool.query(`SELECT COUNT(subjectid) AS countSubjects FROM subject WHERE teacherid=$1 AND schoolid=$2;`, [teacherId, schoolId]);
      return rows;
  }
  const teacherNumberOfClass = async (teacherId, schoolId) => { 
    const { rows } = await pool.query(`SELECT 
                                        COUNT(teacherid) AS countClasses
                                         FROM teacher_class WHERE teacherid=$1 AND schoolid=$2;`, [teacherId, schoolId]);

               return rows;
           }

  const getClassTeacherTeaches = async (teacherid, schoolid) => {
    
    const { rows } = await pool.query(`SELECT
                                          class.className
                     FROM 
                      class
                     FULL JOIN teacher_class ON teacher_class.classid = class.classid 
                     WHERE teacher_class.teacherid=$1 AND  teacher_class.schoolid=$2;`, [teacherid, schoolid]);
   
         return rows;
   }


  
// TGOULJCTLOGATCWTHSBWYA
// tgouljctlogatcwthsbwya
// sendgrid confirm email
const sendGridConfirmEmail = (token, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

var authenticationUrl = `http://localhost:3000/signup?is=2?tgouljctlogatcwthsbwyachiph= ${token}`;
const msg = {
to: "kondwaninantchito@gmail.com", // recipient
from: 'takataonline247@gmail.com',
subject: 'EMAIL ADDRESS VERIFICATION',
text: 'We are pleased that you are in touch with us. We promise to give you the best services',
html: '<a target=_blank href=\"' + authenticationUrl + '\">Welcome to takata247!  Click here to confirm your email</a>',
}

sgMail
.send(msg)
.then( () => {
  console.log('Email sent');
})
.catch( (error)=>{
  res.status(404).json(error)
});
}

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ENDS HERE */

    module.exports = UserRepo;