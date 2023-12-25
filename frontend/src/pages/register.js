import React from "react";
import { FcGoogle} from "react-icons/fc";
import { Link } from "react-router-dom";

function Register({login,handleLogin}){
    return(
        <div className={login?"mx-auto lg:mt-[6rem] w-3/4 bg-[#F8FAFF]":"hidden"}>
                    <h1 className="text-4xl text-center md:text-left mt-10 md:mt-10 m-4 font-bold ml-4">Sign up</h1>
                    <h2 className="text-xs mt-2 text-center md:text-left m-4 font-lato">Register your account</h2>
                    <div className="">
                        <div className="block m-4">
                            <button className="p-2 bg-white text-[#858585] font-montserrat">
                                {<FcGoogle className="inline" />} Register with google
                            </button>
                        </div>
                        <form className="text-start bg-white ring-slate-50">   
                            <label htmlFor="mail" className="block text-[16px] m-4 font-lato">Email address</label>                    
                            <input id="mail" type="email" className="h-[43px]  bg-[#F5F5F5] rounded w-full p-2 m-2 focus:outline-none font-lato"/>  
                            <label htmlFor="password" className="block text-[16px]  m-4 font-lato">password</label>                    
                            <input id="password" type="password" className="h-[43px] bg-[#F5F5F5] rounded w-full p-2 m2 focus:outline-none font-lato"/> 
                            <label htmlFor="password" className="block text-[16px]  m-4 font-lato">confirm password</label>                    
                            <input id="password" type="password" className="h-[43px] bg-[#F5F5F5] rounded w-full p-2 m2 focus:outline-none font-lato"/>        
                            <button className="block bg-[#778379] text-white w-3/4 h-[43px] rounded-md mt-2 mx-auto m-4 font-montserrat font-bold"><Link to="/coding-profiles">Sign me up</Link></button> 
                            <p className="text-center text-[#858585] mt-2 font-lato">Already a member? <a href="/" className="text-blue-400 m-4 font-lato" onClick={handleLogin} >Login here</a></p>             
                        </form>
                    </div>
            </div>
    );
};

export default Register;