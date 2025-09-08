// import React, { useState, useEffect } from 'react';
// import "./Navbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';

// import { Link } from 'react-router-dom';
// import icon from "./icon.png";

// export default function Navbar() {
//   const [fix, setFix] = useState(false);
//   const[modal,setModal]=useState(false);

//   const toggleModal=()=>{
//     setModal(!modal)
//   }
// if(modal){
//   document.body.classList.add('active-modal')
// }else{
//   document.body.classList.remove('active-modal')
// }
//   const handleScroll = () => {
//     if (window.scrollY >= 8092) {
//       setFix(true);
//     } else {
//       setFix(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={fix ? 'navbarfixed' : 'navbar'}>
//       <img src={icon} alt="Logo" className="logo" />

//       <ul>
//         <li><Link to="/" id="home">Home</Link></li>
//         <li><Link to="/About">About</Link></li>
//         <li><Link to="/Services">Services</Link></li>
//         <li><Link to="/Projects">Projects</Link></li>
//         <li><Link to="/Blogs">Blogs</Link></li>
//         <li><Link to="/Contact">Contact</Link></li>
//       </ul>
//        <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />
//         {!modal && (
//         <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />
//       )}
       
//       { modal &&
//          <div className="pop-up">
//         <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal}/>
//         <h2>Venkatesh</h2>
//        </div>

//       }
       
       
       
       
       
       
       
       
       
       
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import icon from "./icon.png";

export default function Navbar() {
  const [fix, setFix] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // Optional: Lock scroll when modal is active
  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);

  const handleScroll = () => {
    if (window.scrollY >= 8092) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={fix ? 'navbarfixed' : 'navbar'}>
      <img src={icon} alt="Logo" className="logo" />

      <ul>
        <li><Link to="/" id="home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>

      {/* Show bar icon only when modal is false */}
      {!modal && (
        <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleModal} />
      )}

      {/* Show popup only when modal is true */}
      {modal && (
        <div className="pop-up">
          <FontAwesomeIcon icon={faXmark} id="xmark" onClick={toggleModal} />
          <h2>Welcome!</h2>
          <form>
            <label>Name*:</label><br></br>
            <input type="text" placeholder="enter your name"></input><br></br>
            <label>E-Mail*:</label><br></br>
            <input type="email" placeholder="enter your mail"></input><br></br>
            <label>Mobile No*:</label><br></br>
            <input type="number" placeholder="enter phone number"></input><br></br>
            <label>City*:</label><br></br>
            <input type="text" placeholder="enter your city"></input><br></br>
            <button>Submit</button>

          </form>
        </div>
      )}
    </div>
  );
}
