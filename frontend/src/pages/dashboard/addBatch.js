import React,{useState} from "react";
import { RxCross1 } from "react-icons/rx";
import * as XLSX from 'xlsx';
import axios from 'axios';
const AddBatch = ({display, handleShowBatchModal}) =>{
    const [selectedFile,setSelectedFile] = useState(null);
    const [batchname,setBatchName] = useState("");
    const [excelData,setExcelData] = useState(null);
    
    const handleBatchName = (e)=>{
        e.preventDefault();
        setBatchName(e.target.value);
    }

    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    const handleFileSubmit = async (e)=>{
        e.preventDefault();
        if(!selectedFile){
            alert('please slect a file');
            return;
        }
        
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming the first sheet is the one of interest
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert sheet data to JSON
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            // Store the data in state
            setExcelData(jsonData);
            // console.log(batchname);
            // console.log(jsonData);
        };
        reader.readAsArrayBuffer(selectedFile);
        const batchData = {
            batchname:batchname,
            users:excelData
        }
        console.log(batchData.users);
        await axios.post('http://localhost:5000/batch/addBatch', batchData, {
              headers: {
                'Content-Type': 'application/json'
                // Add other headers as needed
              }
            })
            .then(response => {
              // Handle the response data if needed
              console.log(response.data);
            })
            .catch(error => {
              console.error('Error:', error.message);
        });    
    }

    return(
            <div className={`${display?"fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center":"hidden"}`} id="addbatch">
                <form className="w-1/3 text-start bg-white ring-slate-50 border-2 border-black p-4" onSubmit={handleFileSubmit}> 
                    <RxCross1 className="float-right text-2xl" onClick={handleShowBatchModal}/>  
                    <label htmlFor="username" className="block text-[16px] mt-4 font-lato" >Batch Name</label>                    
                    <input id="username" type="text" name="username" placeholder="Enter your batchname..."className="mb-4 h-[43px]  bg-[#F5F5F5] rounded w-full focus:outline-none font-lato" onChange={handleBatchName}/>
                    <p className="text-center">And</p>
                    <input className="" type="file" placeholder="upload an excel sheet" onChange={handleFileChange}/>
                    <button className="block mx-auto bg-amber-300 rounded-md px-3 py-1 md:px-6 md:py-2 mt-5" type="submit">
                        Submit
                    </button>                 
                </form>
            </div>
    );
}

export default AddBatch;