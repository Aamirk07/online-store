import React, { useState } from "react";
import "./orderStatus.scss";

const OrderStatus = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const orderSteps = ["Created", "Shipped", "Delivered", "Cancelled"];
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center text-xs justify-between">
        {orderSteps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"}`}
          >
            <div className={`${i + 1 === 4 ? "step-cancelled" : "step"}`}>{`${
              i + 1 === 4 ? "X" : i + 1
            }`}</div>
            <p
              className={`${
                step === "Cancelled"
                  ? "text-red-600 current"
                  : "text-green-700 current"
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderStatus;
