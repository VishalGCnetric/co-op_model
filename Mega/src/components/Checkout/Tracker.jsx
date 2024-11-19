import React from 'react';

const steps = [
    { label: 'Shipping Address', id: 0 },
    { label: 'Shipping Method', id: 1 },
    { label: 'Review Order', id: 2 },
];

const Tracker = ({ currentStep }) => {
    return (
        <div className="flex items-center justify-between w-full max-w-3xl mx-auto my-8">
            {steps.map((step, index) => {
                const isActive = currentStep === index;
                const isCompleted = currentStep > index;

                return (
                    <div key={step.id} className="flex-1">
                        <div className="flex items-center justify-center gap-4  relative">
                            {/* Line between steps */}
                            {index > 0 && (
                                <div
                                    className={`absolute w-[80%] h-1 ${
                                        isCompleted ? ' bg-gradient-to-r from-indigo-400 to-indigo-600 text-white' : 'bg-gray-300'
                                    } top-1/2 left-0  transform -translate-x-1/2`}
                                ></div>
                            )}
                            {/* Step circle */}
                            <div
                                className={`flex items-center justify-center w-10 h-10  rounded-full ${
                                    isActive || isCompleted
                                        ? ' bg-gradient-to-r from-indigo-400 to-indigo-600 text-white'
                                        : 'bg-gray-300 text-gray-500'
                                }`}
                            >
                                {isCompleted ? (
                                    <span className="text-xl font-bold z-99">✓</span>
                                ) : (
                                    <span className="text-xl font-bold z-99">{index + 1}</span>
                                )}
                            </div>
                        </div>
                        {/* Step label */}
                        <p
                            className={`text-center mt-2 text-sm font-semibold ${
                                isActive || isCompleted ? 'text-indigo-500' : 'text-gray-500'
                            }`}
                        >
                            {step.label}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Tracker;
