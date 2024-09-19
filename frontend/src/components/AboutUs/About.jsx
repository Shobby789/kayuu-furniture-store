import React from "react";
import { styles } from "../../styles/styles";

const About = () => {
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-16 bodyBg flex flex-col gap-y-6 lg:gap-y-12`}>
      <p className="text-base leading-7 font-medium text-gray-500">
        Faucibus etiam lacus sollicitudin sed amet, sit vitae lorem ornare
        egestas nisi, diam cursus non mattis etiam sodales vestibulum arcu a,
        aliquam at leo condimentum etiam dui eget arcu nunc, vivamus vel
        facilisi auctor aliquet eu mollis accumsan fermentum ipsum ornare
        viverra proin eleifend ultricies est, aliquet felis vivamus praesent.
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32">
        <p className="text-sm leading-7 font-medium text-gray-500">
          Sit ipsum elit nisl commodo cursus diam massa nunc, commodo amet,
          viverra lobortis aliquam leo vitae in dictum sagittis, dui est
          pellentesque non est nunc aliquet magna malesuada diam nunc quis duis
          id nunc id ultrices cursus lorem consequat tincidunt pharetra, risus
          quam facilisis lectus ipsum ut mattis pretium eros tincidunt neque.
        </p>
        <p className="text-sm leading-7 font-medium text-gray-500">
          Aliquet magna malesuada diam nunc quis duis id nunc id ultrices cursus
          lorem consequat tincidunt pharetra, risus quam facilisis lectus ipsum
          ut mattis pretium eros tincidunt neque, faucibus volutpat accumsan
          pretium arcu in donec et, rhoncus in sed eleifend odio gravida vitae
          quam donec faucibus molestie bibendum.
        </p>
      </div>
    </div>
  );
};

export default About;
