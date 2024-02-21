"use client";
import React from 'react';
import ForgotPassword from '@/components/forgot-password/forgot-password';

export default function ForgotPasswordPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                        className="mx-auto h-20 w-auto"
                        src="ReasonEDLogo.png"
                        alt="ReasonED Logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple">
                        Forgot your Password?
                    </h2>
                </div>
                <ForgotPassword />
            </div>
        </main>
    );
}