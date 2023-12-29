import React from "react";
import Navbar from "../layouts/navbar";
function MyAccount(){
    return(
        <div>
            <Navbar />
            <div className="lg:text-[20px]">
                <h1 className="font-bold underline">Personal details</h1>
                <div className="flex flex-col lg:flex-row lg:gap-[50px]">
                    <label htmlFor="fullname" className="">Full Name: 
                        <input className="block mb-4 h-[43px] px-5 underline rounded focus:outline-none font-lato" id="fullname" defaultValue="Tyler Durdern" disabled="disabled"/>
                    </label>
                    <label htmlFor="username">User Name:
                        <input className="block mb-4 h-[43px] px-5 underline bg-[#F5F5F5] rounded  focus:outline-none font-lato" id="username" defaultValue="tylerDurden99"/>
                    </label>
                    <label htmlFor="email">Email Name:
                        <input className="block mb-4 h-[43px] px-5 underline bg-[#F5F5F5] rounded  focus:outline-none font-lato" id="email" defaultValue="wedonttalk@it.com" disabled="disabled"/>
                    </label>
                </div>         
            </div>
            <div className="lg:text-[20px]">
                <h1 className="font-bold underline">Coding Profiles</h1>
                <div className="flex flex-col">
                    <label htmlFor="hackerrank">HackerRank:
                        <input className="mb-4 ml-4 h-[43px]  bg-[#F5F5F5] rounded  focus:outline-none font-lato" id="hackerrank" defaultValue="hackeruname"/>
                    </label>
                    
                    <label htmlFor="leetcode">LeetCode:
                        <input className=" mb-4 ml-4 h-[43px]  bg-[#F5F5F5] rounded  focus:outline-none font-lato" id="leetcode" defaultValue="leetuname"/>
                    </label>
                    <label htmlFor="codechef">Codechef:
                        <input className=" mb-4 ml-4 h-[43px]  bg-[#F5F5F5] rounded  focus:outline-none font-lato" id="codechef" defaultValue="chefuname"/>
                    </label>

                    <label htmlFor="codeforces">Codeforces:
                        <input className=" mb-4 ml-4 h-[43px]  bg-[#F5F5F5] rounded  focus:outline-none font-lato" id="codeforces" defaultValue="forcesuname"/>
                    </label>
                </div>            
            </div>
            <div className="lg:text-[20px]">
                <h1 className="font-bold underline">Social Profiles</h1>
                <label htmlFor="linkedin">Linkedin:
                    <input className="mb-4 ml-4 h-[43px]  bg-[#F5F5F5] rounded  focus:outline-none font-lato" id="linkedin" defaultValue="https://www.linkedin.com/"/>
                </label>
            </div>
            <div className="lg:text-[20px]">
                <h1 className="font-bold underline">Development Profiles</h1>
                <label htmlFor="github">Github:
                    <input className="mb-4 ml-4 h-[43px]  bg-[#F5F5F5] rounded  focus:outline-none font-lato" id="github" defaultValue="https://www.github.com/"/>
                </label>
            </div>
            <button className="block bg-[#778379] text-white w-[240px] h-[43px] rounded-md mt-2 mx-auto m-4 font-montserrat font-bold">submit</button> 
          </div>
    );
};

export default MyAccount;