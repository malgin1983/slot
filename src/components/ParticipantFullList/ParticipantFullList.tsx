import React from "react";
import ParticipantItem from "../ParticipantItem/ParticipantItem";
import "./ParticipantFullList.css";

interface ParticipantListItemProps {
  participants: Array<string>;
  setShow: (show: boolean) => void;
  show: boolean;
}

interface ParticipantColumnList {
  participants: Array<string>;
}
const ParticipantColumnList: React.FC<ParticipantColumnList> = props => {
  const { participants } = props;
  return (
    <ul className={"participal-full-list__container"}>
      {participants.map((item, idx) => {
        return (
          <li key={idx} className={"participal-full-list__container-item"}>
            <ParticipantItem name={item} showAllName={true} />
          </li>
        );
      })}
    </ul>
  );
};


const ParticipantFullList: React.FC<ParticipantListItemProps> = props => {
  const { participants, setShow, show } = props;
  //разбиваем массив участников на  2 массива (четные, нечетные) для корректного отображения
  const even = participants.filter((item, idx) => idx % 2 == 0);
  const odd = participants.filter((item, idx) => idx % 2 != 0);
  console.log("even", even);
  console.log("odd :", odd);
  return (
    <>
      <div className={"participant-full-list__wrapper"} >
        <div className={"participant-full-list__wrapper-item"}>
          <ParticipantColumnList  participants={odd}/>
        </div>
        <div className={"participant-full-list__wrapper-item"}>
          <ParticipantColumnList  participants={even}/>
        </div>
      </div>
      <div
        className={"participal-full-list__container-switch"}
        onClick={() => setShow(!show)}
      >
        Свернуть участников
      </div>
    </>
  );
};

export default ParticipantFullList;