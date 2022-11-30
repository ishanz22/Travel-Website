import React,{useEffect} from "react";
import "./main.css";
import img from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'
import img5 from '../../assets/image5.jpg'
import img6 from '../../assets/image6.jpg'
import img7 from '../../assets/image7.jpg'
import img8 from '../../assets/image8.jpg'
import img9 from '../../assets/image9.jpg'
import img10 from '../../assets/image10.jpg'
import img11 from '../../assets/image11.jpg'
import img12 from '../../assets/image12.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from "aos";
import 'aos/dist/aos.css'
const Data =[
  {
  id:1,
  imgSrc:img,
  desTitle:'Bora Bora',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '
  },
  {
  
      id:2,
      imgSrc:img2,
      desTitle:'Machu Pichu',
      location:'New Zealand',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '
   
  },
  {
  
    id:3,
    imgSrc:img3,
    desTitle:'Machu Pichu',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '
 
},
{
  
  id:4,
  imgSrc:img4,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},
{
  
  id:5,
  imgSrc:img5,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},
{
  
  id:4,
  imgSrc:img4,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},{
  
  id:5,
  imgSrc:img5,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},{
  
  id:6,
  imgSrc:img6,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},
{
  
  id:7,
  imgSrc:img7,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},{
  
  id:8,
  imgSrc:img8,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},
{
  
  id:9,
  imgSrc:img9,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},
{
  
  id:10,
  imgSrc:img10,
  desTitle:'Machu Pichu',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has '

},


 
 
 
]

const Main =()=> {
// react hook to add a scroll animation
useEffect(()=>{
  Aos.init({duration: 2000})
  },[])
   
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3   data-aos="fade-right"      className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
      {
        Data.map(({id,imgSrc,desTitle,location,grade,fees,description})=>{
            return(

              <div key={id}
              data-aos="fade-up"
               className="singleDestination">

                  <div className="imageDiv">
                    <img src={imgSrc} alt=
                    {desTitle}/>
                  </div>
                  
                  <div className="cardInfo">
                    <h4 className="desTitle">{desTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon"/>
                      <span className="name">{location}</span>
                    </span>
                    
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      Details <HiOutlineClipboardCheck className="icon"/>
                    </button>
                  </div>
              </div>
            )
        })
      }
      </div>
    </section>
  );
}

export default Main;
