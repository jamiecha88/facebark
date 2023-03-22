import React from 'react';

const Filter = ({ icon, title }) => {
  return (
    <div className="underline-offset hover:underline-offset-8 hover:underline transition ease-in-out duration-500">
      <div className="flex flex-col items-center text-[#3e3f42] hover:text-black gap-2 py-1 px-3 sm:px-4 text-[14px] sm:text-[16px]">
        {icon}
        {title}
      </div>
    </div>
  )
};

export default Filter

