// import React from 'react'
import "./StudentResults.css"

import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from '@material-ui/core';
import { Accordion } from '@material-ui/core';
import * as React from 'react';
import { AccordionSummary } from '@material-ui/core';
import { AccordionDetails } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { MdOutlineExpandMore } from 'react-icons/md'

export default function StudentPerfomance() {
    const data = [
        {
            subjectname: 'Chichewa -chich 111',
            assignment1: 'assigment1'
        },
        {
            subjectname: 'Chichewa -chich 111',
            assignment1: 'assigment1'
        },
        {
            subjectname: 'Chichewa -chich 111',
            assignment1: 'assigment1'
        },
    ]
    return (

        <div className="subject">
            <div className="subjectTitleContainer">
                <h3 className="subjectTitle">Exam Results For : Stephano Patrick -std8</h3>
            </div>

            <div className="subjectContaine">
                <div className="subjectShow">

                    <div className="userShowBottom">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdOutlineExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Term one</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="userShowInfoTitle">
                                        CHICHEWA: 60----------------------position 2
                                    </div>
                                    <div className="userShowInfoTitle">
                                        ENGLISH: 60----------------------position 8
                                    </div>
                                    <div className="userShowInfoTitle">
                                        LIFE SKILLS: 60----------------------position 5
                                    </div>
                                    <div className="userShowInfoTitle">
                                        SOCIAL: 60----------------------position 6
                                    </div>
                                    <div className="userShowInfoTitle">
                                        AGRICULTURE: 60----------------------position 3
                                    </div>
                                    <div className="userShowInfoTitle">
                                        HOMIC: 60----------------------position 2
                                    </div>
                                    <div className="userShowInfoTitle">
                                        POSITION: 6/100 STUDENTS
                                    </div>
                                    <div className="userShowInfoTitle">
                                        STATUS: PASS
                                    </div>
                                    <div className="userShowInfoTitle">
                                        TEACHERS REMARKS: GOOD WORK
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdOutlineExpandMore />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Term Two</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="userShowInfoTitle">
                                        CHICHEWA: 60----------------------position 2
                                    </div>
                                    <div className="userShowInfoTitle">
                                        ENGLISH: 60----------------------position 8
                                    </div>
                                    <div className="userShowInfoTitle">
                                        LIFE SKILLS: 60----------------------position 5
                                    </div>
                                    <div className="userShowInfoTitle">
                                        SOCIAL: 60----------------------position 6
                                    </div>
                                    <div className="userShowInfoTitle">
                                        AGRICULTURE: 60----------------------position 3
                                    </div>
                                    <div className="userShowInfoTitle">
                                        HOMIC: 60----------------------position 2
                                    </div>
                                    <div className="userShowInfoTitle">
                                        POSITION: 6/100 STUDENTS
                                    </div>
                                    <div className="userShowInfoTitle">
                                        STATUS: PASS
                                    </div>
                                    <div className="userShowInfoTitle">
                                        TEACHERS REMARKS: GOOD WORK
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdOutlineExpandMore />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Term Three</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="userShowInfoTitle">
                                        No Results Yet For Term Three
                                    </div>
                                    {/* <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
                                    </div> */}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                    </div>
                </div>

            </div>


        </div>
    )
}


