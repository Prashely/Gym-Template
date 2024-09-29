import React from "react";

const ImageGrid = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* First Grid: Single Image */}
          <div className="w-full h-full">
            <img
              src="YOUR_FIRST_IMAGE_URL"
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Second Grid: Two Images Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src=""
              alt="Image 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="YOUR_THIRD_IMAGE_URL"
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
