import React from "react";
import "./SlotComponent.css";
import SlotHeaderWithButton from "../SlotHeaderWithButton/SlotHeaderWithButton";
import ParticipantListWithDateItem from "../ParticipantListWithDateItem/ParticipantListWithDateItem";
import SliderWrapperAll from "../SiderWrapperAll/SiderWrapperAll";
import SliderWrapper from "../SliderWrapper/SliderWrapper";

const SlotComponent: React.FC = () => {
  return (
    <div className={"slot-component__container"}>
      <SlotHeaderWithButton />
      <ParticipantListWithDateItem />
      <SliderWrapperAll />
      <SliderWrapper />
    </div>
  );
};

export default SlotComponent;
