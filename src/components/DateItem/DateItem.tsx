import React from "react";
import "./DateItem.css";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";

import { RadioProps } from "@material-ui/core/Radio";

const DateItem: React.FC = () => {
  const DateItemRadio = withStyles({
    root: {
      position: "absolute",
      left: "15px",
      top: "14px",
    },
  })((props: RadioProps) => <Radio color="default" {...props} />);

  const [selectedValue, setSelectedValue] = React.useState("d");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={"date-item__container-active"}>
      <DateItemRadio
        checked={selectedValue === "d"}
        size="medium"
        onChange={handleChange}
        value="d"
        color="default"
        name="radio-button-demo"
        inputProps={{ "aria-label": "D" }}
      />
      <ul className={"date-item__list"}>
        <li className={"date-item__list-item"}>{"Сегодня. Понедельник"}</li>
        <li className={"date-item__list-item"}>{"24 Января"}</li>
        <li className={"date-item__list-item"}>{"13:00 -14:00"}</li>
      </ul>
    </div>
  );
};

export default DateItem;
