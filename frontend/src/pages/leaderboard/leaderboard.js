import React from "react";
import Navbar from '../../layouts/navbar';
import './leaderboard.css';
function LeaderBoard(){
    const users = [
            {
                sno:1,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:2,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:3,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:4,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:5,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:6,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:7,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:8,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:9,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
            {
                sno:10,
                name: "xavier",
                college: "RIEC",
                hacker:1200,
                leet:1410,
                chef:210,
                force:810,
                total:6900
            },
    ];
    console.log({users});
    return(
        <div>
            <Navbar />
            <div>
                <table className="w-full">
                    <thead>
                        <tr className="thead-row">
                            <th>S.No</th>
                            <th>Name</th>
                            <th>College</th>
                            <th>HackerRank</th>
                            <th>LeetCode</th>
                            <th>CodeChef</th>
                            <th>CodeForces</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>(
                            <tr key={user.sno} className={index%2!==0?"tbody-row bg-[#f5f5f5]":"tbody-row"}>
                                <td>{user.sno}</td>
                                <td>{user.name}</td>
                                <td>{user.college}</td>
                                <td>{user.hacker}</td>
                                <td>{user.leet}</td>
                                <td>{user.chef}</td>
                                <td>{user.force}</td>
                                <td>{user.total}</td>
                            </tr>
                        ))}                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderBoard;