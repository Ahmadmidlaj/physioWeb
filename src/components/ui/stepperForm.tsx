import { z, ZodObject } from "zod";
import { useEffect, useState } from "react";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Stepper } from "@/components/ui/stepper";
import { FieldConfig } from "@/components/ui/auto-form/types";
import { ZodObjectOrWrapped } from "@/components/ui/auto-form/utils";

export interface StepperSchema {
  steps: unknown[];
}

function StepperWrapper({
  schema,
  onSubmit,
}: {
  schema: StepperSchema;
  onSubmit?: (values: any) => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState<Record<number, any>>({});
  const [totalSteps, setTotalSteps] = useState(0);
  useEffect(() => {
    if (schema) setTotalSteps(schema.steps.length);
  }, [schema]);

  const handleFormDataChange = (newData: any) => {
    setStepData({ ...stepData, [currentStep]: newData });
  };

  const nextStep = (currentFormData: any) => {
    handleFormDataChange(currentFormData);
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === totalSteps - 1) {
      handleFormSubmit({ ...stepData, [currentStep]: currentFormData });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmit = (finalData: any) => {
    const finalDataArray = Object.entries(finalData).map(([key, value]) => ({
      label: (schema.steps[parseInt(key)] as any).label,
      data: value,
    }));

    onSubmit?.(finalDataArray);
  };

  if (!schema || !schema.steps || schema.steps.length === 0) {
    return (
      <div>
        <p>There are no steps to display.</p>
      </div>
    );
  }

  const stepContent = schema.steps.map((step: any, index) => (
    <div key={index}>
      <div className="mb-5 flex flex-row items-center">
        <Label className="ml-2 text-[22px]">{step?.label}</Label>
      </div>
      <AutoForm
        values={stepData[index]}
        onSubmit={nextStep}
        formSchema={step.formSchema}
        fieldConfig={step.fieldConfig ?? {}}
        dependencies={step.dependencies}
      >
        <div className="flex w-auto flex-row justify-between">
          <Button
            className={currentStep === 0 ? "hidden" : "w-20"}
            onClick={prevStep}
          >
            Previous
          </Button>
          <div className="flex flex-grow justify-end">
            <AutoFormSubmit className="w-20">
              {index === totalSteps - 1 ? "Submit" : "Next"}
            </AutoFormSubmit>
          </div>
        </div>
      </AutoForm>
    </div>
  ));

  return (
    <div className="mb-10 space-y-6">
      {/* <Stepper steps={totalSteps} currentStep={currentStep} /> */}
      <div>{stepContent[currentStep]}</div>
    </div>
  );
}

export default StepperWrapper;
