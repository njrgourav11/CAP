import React from 'react';
import img1 from '../assets/gal/1.jpg';
import img2 from '../assets/gal/2.jpg';
import img3 from '../assets/gal/3.jpg';
import img4 from '../assets/gal/4.jpg';
import img5 from '../assets/gal/5.jpg';
import img6 from '../assets/gal/6.jpg';
import img7 from '../assets/gal/7.jpg';
import img8 from '../assets/gal/8.jpg';
import img9 from '../assets/gal/9.jpg';
import img10 from '../assets/gal/10.jpg';
import img11 from '../assets/gal/11.jpg';
import img12 from '../assets/gal/12.jpg';
import img13 from '../assets/gal/13.jpg';
import img14 from '../assets/gal/14.jpg';
import img15 from '../assets/gal/15.jpg';
import img16 from '../assets/gal/16.jpg';
import img17 from '../assets/gal/17.jpg';
import img18 from '../assets/gal/18.jpg';
import img19 from '../assets/gal/19.jpg';
import img20 from '../assets/gal/20.jpg';
import img21 from '../assets/gal/21.jpg';
import img22 from '../assets/gal/22.jpg';
import img23 from '../assets/gal/23.jpeg';
import img24 from '../assets/gal/24.jpeg';

const Gallery1 = () => {
  // Array of image imports
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
    img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24
  ];


  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ml-8 mr-8">
      {images.map((image, index) => (
        <div key={index} className="w-full">
          <img
            className="object-cover w-full h-64 rounded-lg"
            src={image}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery1;
