import React from "react";

const SubscribeSection = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:h-96">
      <div className="col-span-2 md:col-span-1 h-full">
        <img
          src="https://images.unsplash.com/photo-1693037197430-d537313da601?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-96"
        />
      </div>
      <div className="col-span-2 md:col-span-1 px-4 pb-6 lg:px-14 flex flex-col justify-center gap-y-8">
        <div className="flex items-center justify-start gap-x-3">
          <div className="border w-24 border-yellow-500" />
          <p className="text-yellow-500 font-normal text-sm uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
        </div>
        <h2 className="text-4xl font-bold">
          See The Latest Collection & Get Special Offer
        </h2>
        <div className="w-full lg:w-4/5 flex items-center gap-x-2">
          <input
            type="email"
            className="border w-full border-black bg-transparent text-base py-[11px] outline-none px-4 text-gray-400"
            placeholder="Email addess"
          />
          <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-4 px-4 lg:px-8 uppercase text-xs font-medium">
            subscribe
          </button>
        </div>
        <p className="text-gray-400 text-base font-normal">
          Cras interdum lectus velit nibh senectus fringilla ut.
        </p>
      </div>
    </section>
  );
};

export default SubscribeSection;
