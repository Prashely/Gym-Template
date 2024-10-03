import React from "react";
import Nine from "../../assets/images/9.jpg";
import Ten from "../../assets/images/10.jpg";
import Eight from "../../assets/images/8.jpg";

const ImageGrid = () => {
  return (
    <section className="w-full py-2 bg-white">
      <div className="container mx-auto px-4">
        {/* Flex container for two main grids */}
        <div className="flex justify-center gap-4">
          {/* First Grid: Single Image */}
          <div className="w-[40vw] min-w-0">
            <img
              src={Nine}
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Second Grid: Two Images Stacked */}
          <div className="flex flex-col w-[40vw] gap-3">
            <img
              src={Ten}
              alt="Image 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src={Eight}
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
