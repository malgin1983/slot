import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./ParticipantItem.css";

const ParticipantItem: React.FC = () => {
  return (
    <div className={"participal-item__container"}>
      <HighlightOffIcon className={"participal-item__container-icon"} />
      <div className={"participal-item__container-name"}>{"Баканова Е.Ю."}</div>
    </div>
  );
};

export default ParticipantItem;
