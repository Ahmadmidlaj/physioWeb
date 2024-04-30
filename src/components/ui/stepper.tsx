import React from "react";

interface StepperProps {
  steps: number;
  currentStep: number;
  mode?: "dots" | "text";
  className?: any;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
}) => {

  return (
    <div className="text-start font-medium text-[#7b7b7b]">
      Section {currentStep + 1} / {steps}
    </div>
  );
};