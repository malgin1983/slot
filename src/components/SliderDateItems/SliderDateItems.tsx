import React from "react";
import "./SliderDateItems.css";
import DateItem from "../DateItem/DateItem";
import ParticipantItem from "../ParticipantItem/ParticipantItem";
import SliderButton from "../SliderButton/SliderButton";
export interface IDateItem {
  day: string;
  date: string;
  time: string;
  participants?: Array<string>;
}
interface SliderDateItemsProps {
  dataSlider: IDateItem[];
}

const SliderDateItems: React.FC<SliderDateItemsProps> = props => {
  const { dataSlider } = props;
  const item = dataSlider[0];
  let header: string;
  item.hasOwnProperty("participants")
    ? (header = "Не все могут участвоват")
    : (header = "Все могут участвовать");
  return (
    <div className={"slider-data-items"}>
      <SliderButton />
      <div className={"slider-data-items__header"}>{header}</div>
      <ul className={"slider-data-items__container"}>
        {dataSlider.map((item, idx) => {
          const { participants, ...data } = item;
          if (participants) {
            let name = participants[0];
            return (
              <li className={"slider-data-items__container-item"} key={idx}>
                <DateItem active={false} data={data} />
                <div className={"slider-data-items__footer"}>
                  <span className={"slider-data-items__footer-item-component"}>
                    <ParticipantItem name={name} showAllName={true} />
                  </span>
                  <span
                    className={"slider-data-items__footer-item"}
                  >{`и еще ${participants?.length}`}</span>
                </div>
              </li>
            );
          } else {
            return (
              <li className={"slider-data-items__container-item"} key={idx}>
                <DateItem active={false} data={data} />
                <div
                  className={"slider-data-items__container-item-empty"}
                ></div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SliderDateItems;
