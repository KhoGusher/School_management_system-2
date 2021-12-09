import React from 'react'
import "./Home.css"
import StudentHomeContents from './HomeContents/StudentHomeContents'
import TimeChart from './TimeChart/TimeChart'
import { userData } from "../../../dummyData";

export default function Home() {
    return (
        <div className="home">
            <StudentHomeContents  />
            <TimeChart data={userData} title="Calendar Analytics" grid dataKey="Active User" />

        </div>
    )
}
