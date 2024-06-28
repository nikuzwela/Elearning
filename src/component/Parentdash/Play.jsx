import React from 'react';
import { Outlet } from 'react-router-dom';
import Side from '../Sideb';
function Lay() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden ">
      <Side />
      <div className="flex-1">
        <div className="p-4">{<Outlet />}</div>
      </div>
    </div>
  );
}

export default Lay;
