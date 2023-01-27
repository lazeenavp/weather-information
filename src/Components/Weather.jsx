import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBBtn,MDBRipple} from 'mdb-react-ui-kit';
import { Newcontext } from '../App';
import { Link } from 'react-router-dom';



function Weather  () {
    const {value1,value2}=useContext(Newcontext);
    
    const [info,setinfo]=useState([]);
    
    const [hide,sethide]=value1;
    const [New,setNew]=value2;
   
    useEffect(() => {
      axios.get("http://openweathermap.org/api" ).then((res)=>setinfo(res.data));
      console.log(info);
      setNew(true)
      sethide(info)
  
    }, [info]);
     
     
        
        
   const [search,setsearch]=useState("");
   const Filteredinfo=hide.filter((item)=>(item.title).includes(search));
   //console.log(Filteredinfo);

         return (
    <div>
     
      <div className='row' style={{minWidth:"300px"}}>
        {Filteredinfo.map((info)=>{
           
           
           return(
            
            
              <MDBCard
              className='float-left mt-5' 
              style={{width:"400px",marginLeft:"50px"}}
              >
              
              <Link to={`/details/${info.id}`} style={{textDecoration:'none'}}>
              
              <MDBRipple  
              rippleColor='light'
              rippleTag='div' 
              className='bg-image hover-overlay'
              >
             
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
             </MDBRipple>
      <MDBCardBody>
        
        <MDBCardTitle className='title'>{info.name}</MDBCardTitle>
        
        {/* <MDBCardImage className='image'
              src={pro.image}  
              style={{width:"300px",height:"300px"}}
               fluid alt='...' /> */}
        {/* <MDBCardText>Release Date:{mov.release_date}</MDBCardText>
        <MDBCardText>Movie Overview:{mov.overview}</MDBCardText> */}
{/* <div>
    <MDBBtn className='button button-primary'>Add</MDBBtn>
</div> */}

      </MDBCardBody>
      </Link>
    </MDBCard>


            );
            
        })}
    </div>
    </div>
  )
}

export default Weather;