// Button.tsx
import React from "react";

interface ButtonProps {
    title: string; // Text inside the button
    disabled?: boolean; // Optional prop to control interactivity
    onClick?: () => void; // Optional click handler
    className?: string; // Optional class for additional styling
}

const Button: React.FC<ButtonProps> = ({ title, disabled = false, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full px-4 py-2 rounded-md transition duration-300 ease-in-out transform ${disabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 text-white hover:scale-105"
                } ${className}`} // Allow additional styling
        >
            {title}
        </button>
    );
};

export default Button;
