'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

function CancelButton() {
  const router = useRouter();
    
  const cancelHandler = () => {
    router.push('/');
  };

  return (
    <div>
      <button
        onClick={cancelHandler}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Cancel
      </button>
    </div>
  );
}

export default CancelButton;
