// import React, { useState, useEffect } from "react";
// import NavBar from '../Navbar/Navbar';
// import Footer from "../Footer/Footer";
// import './About.css';
// import { NavLink } from "react-router-dom";

// // Import images directly from the src folder
// import MarvImage from "../marv.jpg";  
// import Marv1Image from '../marv1.jpg';  
// import Marv2Image from '../marv2.jpg';  
// import Marv3Image from '../marv3.jpg';  
// import Marv5Image from '../marv5.jpg';  
// import Marv6Image from '../marv6.jpg';  
// import Marv7Image from '../marv7.png';  
// import Marv8Image from '../marv8.jpg';  
// import Marv9Image from '../marv9.png';  
// import Marv10Image from '../marv10.jpg';  
// import Marv11Image from '../marv11.jpg';  
// import Marv12Image from '../marv12.png';  

// // Partner logos using the same images
// const partnerLogos = [
//   { src: Marv5Image, alt: "Partner 1", link: "https://www.partner1.com" },
//   { src: Marv6Image, alt: "Partner 2", link: "https://www.partner2.com" },
//   { src: Marv7Image, alt: "Partner 3", link: "https://www.partner3.com" },
//   { src: Marv8Image, alt: "Partner 4", link: "https://www.partner4.com" },
//   { src: Marv9Image, alt: "Partner 5", link: "https://www.partner5.com" },
//   { src: Marv10Image, alt: "Partner 6", link: "https://www.partner6.com" },
//   { src: Marv11Image, alt: "Partner 7", link: "https://www.partner7.com" },
// ];

// const images = [
//   MarvImage,
//   Marv1Image,
//   Marv2Image,
//   Marv3Image,
// ];

// const About = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [intervalId, setIntervalId] = useState(null); // Track interval for auto-slide
//   const [isHovered, setIsHovered] = useState(false); // Check if carousel is hovered

//   // Handle automatic image change every 10 seconds
//   useEffect(() => {
//     if (!isHovered) {
//       const id = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 10000);
//       setIntervalId(id);
//     }

//     return () => {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [isHovered, intervalId]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className='App'>
//       <div className="container mt-5">
//         <NavBar />

//         {/* Carousel Section with Control */}
//         <div
//           className="carousel-container"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="carousel">
//             <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} />
//             <div className="carousel-note">
//               <h3>Welcome to MARV Company!</h3>
//               <p>At Marv, we create spaces that blend beauty with functionality. Our team is dedicated to delivering stunning, innovative, and affordable interior design solutions.</p>
//             </div>

//             {/* Carousel Navigation Controls */}
//             <div className="carousel-controls">
//               <button className="carousel-control-prev" onClick={handlePrevious}>❮</button>
//               <button className="carousel-control-next" onClick={handleNext}>❯</button>
//             </div>

//             {/* Carousel Dots */}
//             <div className="carousel-dots">
//               {images.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`dot ${currentIndex === index ? "active" : ""}`}
//                   onClick={() => setCurrentIndex(index)}
//                 ></span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Project Section */}
//         <div className="image-section">
//           <h2 className="browse-heading">Our Project</h2>
//           <div className="image-gallery">
//             <NavLink to="https://www.marvdecor.com/" className="image-link">
//               <img src={MarvImage} alt="Category Image 1" className="circular-image" />
//             </NavLink>
//             <NavLink to="https://nisspvtltd.in/" className="image-link">
//               <img src={Marv3Image} alt="Category Image 2" className="circular-image" />
//             </NavLink>
//             <NavLink to="/electronics" className="image-link">
//               <img src={Marv2Image} alt="Category Image 3" className="circular-image" />
//             </NavLink>
//           </div>
//         </div>

//         {/* Partners Section */}
//         <div className="partners-section">
//           <center><h2 className="section-title">Our Partners</h2></center>
//           <div className="partners-logos-wrapper">
//             <div className="partners-logos">
//               {partnerLogos.map((partner, index) => (
//                 <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-logo-link">
//                   <img src={partner.src} alt={partner.alt} className="partner-logo" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Services Section */}
//         <div className="services-section">
//           <h2 className="section-title">Our Services</h2>
//           <div className="services-list">
//             <div className="service-item">
//               <h4>Interior Design</h4>
//               <p>We offer personalized interior design solutions that bring your vision to life.</p>
//             </div>
//             <div className="service-item">
//               <h4>Furniture Design</h4>
//               <p>Custom furniture pieces designed to suit your style and space requirements.</p>
//             </div>
//             <div className="service-item">
//               <h4>Consultation</h4>
//               <p>Expert advice on how to optimize your space, color schemes, and more.</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";
import NavBar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import './About.css';
import { NavLink } from "react-router-dom";

// Import images directly from the src folder
import MarvImage from "../marv.jpg";  
import Marv1Image from '../marv1.jpg';  
import Marv2Image from '../marv2.jpg';  
import Marv3Image from '../marv3.jpg';  
import Marv5Image from '../marv5.jpg';  
import Marv6Image from '../marv6.jpg';  
import Marv7Image from '../marv7.png';  
import Marv8Image from '../marv8.jpg';  
import Marv9Image from '../marv9.png';  
import Marv10Image from '../marv10.jpg';  
import Marv11Image from '../marv11.jpg';  
import Marv12Image from '../marv12.png';  

// Partner logos using the same images
const partnerLogos = [
  { src: Marv5Image, alt: "Partner 1", link: "https://www.partner1.com" },
  { src: Marv6Image, alt: "Partner 2", link: "https://www.partner2.com" },
  { src: Marv7Image, alt: "Partner 3", link: "https://www.partner3.com" },
  { src: Marv8Image, alt: "Partner 4", link: "https://www.partner4.com" },
  { src: Marv9Image, alt: "Partner 5", link: "https://www.partner5.com" },
  { src: Marv10Image, alt: "Partner 6", link: "https://www.partner6.com" },
  { src: Marv11Image, alt: "Partner 7", link: "https://www.partner7.com" },
];

const images = [
  MarvImage,
  Marv1Image,
  Marv2Image,
  Marv3Image,
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Track interval for auto-slide
  const [isHovered, setIsHovered] = useState(false); // Check if carousel is hovered

  // Handle automatic image change every 10 seconds
  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);
      setIntervalId(id);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovered, intervalId]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='App'>
      <div className="container mt-5">
        <NavBar />

        {/* Carousel Section with Control */}
        <div
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel">
            <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} />
            <div className="carousel-note">
              <h3>Welcome to MARV Company!</h3>
              <p>At Marv, we create spaces that blend beauty with functionality. Our team is dedicated to delivering stunning, innovative, and affordable interior design solutions.</p>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="carousel-controls">
              <button className="carousel-control-prev" onClick={handlePrevious}>❮</button>
              <button className="carousel-control-next" onClick={handleNext}>❯</button>
            </div>

            {/* Carousel Dots */}
            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="image-section">
          <h2 className="browse-heading">Our Project</h2>
          <div className="image-gallery">
            <NavLink to="https://www.marvdecor.com/" className="image-link">
              <img src={MarvImage} alt="Category Image 1" className="circular-image" />
            </NavLink>
            <NavLink to="https://nisspvtltd.in/" className="image-link">
              <img src={Marv3Image} alt="Category Image 2" className="circular-image" />
            </NavLink>
            <NavLink to="/electronics" className="image-link">
              <img src={Marv2Image} alt="Category Image 3" className="circular-image" />
            </NavLink>
          </div>
        </div>

        {/* Partners Section */}
        <div className="partners-section">
          <center><h2 className="section-title">Our Partners</h2></center>
          <div className="partners-logos-wrapper">
            <div className="partners-logos">
              {partnerLogos.map((partner, index) => (
                <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-logo-link">
                  <img src={partner.src} alt={partner.alt} className="partner-logo" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <h2 className="section-title">Our Services</h2>
          <div className="services-list">
            <div className="service-item">
              <h4>Interior Design</h4>
              <p>We offer personalized interior design solutions that bring your vision to life.</p>
            </div>
            <div className="service-item">
              <h4>Furniture Design</h4>
              <p>Custom furniture pieces designed to suit your style and space requirements.</p>
            </div>
            <div className="service-item">
              <h4>Consultation</h4>
              <p>Expert advice on how to optimize your space, color schemes, and more.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section in a Single Row */}
        <div className="testimonials-section">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-row">
            <div className="testimonial">
              <img src={Marv12Image} alt="Client 1" className="testimonial-img" />
              <p>"The interior design services we received were beyond our expectations! The team really brought our vision to life. Highly recommend!"</p>
              <h4>John Doe</h4>
              <p>CEO, Tech Innovations</p>
            </div>
            <div className="testimonial">
              <img src={Marv11Image} alt="Client 2" className="testimonial-img" />
              <p>"Marv helped us redesign our office space. The atmosphere is now much more comfortable and inspiring!"</p>
              <h4>Jane Smith</h4>
              <p>Founder, Innovate Solutions</p>
            </div>
            <div className="testimonial">
              <img src={Marv10Image} alt="Client 3" className="testimonial-img" />
              <p>"We love our new living room design! The attention to detail and quality of work was exceptional. Thank you, Marv!"</p>
              <h4>Michael Brown</h4>
              <p>Client</p>
            </div>
            <div className="testimonial">
              <img src={Marv9Image} alt="Client 4" className="testimonial-img" />
              <p>"The team at Marv is a pleasure to work with. Their designs are modern, functional, and aesthetically pleasing."</p>
              <h4>Alice Green</h4>
              <p>Homeowner</p>
            </div>
            {/* <div className="testimonial">
              <img src={Marv8Image} alt="Client 5" className="testimonial-img" />
              <p>"Fantastic experience from start to finish. The interior design concepts they offered were exactly what we needed!"</p>
              <h4>David Wilson</h4>
              <p>Client</p>
            </div> */}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
