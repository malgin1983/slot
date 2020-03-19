import React from "react";
import "./SlotHeaderWithButton.css";
import RefreshButton from "../RefreshButton/RefreshButton";

const SlotHeaderWithButton: React.FC = () => {
  return (
    <div className={"slot-header-component__container"}>
      <div className={"slot-header-component__text"}>
        {"Доступные промежутки времени с учетом Outlook Sigma и Alpha"}
      </div>
      <RefreshButton color={"#15805c"} buttonText={"Обновить"} />
    </div>
  );
};

export default SlotHeaderWithButton;
