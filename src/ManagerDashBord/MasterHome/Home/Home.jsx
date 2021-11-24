import React from 'react'
import "./Home.css"
import HomeContents from './HomeContents/HomeContents'
import TimeChart from './TimeChart/TimeChart'
import { userData } from "../../../dummyData";

export default function Home() {
    return (
        <div className="home">
            <HomeContents />
            <TimeChart data={userData} title="Calendar Analytics" grid dataKey="Active User" />

        </div>
    )
}
