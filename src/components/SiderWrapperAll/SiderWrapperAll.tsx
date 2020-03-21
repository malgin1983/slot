import React from "react";
import SliderDateItems from "../SliderDateItems/SliderDateItems";

export interface IDateItem {
  day: string;
  date: string;
  time: string;
  participants?: Array<string>;
}
const dataSlider: IDateItem[] = [
  {
    day: "Сегодня. Понедельник",
    date: "24 Января",
    time: "13:00 -14:00",
  },
  {
    day: "Вторник",
    date: "25 Января",
    time: "13:00 -14:00",
  },
  {
    day: "Среда",
    date: "26 Января",
    time: "13:00 -14:00",
  },
  {
    day: "Четверг",
    date: "27 Января",
    time: "13:00 -14:00",
  },
  {
    day: "Пятница",
    date: "28 Января",
    time: "13:00 -14:00",
  },
];

const SliderWrapperAll: React.FC = () => {
  return <SliderDateItems dataSlider={dataSlider} />;
};

export default SliderWrapperAll;
