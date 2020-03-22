import React from "react";
import "./DateItem.css";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import { RadioProps } from "@material-ui/core/Radio";
import { IDateItem } from "../ParticipantListWithDateItem/ParticipantListWithDateItem";

interface DateItemProps {
  active: boolean;
  data: IDateItem;
}

const DateItem: React.FC<DateItemProps> = props => {
  const { active, data } = props;
  let cheked: string = "";
  active ? (cheked = "d") : (cheked = "a");

  let classItem;
  active
    ? (classItem = "date-item__container-active")
    : (classItem = "date-item__container");
  const DateItemRadio = withStyles({
    root: {
      position: "absolute",
      left: "4px",
      top: "1px",
    },
  })((props: RadioProps) => <Radio color="default" {...props} />);

  const [selectedValue, setSelectedValue] = React.useState(cheked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={classItem}>
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
        <li className={"date-item__list-item"}>{data.day}</li>
        <li className={"date-item__list-item"}>{data.date}</li>
        <li className={"date-item__list-item"}>{data.time}</li>
      </ul>
    </div>
  );
};

export default DateItem;
