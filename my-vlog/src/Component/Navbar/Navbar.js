// import React, { useState } from 'react';
// import './Navbar.css'; // Import CSS file for styling

// function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   // Function to toggle menu
//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-brand">Your Logo</div>
//       <ul className={isMenuOpen ? "navbar-links open" : "navbar-links"}>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Blog</a></li>
//         <li><a href="#">About Us</a></li>
//       </ul>
//       <div className="logout-btn">
//         <button>Logout</button>
//       </div>
//       <div className="navbar-toggler" onClick={toggleMenu}>
//         <div className="navbar-toggler-bar"></div>
//         <div className="navbar-toggler-bar"></div>
//         <div className="navbar-toggler-bar"></div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// Navbar.js

// import React, { useState } from 'react';
// import './Navbar.css'; // Import CSS file for styling

// function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   // Function to toggle menu
//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-brand">Your Logo</div>
//       <div className="navbar-toggler" onClick={toggleMenu}>
//         <div className="navbar-toggler-bar"></div>
//         <div className="navbar-toggler-bar"></div>
//         <div className="navbar-toggler-bar"></div>
//       </div>
//       <ul className={isMenuOpen ? "navbar-links open" : "navbar-links"}>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Blog</a></li>
//         <li><a href="#">About Us</a></li>
//       </ul>
//       <div className="logout-btn">
//         <button>Logout</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// Navbar.js

// import React, { useState } from 'react';
// import './Navbar.css'; // Import CSS file for styling

// function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   // Function to toggle menu
//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-brand">Your Logo</div>
//       <div className="navbar-toggler" onClick={toggleMenu}>
//         <div className="navbar-toggler-bar"></div>
//         <div className="navbar-toggler-bar"></div>
//         <div className="navbar-toggler-bar"></div>
//       </div>
//       <ul className={isMenuOpen ? "navbar-links open" : "navbar-links"}>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Blog</a></li>
//         <li><a href="#">About Us</a></li>
//         <div className="logout-btn">
//           <button>Logout</button>
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;
// Navbar.js

// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo2.jpeg';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img style={{ height: '70px' }} src={Logo} alt="Logo" />
      </Link>
      <div className="navbar-toggler" onClick={toggleMenu}>
        <div className="navbar-toggler-bar"></div>
        <div className="navbar-toggler-bar"></div>
        <div className="navbar-toggler-bar"></div>
      </div>
      <ul className={isMenuOpen ? "navbar-links open" : "navbar-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
