import React from 'react';

export default function Card({ title, icon}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-black border border-gray-100 flex gap-2 w-full py-3 items-center justify-center text-white">

      <h2 className="font-semibold text-lg text-white ">{title}</h2>
      {/* Dynamic Image */}
      {icon && (
        icon
        
      )}
      </div>
  );
}
