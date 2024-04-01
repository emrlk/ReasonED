"use client";
import React from "react";
import ChangeUsername from "@/components/change-username/change-username";

// Client-side page to allow students to view change username page
export default function ChangeUsernamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="PurpleReasonEDLogo.png"
            alt="ReasonED Logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple">
            Change your Username
          </h2>
        </div>
        <ChangeUsername />
      </div>
    </main>
  );
}
