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

const Gallery1 = () => {
  // Array of image imports
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
