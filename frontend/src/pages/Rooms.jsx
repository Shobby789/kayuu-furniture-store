import React, { useEffect } from "react";
import LivingRoom from "../components/Rooms/LivingRoom";
import LivingRoomProducts from "../components/Rooms/LivingRoomProducts";
import Bedroom from "../components/Rooms/Bedroom";
import Kitchen from "../components/Rooms/Kitchen";
import Bathroom from "../components/Rooms/Bathroom";
import BedroomProducts from "../components/Rooms/BedroomProducts";
import KitchenProducts from "../components/Rooms/KitchenProducts";
import BathroomProducts from "../components/Rooms/BathroomProducts";
import SubscribeSection from "../components/Home/SubscribeSection";
import CommonHeader from "../components/Globals/CommonHeader";

const Rooms = () => {
  useEffect(() => {
    document.title = 'Rooms - Furniture Store';
  }, []); 
  return (
    <div>
      <CommonHeader title={"Rooms"} />
      <LivingRoom />
      <LivingRoomProducts />
      <Bedroom />
      <BedroomProducts />
      <Kitchen />
      <KitchenProducts />
      <Bathroom />
      <BathroomProducts />
      <SubscribeSection />
    </div>
  );
};

export default Rooms;
