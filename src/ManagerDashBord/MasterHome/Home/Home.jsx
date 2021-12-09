import React from 'react'
import "./Home.css"
import HomeContents from './HomeContents/HomeContents'
import TimeChart from './TimeChart/TimeChart'
import { userData } from "../../../dummyData";

export default function ManagerHome(props) {
    return (
        <div className="home">
            <HomeContents homeProps = {props} />
            <TimeChart data={userData} title="Calendar Analytics" grid dataKey="Active User" />

        </div>
    )
}
