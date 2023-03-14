import React from 'react';

const Filter = ({ icon, title }) => {
  return (
  <div className="items-center columns-1">
    <div className="text-[#f313131] hover:text-[#4A4A4A] duration-200 ease-out gap-2 py-1 px-3 sm:px-4">
      {icon}
      {title}
    </div>
  </div>
  )
};

export default Filter

