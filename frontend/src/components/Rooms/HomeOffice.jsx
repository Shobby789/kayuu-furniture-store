import React from "react";

const HomeOffice = () => {
  return (
    <section className={`w-full living-room h-screen relative`}>
      <div className="bg-white w-full lg:w-2/5 h-auto absolute bottom-0 lg:right-36 p-4 overflow-hidden md:p-7 lg:p-12 flex flex-col gap-y-6">
        <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />
        <h1 className="font-bold text-4xl">Home Office</h1>
        <p className="text-gray-500 font-medium text-base leading-7">
          Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur
          faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas
          faucibus vulputate pharetra.
        </p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
              Nulla placerat viverra
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
              Cursus viverra
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
              Vitae interdum eget
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
              Risus tempus elementum
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
              Aliquet dignissim
            </span>
          </li>
        </ul>
        <div>
          <button className="bg-yellow-500 py-3 px-8 uppercase text-xs font-medium">
            shop home office
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeOffice;
