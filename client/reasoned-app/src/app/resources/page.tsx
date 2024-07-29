'use client'
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Link from "next/link";
import { useState } from 'react';

// Define interface for educator resource
interface EducatorResource {
  id: number;
  type: string;
  name: string;
  fileUrl: string;
}

const educatorResources: EducatorResource[] = [
  { id: 1, type: 'Classroom Decor', name: 'Straw Manny Poster', fileUrl:"resources/MannyCharacterTransparentBG.png" },
  { id: 2, type: 'Lesson Plans', name: 'Lesson Plan Example', fileUrl:"" },
  { id: 3, type: 'Activity Sheets', name: 'Activity Example', fileUrl:"" },
  { id: 4, type: 'Classroom Decor', name: 'Hasty Harry Poster', fileUrl:"resources/HarryCharacterTransparentBG.png" },
  // Add more resources as needed
];

// Product grid component
const ProductGrid: React.FC<{ resources: EducatorResource[] }> = ({ resources }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Render each resource */}
      {resources.map(resource => (
        <div key={resource.id} className="border p-4">
          <img src={resource.fileUrl} alt={resource.name} className="w-full h-40 object-cover mb-2" />
          <h3 className="text-lg font-semibold">{resource.name}</h3>
          <p className="text-sm">{resource.type}</p>
          <button onClick={() => downloadResource(resource.fileUrl)} className="bg-purple-shades-800 text-white px-4 py-2 mt-2 rounded hover:bg-purple-shades-600">
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

// Downloads resource
const downloadResource = (fileUrl: string) => {
  // Use HTML anchor element to trigger download
  const anchor = document.createElement('a');
  anchor.href = fileUrl;
  anchor.download = fileUrl.split('/').pop() || 'resource';
  anchor.click();
};

export default function AboutReasonED() {
  const [sortBy, setSortBy] = useState<string>(''); // State for sorting

  // Sort resources by type
  const sortResources = (type: string) => {
    setSortBy(type);
  };

  // Filtered resources based on selected type
  const filteredResources = sortBy ? educatorResources.filter(resource => resource.type === sortBy) : educatorResources;

  return (
    <>
      {/* Navbar */}
      <Header />
      {/* Page Body */}
      <div className="constainer bg-orange-shades-400 min-h-screen mx-auto py-5">
        <div className="mb-5 mx-60 px-10 py-10">
          <h1 className="text-6xl text-white font-bold mb-5">
            Educational Resources
          </h1>

          <div className="flex justify-center mt-5 mb-10">
            <p className="text-white text-xl">
              Use these additional resources to reinforce logical fallacy education
              in your classroom! Have resources of your own to offer?{' '}
              <Link href="contact-us" className="link text-purple font-bold">
                Contact Us!
              </Link>
            </p>
          </div>

          {/* Resource grid and sorting */}
          <div className="flex justify-center mb-5">
            <button onClick={() => sortResources('Classroom Decor')} className="mr-4 text-white font-bold text-xl">Classroom Decorations</button>
            <button onClick={() => sortResources('Lesson Plans')} className="mr-4 text-white font-bold text-xl">Lesson Plans</button>
            <button onClick={() => sortResources('Activity Sheets')} className="mr-4 text-white font-bold text-xl">Activity Sheets</button>
          </div>
          
          {/* Display resources grid */}
          <ProductGrid resources={filteredResources} />
          
          
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
