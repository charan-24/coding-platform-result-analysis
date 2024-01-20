import React, { useState,useEffect } from "react";
import Navbar from "../../layouts/navbar";
import { Link } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import AddUsers from "./addUsers";
import AddBatch from "./addBatch";
import axios from 'axios';

function Dashboard () {
    const [showBatchModal, setShowBatchModal] = useState(0);
    const [showUserModal,setShowUserModal] = useState(0);
    const [showList, setShowList] = useState(0);
    const [Batches,setBatches] = useState([]);
    const [batchId,setBatchId] = useState(null);
    
    const handleShowBatchModal = ()=>{
        // console.log(showModal)
        setShowBatchModal(!showBatchModal);
    }

    const handleShowUserModal = ()=>{
        // console.log(showModal)
        setShowList(0);
        setShowUserModal(!showUserModal);
    }

    const handleClickOutSide = (e) =>{
        if(e.target.id === "addbatch" || e.target.id=== "addusers"){
            if(showBatchModal){
                handleShowBatchModal();
            }
            else if(showUserModal){
                handleShowUserModal()
            }
        }
    }

    const handleList = (e) =>{
        // console.log(showList)
        setBatchId(e.target.id);
        setShowList(!showList);
    }

    const handleBatches = async () => {
        const arr = [];
        const response = await axios.get('http://localhost:5000/batch/getBatches')
                                    .then(res=>{
                                        // console.log(res.data);
                                        res.data.map(item=>{
                                            arr.push({
                                                id:item._id,
                                                batchname:item.batchname,
                                                status: item.batchstatus,
                                            })
                                        })
                                        // console.log(arr);
                                        setBatches(arr);                                       
                                    })
                                    .catch(err=>console.error(err));       
    }

    useEffect(()=>{
        handleBatches();
    },[]) 
    
    return(
        <div onClick={handleClickOutSide}>
            <Navbar />
                <AddBatch display={showBatchModal} handleShowBatchModal={handleShowBatchModal} handleBatches={handleBatches}/>
                <AddUsers display={showUserModal} handleShowUserModal={handleShowUserModal} />
                <div className={`flex flex-row flex-wrap md:justify-around lg:justify-normal`}>
                    {Batches.map((batch)=>(
                        <div key={batch.id} className="w-full md:w-1/3 lg:w-1/4 h-[120px] border-2 border-black m-4 px-4 py-3 flex flex-col justify-between rounded-md">
                        <div className="flex flex-row justify-between">
                            <h1 className="font-bold text-2xl "><Link to='/leaderboard' className="hover:underline">{batch.batchname}</Link></h1>
                            <div className="relative">
                                <IoMdMore className="text-2xl cursor-pointer" id={batch.id} onClick={handleList}/>
                                <div className={showList ? "absolute right-0 top-5  w-[100px]":"hidden"}>
                                    <ul >
                                        <li className=" hover:bg-slate-200" onClick={handleShowUserModal}>Add Users</li>
                                    </ul>
                                    <ul>
                                        <li className=" hover:bg-slate-200" >Delete Batch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-[13px] text-gray-500 font-semibold">{batch.status}</p>
                            {/* <button className="bg-gray-200 font-semibold px-4 rounded-sm text-lg"><Link to='/leaderboard'>open</Link></button> */}
                        </div>
                    </div>
                    ))}
                </div>
                <button className="block mx-auto bg-amber-300 rounded-md px-3 py-1 md:px-6 md:py-2 mt-5" onClick={handleShowBatchModal}>
                            Add a NewBatch
                </button>
        </div>
    );
};

export default Dashboard;