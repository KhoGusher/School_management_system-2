import React from 'react'
import "./Home.css"
import GuardianHomeContents from './HomeContents/GuardianHomeContents'
import TimeChart from './TimeChart/TimeChart'
import { userData } from "../../../dummyData";

export default function Home() {
    return (
        <div className="home">
            <GuardianHomeContents />
            <TimeChart data={userData} title="Calendar Analytics" grid dataKey="Active User" />

        </div>
    )
}
