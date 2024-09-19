import React from "react";
import { styles } from "../../styles/styles";

const CommonHeader = ({ title }) => {
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-16 bodyBg`}>
      <div className="flex flex-col gap-y-6 justify-start items-center text-center">
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="text-gray-500 text-base leading-7 lg:w-3/5 font-medium">
          Vestibulum, diam vulputate amet cras in diam quis turpis curabitur
          tellus aliquet tellus iaculis tempus, sollicitudin massa duis eleifend
          egestas turpis sit etiam.
        </p>
      </div>
    </div>
  );
};

export default CommonHeader;
