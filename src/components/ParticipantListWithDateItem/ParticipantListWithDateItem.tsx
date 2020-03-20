import React from "react";
import DateItem from "../DateItem/DateItem";
import ParticipantItem from "../ParticipantItem/ParticipantItem";
import "./ParticipantListWithDateItem.css";

export interface IDateItem {
  day: string;
  date: string;
  time: string;
}
const data: IDateItem = {
  day: "Сегодня. Понедельник",
  date: "24 Января",
  time: "13:00 -14:00",
};

const ParticipantListWithDateItem: React.FC = () => {
  return (
    <div className={"participant-list"}>
      <div>Выбранное время: не могут 10 участников</div>
      <div className={"participant-list__container"}>
        <DateItem active={true} data={data} />
        <div className={"paticipant-list__container-item"}>
          <ParticipantItem />
        </div>
      </div>
    </div>
  );
};

export default ParticipantListWithDateItem;
