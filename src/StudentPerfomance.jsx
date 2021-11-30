// import React from 'react'
import "./StudentPerfomance.css"

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
                <h3 className="subjectTitle">Perfomance For : Stephano Patrick -std8</h3>
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
                                <Typography>Chichwa -chich111</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
                                    </div>
                                    <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
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
                                <Typography>English eng222</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
                                    </div>
                                    <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
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
                                <Typography>English eng222</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
                                    </div>
                                    <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
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
                                <Typography>English eng222</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
                                    </div>
                                    <div className="userShowInfoTitle">
                                        Assigment2: 60----------------------position 2
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>

            </div>


        </div>
    )
}


