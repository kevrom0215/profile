import React from "react";
import '../../styles/global.css'
import hehe from "../../assets/hehe.jpeg"

const Dashboard = () => {
    return (
        <div className="wrapper">
            <img src={hehe} style={{height: '300px'}}></img>
            <h2>Dashboard</h2>
            <p>Welcome to the Dashboard!</p>
        </div>
    )
}

export default Dashboard;
