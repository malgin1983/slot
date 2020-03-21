import React from "react";
import "./SliderButton.css";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

const SliderButton: React.FC = () => {
  return (
    <div className={"slider-button__container"}>
      <ChevronLeft fontSize={"large"} />
      <ChevronRight fontSize={"large"} />
    </div>
  );
};

export default SliderButton;
