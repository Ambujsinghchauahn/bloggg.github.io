// import React , { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import BlogBanner from '../../Assets/blog.jpg';
// import blog1 from '../../Assets/blog1.jpg';
// import blog2 from '../../Assets/blog2.jpg';
// import blog4 from '../../Assets/blog4.jpg';
// import blog5 from '../../Assets/blog5.jpg';
// import blog6 from '../../Assets/blog6.jpg';
// function Blog(){
//     const renderRow = (start, end) => {
//         const [selectedImage, setSelectedImage] = useState(null);

//         const images = [
//             { src: blog1, description: "Description for Image 1" },
//             { src: blog2, description: "Description for Image 2" },
//             // Add the rest of your images here
           
//             { src: blog5, description: "Description for Image 2" },
//             { src: blog4, description: "Description for Image 2" },
//             { src: blog6, description: "Description for Image 2" },
         

//         ];

//         return (

//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
//                 {images.slice(start, end).map((image, index) => (
//                     <div key={index}>
//                         <img src={image.src} alt={`Image ${index + 1}`}   style={{
//                                     width: '200px',
//                                     height: '200px',
//                                     borderRadius: '10px',
//                                     border: selectedImage === index ? '2px solid blue' : '2px solid transparent',
//                                     transition: 'border-color 0.3s ease-in-out'
//                                 }} />
//                         <p>{image.description}</p>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return(<>
//     <Navbar />
//     <div>
//     <img src={BlogBanner} alt="Your Image" style={{ width: '98.5vw', height: '70vh', marginTop:'10px' , borderRadius:'30px' }} />
//     <h2>Recent Blogs</h2>
//                 {renderRow(0, 3)}
//                 {renderRow(3, 6)}
//                 {renderRow(6, 9)}
//                 {renderRow(9, 12)}
//     </div>
//     </>)
// }
// export default Blog;


import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import blog1 from '../../Assets/blog1.jpg';
import blog2 from '../../Assets/blog2.jpg';
import blog4 from '../../Assets/blog4.jpg';
import blog5 from '../../Assets/blog5.jpg';
import blog6 from '../../Assets/blog6.jpg';
import blog7 from '../../Assets/blog7.jpg';
import blog8 from '../../Assets/blog8.jpg';
import blog9 from '../../Assets/blog9.jpg';
import blog10 from '../../Assets/blog10.jpg';
import blog11 from '../../Assets/blog11.jpg';
import blog12 from '../../Assets/blog12.jpg';
import blog13 from '../../Assets/blog13.jpg';
import blog14 from '../../Assets/blog14.jpg';
import blog15 from '../../Assets/blog15.jpg';
import blog16 from '../../Assets/blog16.jpg';
import blog17 from '../../Assets/blog17.jpg';
import BlogBanner from '../../Assets/blog.jpg';
import './Blog.css';
import Footer from "../Footer/Footer";


 // Import Bootstrap CSS

 const images = [
    { src: blog1, description: "Beautiful sunset over the mountains" },
    { src: blog2, description: "Refreshing waterfall in the forest" },
    { src: blog5, description: "Colorful hot air balloons in the sky" },
    { src: blog7, description: "Sandy beach with palm trees"},
    { src: blog8, description: "Description for Image 5" },
    { src: blog9, description: "Description for Image 6" },
    { src: blog10, description: "Description for Image 7" },
    { src: blog11, description: "Description for Image 8" },
    { src: blog12, description: "Description for Image 9" },
    { src: blog16, description: "Description for Image 10" },
    { src: blog13, description: "Description for Image 11" },
    { src: blog14, description: "Description for Image 12" },
    { src: blog15, description: "Sandy beach with palm trees" },
    { src: blog17, description:  "Sandy beach with palm trees" },
    { src: blog6, description: "Sandy beach with palm trees"  },
];

function Blog() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (index) => {
        setSelectedImage(index);
    };

    const renderRow = () => {
        return (
            <div className="row" id="blog-section">
                {images.map((image, index) => (
                    <div key={index} className="col-lg-4 mb-3">
                        <div className="blog-image-container" onClick={() => handleClick(index)}>
                            <img
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                className="img-fluid blog-image"
                            />
                            <div className="blog-image-overlay">
                                <p className="blog-image-description">{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <Navbar />
            <img src={BlogBanner} alt="Your Image" className="blog-banner" />

            <div className="container">
                <div className="blog-heading text-center">
                    <h2>Recent Blogs</h2>
                </div>
                {renderRow()}
            </div>
            <section>
                <Footer />
            </section>
        </>
    );
}

export default Blog;