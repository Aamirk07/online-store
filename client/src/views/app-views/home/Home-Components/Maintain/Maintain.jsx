import React from "react";

const Maintain = () => {
  return (
    <div>
      <div className="header-text-maintain mb-4">
        <span className="text-2xl">Styles That Will Take You Forward</span>
      </div>

      <div className="grid  grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-10 gap-2">
        <div className="col-span-1">
          <div className="relative">
            <div className="absolute bottom-10 left-10 text-white">
              New season. New Goals.
              <div className="mt-10">
                <button className="bg-white rounded-full px-4 py-1.5 text-black text-opacity-80 hover:bg-gray-300">
                  Review
                </button>
              </div>
            </div>
            <img
              src="https://www.instyle.com/thmb/e7n1DTUFIV-jZyd1YoHArml7ndw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-athleticwear-brands-of-2022-tout-63a853528ba44e9b90a6d4f4b3ddfcf0.jpg"
              alt="ileriye taşıyacak stiller"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <div className="absolute bottom-10 left-10 text-white">
              Revive and Renew
              <div className="mt-10">
                <button className="bg-white rounded-full px-4 py-1.5 text-black text-opacity-80 hover:bg-gray-300">
                  Review
                </button>
              </div>
            </div>
            <img
              src="https://www.brittslist.com.au/wp-content/uploads/2023/02/DK_ACTIVE_AW23_LW_1049.jpg"
              alt="ileriye taşıyacak stiller"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintain;
