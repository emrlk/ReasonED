"use client";
import { useEffect, useState } from "react";
import CreateTeacherAccount from "../../components/teacher-sign-up/teacher-sign-up";

// Client-side page to allow teachers to view sign-up page
export default function CreateTeacherAccountPage() {
  // State variables for area selection
  const [area, setArea] = useState(null);

  // Extract area from URL when the component mounts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const areaFromUrl = urlParams.get('area');
    const decodedArea = areaFromUrl ? decodeURIComponent(areaFromUrl) : null;
    setArea(decodedArea);
  }, []);

  // Debugging
  // console.log("Extracted Area:", area);

  // TSX Structure
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
            Teacher Sign Up
          </h2>
        </div>

        {/* Pass area selection into CreateTeacherAccount component */}
        {area && <CreateTeacherAccount area={area} />}
      </div>
    </main>
  );
}
