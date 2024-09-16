import React from "react";

const Privacy = () => {
  return (
    <div className="mt-2 mb-2 flex justify-between  footer-privacy">
      <span className="text-[#555] text-xs">
        <b className="text-white">©</b> 2024 sporty-verse, Inc. All Rights
        Reserved
      </span>
      <div className="flex gap-4 privacy">
        <span>Guides</span>
        <span>Terms of sale</span>
        <span>Terms of use</span>
        <span>Privacy & Policy</span>
      </div>
    </div>
  );
};

export default Privacy;
