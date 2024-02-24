"use client";
import React, { useState, useEffect } from 'react';
import { isClient } from '@/utils/helpers';
import ForgotPassword from '@/components/forgot-password/forgot-password';
import ResetPassword from '@/components/reset-password/reset-password';

export default function ResetPasswordPage() {
    // State variable to hold the token value
    const [token, setToken] = useState(null);

    // Extract token from URL and set it in state
    useEffect(() => {
        // Check if code is running on the client side
        if (isClient()) {
            // Get URL parameters
            const params = new URLSearchParams(window.location.search);

            // Get the value of 'token' parameter from URL
            const token = params.get('token');

            // If 'token' parameter exists in URL
            if (token) {
                // Set the token value in state
                setToken(token);
            }
        }
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src="ReasonEDLogo.png"
                        alt="ReasonED Logo"
                    />
                    {/* Conditionally render text based on the presence of 'token' */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-sky-900">
                        {token ? 'Password Reset' : 'Forgot your Password?'}
                    </h2>
                </div>
                {/* Conditionally render components based on the presence of 'token' */}
                {token ? (
                    <ResetPassword token={token} />
                ) : (
                    <ForgotPassword setToken={setToken} />
                )}
            </div>
        </main>
    );
}