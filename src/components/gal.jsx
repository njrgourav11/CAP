const Gallery1 = () => {
    // Generate an array of image file names from 1.jpg to 9.jpg
    const imageNames = Array.from({ length: 9 }, (_, index) => `${index + 1}.jpg`);

    return (

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ml-8 mr-8">
        {imageNames.map((imageName, index) => (
          <div key={index} className="w-full">
            <img
              className="object-cover w-full h-64 rounded-lg"
              src={`src/assets/gal/${imageName}`} 
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div> 
      );
      };
      export default Gallery1;