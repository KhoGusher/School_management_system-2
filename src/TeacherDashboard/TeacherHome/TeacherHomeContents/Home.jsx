import React from 'react'
import "./Home.css"
import HomeContents from './HomeContents/TeacherHomeContents'
import TimeChart from './TimeChart/TimeChart'
import { userData } from "../../../dummyData";

export default function Home(props) {
    return (
        <div className="home">
            <HomeContents homeProps={props}/>
            <TimeChart data={userData} title="Calendar Analytics" grid dataKey="Active User" />

        </div>
    )
}
