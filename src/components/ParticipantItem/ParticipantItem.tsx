import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./ParticipantItem.css";

interface ParticipantItemProps {
  name: string;
  showAllName: boolean;
}

const ParticipantItem: React.FC<ParticipantItemProps> = props => {
  const { name, showAllName } = props;
  let reductName: string;
  if (showAllName) {
    name.length > 18
      ? (reductName = `${name.slice(0, 17)}...`)
      : (reductName = name);
  } else {
    reductName = name;
  }

  return (
    <div className={"participal-item__container"}>
      <HighlightOffIcon className={"participal-item__container-icon"} />
      <div className={"participal-item__container-name"}>{reductName}</div>
    </div>
  );
};

export default ParticipantItem;
