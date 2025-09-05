// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import "../Cssfiles/Home.css"
// import photo from '../Components/pr.jpg'
// import photo2 from '../Components/dm.jpg'
// import profile from '../Components/profile.png'
// import pb from "../Components/pb.png"
// import ms from "../Components/ms.png"


//  function Home() {
//   return (
//      <div className="grand-father">
//         <div className="parent">

//             <div className="component1">

             
//               <h2>Best It Solution Provider</h2>
//               <h1>
//                 Innovative IT<br></br>
//                 Solutions for a Digital <br></br>
//                 Future
//               </h1>
//               <p>At InfozIT Solutions, we empower businesses with innovative IT products development such as web <br></br> 
//               development, eye-catching website design, powerful mobile applications, and strategic digital marketing services<br>
//               </br> and training. Our team of experts is ready to bring your vision to life and drive your business forward.</p>
//               <div className="button">
//                 <hp>Explore More</hp>
//               </div>
//             </div>
//               <div className="blur">

//               </div>
//                  <div className="orbit-container">
//                       <img src={profile} className="profile-image" alt="Profile" />

//                         <div className="ani" id="p1"></div>
//                         <div className="ani" id="p2"></div>
//                         <div className="ani" id="p3"></div>
//                   </div>     
//             </div>
            
//             {/* <div className="scrolling">
//                 <marquee><h1>App Development * Web Designing * Application Development * Digital Marketing * Training * IT Consulting</h1></marquee>
//             </div>


//             <div className="photo">

//               <button><h2>4500+</h2></button>
//                <img src={photo} />
//                  <img src={photo2} id="id2"/>
                
//                     <div className="right-content">
//                        <p>ABOUT INFOZIT</p>
//                        <h2>Empowring Business Growth <br></br>Through Innovative <span>Technology</span></h2>
//                        <p id="c1">InfozIT Solutions is an IT company based in Hyderabad, specializing
//                          in web development, web design, mobile application development, digital marketing services, and trainings. As a subsidiary of Kapil Knowledge, we are committed to delivering innovative and effective digital solutions tailored to meet the needs of our clients. Our team of experts is dedicated to helping businesses succeed 
//                         in the digital landscape through high-quality services and personalized support.</p>
                       
//                        <div className="right-images">
//                           <img src={pb} id="pb" /><h2>Problem Solving</h2><p id="pb-matter">Customized Solutions<br></br>
//                           for Unique Challenges</p>
//                           <img src={ms} id="pb" className="pb2"/><h2>Missions</h2><p id="ms-matter">Empowering With<br></br>Digital Solutions</p>
//                           </div>

//                     </div>
//                         <button><b>Download Profil</b></button> */}
                        

//              </div>
              
        
           
            
            
            
//   )
// }
// export default Home



         


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';  // use solid for arrow
import "../Cssfiles/Home.css"
import profile from '../Components/profile.png'
import bg from "../Components/a.jpg";
import team from "../Components/team.jpg"
import pb from "../Components/pb.jpg"
import ms from "../Components/ms.jpg"
import kapil1 from "../images/kapil1.png"
import kapil2 from "../images/kapil2.png"

import kapil3 from "../images/kapil3.png"

import kapil4 from "../images/kapil4.svg"
import webdesign from "../images/webdesign.jpg"
import business from "../images/business.png"
import project3 from "../images/project3.png"

function Home() {
  return (
    <div className="grand-father">
      <div className="parent" style={{ backgroundImage: `url(${bg})` }}>

        <div className="component1">
          <h2>Best It Solution Provider</h2>
          <h1>
            Innovative IT <br />
            Solutions for a Digital <br />
            Future
          </h1>
          <p>
            At InfozIT Solutions, we empower businesses with innovative IT product development such as web <br /> 
            development, eye-catching website design, powerful mobile applications, and strategic digital marketing services <br />
            and training. Our team of experts is ready to bring your vision to life and drive your business forward.
          </p>
          <div className="button">
            <p>Explore More</p>
          </div>
        </div>

        <div className="blur"></div>

        <div className="orbit-container">
          <img src={profile} className="profile-image" alt="Profile" />
          <div className="ani" id="p1"></div>
          <div className="ani" id="p2"></div>
          <div className="ani" id="p3"></div>
        </div>
       </div>

      <div className="block">
        <h2>ABOUT INFOZIT</h2>  
        <p id="line"></p>

        <div className="left-matter">
          <h3 id="matter">
            Empowering Business Growth <br /> Through Innovative <span>Technology</span>
          </h3>
          <p>
            InfozIT Solutions is an IT company based in Hyderabad, specializing in web development, web design, mobile application development, digital marketing services, and trainings. As a subsidiary of Kapil Knowledge, we are committed to delivering innovative and effective digital solutions tailored to meet the needs of our clients. Our team of experts is dedicated to helping businesses succeed in the digital landscape through high-quality services and personalized support.
          </p>
          <div className="iconss">
            <img src={pb}/>
            <h3>Problem Solving</h3>
            <p>Customized Solutions <br></br> for Unique Challenges</p>
          </div>
           <div className="icons">
            <img src={ms}/>
            <h3>Mission</h3>
            <p>Empowering With <br></br> Digital Challenges</p>
          </div>
          
        </div>

        <div className="team">
          <img src={team} alt="Team" />
          <button id="score">4500+</button>
          <button>
            Download Profile <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="block1">
        <p></p>
        <p id="line2"></p>
        <h2>Brand Trust Us</h2>
           <div className="image-slider">
                    <div className="slide-track">
                     <img src={kapil1} alt="img1" />
                     <img src={kapil2} alt="img2" />
                     <img src={kapil3} alt="img3" />
                     <img src={kapil4} alt="img4" />
   
                      <img src={kapil1} alt="img1" />
                       <img src={kapil2} alt="img2" />
                          <img src={kapil3} alt="img3" />
                             <img src={kapil4} alt="img4" />
            </div>
       </div>
       <div className="block2">
        <h3>IT SERVICES</h3>
        <h1>Our Services</h1>
        {/* <div className="inside-images-scroll">
          <div className="image1">
            <h2>Web Sesign</h2>
             <img src={webdesign} />
            <p>  Our visually appearing and user friendly designs captivate your audience enhancing overall engagement and satisfaction
              </p>
              <button style={{marginLeft:'10px'}}>Readmore <FontAwesomeIcon icon={faArrowRight}/></button>
          </div>
           <div className="image1">
            <h2>Web Sesign</h2>
             <img src={webdesign} />
            <p>  Our visually appearing and user friendly designs captivate your audience enhancing overall engagement and satisfaction
              </p>
              <button style={{marginLeft:'10px'}}>Readmore <FontAwesomeIcon icon={faArrowRight}/></button>
          </div>
           <div className="image1">
            <h2>Web Sesign</h2>
             <img src={webdesign} />
            <p>  Our visually appearing and user friendly designs captivate your audience enhancing overall engagement and satisfaction
              </p>
              <button style={{marginLeft:'10px'}}>Readmore <FontAwesomeIcon icon={faArrowRight}/></button>
          </div>
           <div className="image1">
            <h2>Web Sesign</h2>
             <img src={webdesign} />
            <p>  Our visually appearing and user friendly designs captivate your audience enhancing overall engagement and satisfaction
              </p>
              <button style={{marginLeft:'10px'}}>Readmore <FontAwesomeIcon icon={faArrowRight}/></button>
          </div> 
        </div>*/}
        
        <div className="inside-images-scroll">
              <div className="slide-track">
                <div className="image1">
                  <h2>Web Design</h2>
                     <img src={webdesign} />
                     <p>
                       Our visually appealing and user-friendly designs captivate your audience,
                      enhancing overall engagement and satisfaction.
                  </p>
      <button style={{ marginLeft: "10px" }}>
        Readmore <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>

    <div className="image1">
      <h2>Web Design</h2>
      <img src={webdesign} />
      <p>
        Our visually appealing and user-friendly designs captivate your audience,
        enhancing overall engagement and satisfaction.
      </p>
      <button style={{ marginLeft: "10px" }}>
        Readmore <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>

    <div className="image1">
      <h2>Web Design</h2>
      <img src={webdesign} />
      <p>
        Our visually appealing and user-friendly designs captivate your audience,
        enhancing overall engagement and satisfaction.
      </p>
      <button style={{ marginLeft: "10px" }}>
        Readmore <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>

    <div className="image1">
      <h2>Web Design</h2>
      <img src={webdesign} />
      <p>
        Our visually appealing and user-friendly designs captivate your audience,
        enhancing overall engagement and satisfaction.
      </p>
      <button style={{ marginLeft: "10px" }}>
        Readmore <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
     <div className="image1">
      <h2>Web Design</h2>
      <img src={webdesign} />
      <p>
        Our visually appealing and user-friendly designs captivate your audience,
        enhancing overall engagement and satisfaction.
      </p>
      <button style={{ marginLeft: "10px" }}>
        Readmore <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
     <div className="image1">
      <h2>Web Design</h2>
      <img src={webdesign} />
      <p>
        Our visually appealing and user-friendly designs captivate your audience,
        enhancing overall engagement and satisfaction.
      </p>
      <button style={{ marginLeft: "10px" }}>
        Readmore <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
     <div className="image1">
      <h2>Web Design</h2>
      <img src={webdesign} />
      <p>
        Our visually appealing and user-friendly designs captivate your audience,
        enhancing overall engagement and satisfaction.
      </p>
      <button style={{ marginLeft: "10px" }}>
        Readmore <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
     <div className="image1">
      <h2>Web Design</h2>
      <img src={webdesign} />
      <p>
        Our visually appealing and user-friendly designs captivate your audience,
        enhancing overall engagement and satisfaction.
      </p>
      <button style={{ marginLeft: "10px" }}>
        Readmore <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>

         
       </div>

      </div>
      <div className="Achivements">
         <h3 id="achive">Achievement</h3>
        <h1 id="heading">We are Increasing<br></br>
        Business Success</h1>
        <div className="clients">
        <img src={business} />
        <h4>150+</h4>
        <p>Satisfied Clients</p>
        <i></i>
        </div>
        <div className="clients">
        <img src={business} />
        <h4>150+</h4>
        <p>Satisfied Clients</p>
        <i></i>
        </div>
        <div className="clients">
        <img src={business} />
        <h4>150+</h4>
        <p>Satisfied Clients</p>
        <i></i>
        </div>
        <div className="clients">
        <img src={business} />
        <h4>150+</h4>
        <p>Satisfied Clients</p>
        <i></i>
        </div>
        
        
        
        
      </div>
      <div className="it-problems">
        <h1>We Solve IT Problems<br></br>With Technology</h1>
        
        <div className="problem-images">
          <img src={project3}/>
          <div className="group1">
            <p>Project1</p>
          <h4>Tech Skill Hub</h4>
          </div>
        </div>

        <div className="problem-images">
          <img src={project3}/>
          <div className="group1">
            <p>Project1</p>
          <h4>Tech Skill Hub</h4>
          </div>
        </div>

        <div className="problem-images">
          <img src={project3}/>
          <div className="group1">
            <p>Project1</p>
          <h4>Tech Skill Hub</h4>
          </div>
        </div>  
        <div className="problem-images">
          <img src={project3}/>
          <div className="group1">
            <p>Project1</p>
          <h4>Tech Skill Hub</h4>
          </div>
        </div>
        
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
