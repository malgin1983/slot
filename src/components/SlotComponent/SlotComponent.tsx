import React from "react";
import "./SlotComponent.css";
import SlotHeaderWithButton from "../SlotHeaderWithButton/SlotHeaderWithButton";
import ParticipantListWithDateItem from "../ParticipantListWithDateItem/ParticipantListWithDateItem";

const SlotComponent: React.FC = () => {
  return (
    <div className={"slot-component__container"}>
      <SlotHeaderWithButton />
      <ParticipantListWithDateItem />
    </div>
  );
};

export default SlotComponent;
