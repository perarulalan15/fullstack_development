// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { images, Links } from '../../constants';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleNav = () => {
    setMenu(!menu);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenu(false);
    }
  };

  return (
    <nav>
      <img className='logo' src={images.logo} alt="logo"/>
      <ul className={`nav_links ${menu ? 'show' : ''}`}>
        {Links.map((link) => (
          <li key={link.name}>
            <a
              href={`#${link.name}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.name);
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;






// import React, {useState} from 'react';
// import './Navbar.css';
// import { images, Links, menuIcon } from '../../constants';

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const toggleNav = () => {
//     setMenu(!menu);
//   };
//   return (
//     <nav>
//       <img className='logo' src={images.logo} alt="logo"/>
//       <div className='menu-img' onClick={toggleNav}>
//       <svg id='menu'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//       </svg>
//       </div>
//       <ul className={`nav_links ${menu ? 'show' : ''}`}>
//           {
//             Links.map((Link) => (
//               <li key={Link.name}>
//                 <a href={Link.link} onClick={toggleNav}>{Link.name}</a>
//               </li>
//             ))
//           }
//       </ul>
//     </nav>
//   )
// }

// export default Navbar