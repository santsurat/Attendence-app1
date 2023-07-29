import React from 'react';
import Sewa from '../../src/assets/Image/Sewa.jpg';
import Branch from '../../src/assets/Image/Branch.jpg';
import Field from '../../src/assets/Image/Field.jpg';
import { useNavigate } from 'react-router-dom';
import '../App.css';


const Body = () => {

  const navigate=useNavigate();

  return (
    <div className='bgCard'>
      <div className="card-container" >
          <div className="card" onClick={() => navigate("/branchattendence")}>
            <img className='branchImg' src={Sewa} alt=''/>
            <h1>AdanBagh Satsang Attendance</h1>
          </div>
        <div className="card" onClick={() => navigate("/sewaattendence")}>
          <img className='branchImg'  src={Branch} alt="this is Sewa icon"/>
          <h1>AdanBagh Sewa Attendance</h1>
        </div>
        <div className="card" onClick={() => navigate("/fieldattendence")}>
          <img   className='branchImg' src={Field} alt="this is Field icon" ></img>
          <h1>AdanBagh Field Attendance</h1>
        </div>
      </div>
    </div>
  );
};


export default Body