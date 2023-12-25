import React from "react";
import { FcGoogle} from "react-icons/fc";
import { AiFillGithub,AiFillTwitterCircle,AiFillLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { useState } from "react";
import Register from "./register";

function Login() {
    const [login,setLogin] = useState(0);
    const handleLogin = (e)=>{
        e.preventDefault();
        setLogin(!login)
    }
    return(
        <div className="md:grid md:grid-cols-2 relative">
            <div className="relative">
                <div className="max-md:hidden left-side w-full h-screen text-white font-extrabold relative bg-[#778379]">
                    <h1 className="xl:text-4xl text-white">LOGO</h1>
                    <h1 className="block text-center text-3xl">WELCOME BACK</h1>
                    <div className="absolute bottom-[1rem] ml-[3rem] lg:ml-[7rem] xl:ml-[12rem] flex flex-row gap-10 box-border text-4xl mt-8">
                        <h1>{<AiFillGithub/>}</h1>
                        <h1>{<AiFillLinkedin/>}</h1>
                        <h1>{<AiFillTwitterCircle/>}</h1>
                        <h1>{<BsDiscord/>}</h1>
                    </div>
                </div>
                <div className="md:hidden flex flex-row justify-between font-extrabold gap-10 text-black bg-[#778379]">
                    <h1>LOGO</h1>
                    <h1>Board.</h1>        
                </div>
            </div>         
            <div className={!login?"mx-auto lg:mt-[6rem] 2xl:w-3/4 bg-[#F8FAFF]":"hidden"}>
                    <h1 className="text-4xl text-center md:text-left mt-10 md:mt-10m-4 font-bold ml-4">Sign in</h1>
                    <h2 className="text-xs mt-2 text-center md:text-left m-4 font-lato">Sign into your account</h2>
                    <div className="">
                        <div className="block m-4">
                            <button className="p-2 bg-white text-[#858585] font-montserrat">
                                {<FcGoogle className="inline" />} Sign in with google
                            </button>
                        </div>
                        <form className="text-start bg-white ring-slate-50">   
                            <label htmlFor="mail" className="block text-[16px] m-4 font-lato">Email address</label>                    
                            <input id="mail" type="email" className="h-[43px]  bg-[#F5F5F5] rounded w-full p-2 m-2 focus:outline-none font-lato"/>  
                            <label htmlFor="password" className="block text-[16px]  m-4 font-lato">password</label>                    
                            <input id="password" type="password" className="h-[43px] bg-[#F5F5F5] rounded w-full p-2 m2 focus:outline-none font-lato"/>  
                            <a href="/" className="block text-blue-400 m-4 font-lato">Forgot password?</a>     
                            <button className=" block bg-[#778379] text-white w-3/4 h-[43px] rounded-md mt-2 mx-auto m-4 font-montserrat font-bold">Sign in</button> 
                            <p className="text-center text-[#858585] mt-2 font-lato">Don't have an account? <a href="/" className="text-blue-400 m-4 font-lato" onClick={handleLogin} >Register here</a></p>             
                        </form>
                    </div>
            </div>
            <Register login={login} handleLogin={handleLogin} />
            <div className="md:hidden flex flex-row justify-center  items-center gap-10 box-border text-4xl mt-8">
                <h1>{<AiFillGithub/>}</h1>
                <h1>{<AiFillLinkedin/>}</h1>
                <h1>{<AiFillTwitterCircle/>}</h1>
                <h1>{<BsDiscord/>}</h1>
            </div>        
        </div>
    );
}

export default Login;