import React, { useEffect, useState } from 'react';
import LineGraph from './LineGraph';
import BarGraph from './BarChart';
import DonutChart from './DonutChart';
import UserInfo from './UserProfileInfo';
import Navbar from '../../layouts/navbar';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const MyProfile = () => {
  const [userData,setUserData] = useState({});
  const [donutData,setDonutData] = useState([]);
  const {auth} = useAuth();
  const rollno = auth.rollno;
  const getScores = async () => {
    await axios.get('http://localhost:5000/score/getIndScore/'+rollno)
                                .then(res=>{
                                    let temp = Object.values(res.data.scoreObj);
                                    console.log(temp);
                                    setDonutData([...temp]);
                                    setUserData({
                                      fullname: res.data.fullname,
                                      rollno: res.data.rollno,
                                      total: res.data.total
                                    });                                                    
                                })
                                .catch(err=>{
                                    console.error(err);
                                })
  }

  useEffect(()=>{
    getScores();
  },[])

  return (
    <div>
      <Navbar />
        <div className='lg:grid lg:grid-cols-12 lg:gap-3'>
          <div className='lg:col-span-2 border-r-2 border-gray-300'>
            <UserInfo user={userData}/>
          </div>
          <div className='lg:col-span-10'>
            <div className='lg:grid lg:grid-cols-12'>
              <div className="lg:col-span-6">
                <BarGraph />
              </div>
              <div className='lg:col-span-6 flex items-center'>
                <DonutChart donutData={donutData}/>
              </div>
            </div>  
            <hr className='my-4'/>        
            <div className='w-full lg:w-3/4 mx-auto'> 
              <LineGraph />
            </div>
          </div>
        </div>  
    </div>
  );
};

export default MyProfile;

