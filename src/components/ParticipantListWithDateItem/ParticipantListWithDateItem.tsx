import React from "react";
import DateItem from "../DateItem/DateItem";
import ParticipantItem from "../ParticipantItem/ParticipantItem";
import "./ParticipantListWithDateItem.css";

interface DateItemI {
  day: string;
  date: string;
  time: string;
}
const data: DateItemI = {
  day: "Сегодня. Понедельник",
  date: "24 Января",
  time: "13:00 -14:00",
};

const ParticipantListWithDateItem: React.FC = () => {
  return (
    <div className={"participant-list__container"}>
      <DateItem />
      <div>
        <ParticipantItem />
      </div>
    </div>
  );
};

export default ParticipantListWithDateItem;
