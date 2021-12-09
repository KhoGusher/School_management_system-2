require('dotenv').config();
var client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
   process.env.TWILIO_TOKEN);

  const requireAuth = require('../middlewares/requireAuth');
  const express = require('express');
  const UserRepo = require('../repository/user-repo');
const studentAuth = require('../middlewares/studentAuth');
const teacherAuth = require('../middlewares/teacherAuth');

  const router = express.Router();


  router.post('/sendgrid', async (req, res) => {
    UserRepo.callSendgrid(req, res);
  })

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* AUTH FLOW */

  // for admin signup
router.post('/signup', async (req, res) => {
  try {
         if(!req.body){
            res.status(500).send("Fill in form details");
         }
         const { authCarrier, values } = req.body; 
         const { id, tok } = authCarrier;

         if(!id || !tok){
            res.status(200).send("You are not elligible to signup, Please Contact the admin for help");  
         } 
         if(tok && id){
          UserRepo.processAdminDetails(tok, id, values,  res);   
         }
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong, please try again'});        
  }
} 
);

router.post('/save', async (req, res) => {
     UserRepo.save(req, res);
})

router.post('/admin/verify/signup', requireAuth, async (req, res) => {
   
  // res.status(200).send("Glory be to God");
   UserRepo.verify(req, res);
})

router.post('/adminsignin', async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
     UserRepo.adminSigningIn(req,  res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong'});        
  }
} 
);


router.post('/teachersignin', async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
     UserRepo.teacherSigningIn(req,  res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong'});        
  }
} 
);


router.post('/studentsignin', async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
     UserRepo.studentSigningIn(req,  res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong'});        
  }
} 
);

router.post('/renew/password', async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

      UserRepo.RenewPassword(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong'});        
  }
} 
);


/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* THESE BELOW OPERATIONS (UP UNTILL NOTICE ) ARE DONE BY ADMINISTRATOR */

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ADMIN OPERATION ON TEACHER(S) */

// admin homepage
router.get('/adminhome/display/:schoolId', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
      
        UserRepo.adminHomeDisplays(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong showing some information, please try again'});        
  }
} 
);


// admin to add teacher, student and guardian
router.post('/add/teacher', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
      var password = Math.random().toString(36).slice(-15);
        UserRepo.adminAddsTeacher(password, req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
  }
} 
);

// admin to edit teacher, student and guadian
router.put('/edit/teacher', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.adminEditsTeacher(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong updating teacher record, please try again'});        
  }
} 
);

// admin to delete teacher, student and guadian
router.delete('/delete/teacher', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.adminDeletesTeacher(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong deleting teacher, please try again'});        
  }
} 
);

// admin listing of students at school using school id
router.get('/list/teachers/:schoolId', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.listTeachers(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing teachers, please try again'});        
  }
} 
);

router.delete(`/delete/teacher/:id`, requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.deleteTeacher(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing teachers, please try again'});        
  }
} 
);

// sort student records by class at a school
router.post('/add/subject/teacher', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.addSubjectTeacher(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing class teachers, please try again'});        
  }
} 
);


/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ADMIN OPERATION ON STUDENT(S) */



// admin listing of students at school using school id
router.get('/list/studentsadmin/:schoolId', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.listStudents(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);


router.post('/add/student', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
      var password = Math.random().toString(36).slice(-15);
        
      UserRepo.adminAddsStudent(password, req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
  }
} 
);

router.put('/edit/student', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.adminEditsStudent(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong updating teacher record, please try again'});        
  }
} 
);

router.delete('/delete/student/:id', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.adminDeletesStudent(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong deleting teacher, please try again'});        
  }
} 
);

// sort student records by class at a school
router.get('/list/students/class', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.listStudentsClass(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong class students, please try again'});        
  }
} 
);

// sort student records by gender at a school
router.get('/list/students/gender', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.listStudentsGender(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);


/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* TEACHER OPERATIONS  */
    
    


/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* STUDENT OPERATIONS  */

// STUDENT ROLES
    // student bio 
router.get('/student/bio', studentAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.studentBio(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing records, please try again'});        
  }
} 
);


// student grades 
router.post('/student/grades', studentAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.studentGrades(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing records, please try again'});        
  }
} 
);


/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// GUARDIANS LISTING BY ADMIN
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// admin listing of students at school using school id
router.get('/list/guardians/:schoolId', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.listGuardians(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);

router.post('/add/guardian', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
      var password = Math.random().toString(36).slice(-15);
        
      UserRepo.adminAddsGuardian(password, req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
  }
} 
);

router.put('/edit/guardian', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.adminEditsGuardian(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong updating guardian record, please try again'});        
  }
} 
);


router.delete('/delete/guardian/:id', requireAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.adminDeletesGuardian(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong deleting teacher, please try again'});        
  }
} 
);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*   SUBJECTS         */

  router.post('/subject/teachers', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }

        UserRepo.adminGetsSubjectsTeachers(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
    }
  } 
  );

  router.post('/subject/students', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }

        UserRepo.adminGetsSubjectsStudents(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
    }
  } 
  ); 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*   CLASSES       *  */


  router.post('/class/teachers', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }

        UserRepo.adminGetsClassesTeachers(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
    }
  } 
  );

  router.post('/class/students', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }

        UserRepo.adminGetsClassesStudents(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
    }
  } 
  );

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*   RANKS    */

  router.get('/list/ranks/:schoolId', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }
          UserRepo.listRanks(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
    }
  } 
  );
  
  router.post('/add/rank', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }

        UserRepo.adminAddsRank(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
    }
  } 
  );
  
  router.put('/edit/rank', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }
        
          UserRepo.adminEditsRank(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong updating guardian record, please try again'});        
    }
  } 
  );
  
  
  router.delete('/delete/rank/:id', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }
  
          UserRepo.adminDeletesRank(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong deleting teacher, please try again'});        
    }
  } 
  );



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*   CANDIDATES    */

  router.get('/list/candidates/:schoolId', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }

          UserRepo.listCandidates(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
    }
  } 
  );
  
  
  router.post('/add/candidate', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }
        var password = Math.random().toString(36).slice(-15);
          
        UserRepo.adminAddsCandidate(password, req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong adding teacher, please try again'});        
    }
  } 
  );
  
  router.put('/edit/candidate', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }
          UserRepo.adminEditsCandidate(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong updating teacher record, please try again'});        
    }
  } 
  );
  
  router.delete('/delete/candidate/:id', requireAuth, async (req, res) => {
    try {
          if(!req.body){
            res.status(500).send("Fill in form details");
        }
          UserRepo.adminDeletesCandidate(req, res);
     }
    catch(error) {
       return res.status(422).send({error: 'Something went wrong deleting teacher, please try again'});        
    }
  } 
  );


/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* THESE BELOW OPERATIONS (UP UNTILL NOTICE ) ARE DONE BY TEACHER */

router.post('/teacherstudentforteacher', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
        UserRepo.teacherStudentsForTeacher(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);

router.get('/forstudent/studentbio/:data', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.studentBioForStudent(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);

 router.get('/teacherhome/display/:data', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.teacherGetsHomeDisplays(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);

router.get('/teacherclass/info/:data', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.teacherGetsClassInfo(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);

router.get('/studentclass/info/:data', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.studentGetsClassInfo(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);


router.get('/studentgrades/class/:data', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }

        UserRepo.teacherGetsStudentClassGrades(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
  }
} 
);

router.get('/teacher/guardian/:data', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
        }

        UserRepo.teacherGetsStudentGuardians(req, res);
     }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
    }
  } 
);

router.post('/newassignment/teacher', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
        }

        UserRepo.teacherAddsAssignment(req, res);
     }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
    }
  } 
);

router.get('/assignments/teacher/:data', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
        }

        UserRepo.teacherAssignments(req, res);
     }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
    }
  } 
);

router.put('/edit/teacher/assignment', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
      }
      
        UserRepo.teacherEditsAssignment(req, res);
   }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong updating teacher record, please try again'});        
  }
} 
);

router.delete('/delete/assignment/:id', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
        }

        UserRepo.deleteAssignment(req, res);
     }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong listing students, please try again'});        
    }
  } 
);

router.get('/subjects/teacher/:data', teacherAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
        }

        UserRepo.teacherSubjects(req, res);
     }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong getting subjects, please try again'});        
    }
  } 
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  STUDENT OPERATIONS   */


router.get('/studenthome/homedisplays/:data', studentAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
        }

        UserRepo.studentHomeDisplays(req, res);
     }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong getting subjects, please try again'});        
    }
  } 
);


router.get('/studentsubjects/info/:data', studentAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
        }

        UserRepo.studentSubjects(req, res);
     }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong getting subjects, please try again'});        
    }
  } 
);

router.get('/studentgradesforstudent/info/:data', studentAuth, async (req, res) => {
  try {
        if(!req.body){
          res.status(500).send("Fill in form details");
        }

        UserRepo.studentGradesForStudent(req, res);
     }
  catch(error) {
     return res.status(422).send({error: 'Something went wrong getting subjects, please try again'});        
    }
  } 
);



  module.exports = router;