import * as React from 'react';
import SliderDateItems from '../SliderDateItems/SliderDateItems';

export interface IDateItem {
    day: string;
    date: string;
    time: string;
    participants?: Array<string>;
}
const dataSlider: IDateItem[] = [
    {
        day: 'Сегодня. Понедельник',
        date: '24 Января',
        time: '13:00 -14:00',
        participants: ['Я', 'Константинопольский Е.К.'],
    },
    {
        day: 'Вторник',
        date: '25 Января',
        time: '13:00 -14:00',
        participants: ['Баканова Е.Ю.', 'Константинопольский Е.К.', 'Константинопольский Е.К.'],
    },
    {
        day: 'Среда',
        date: '26 Января',
        time: '13:00 -14:00',
        participants: [
            'Баканова Е.Ю.',
            'Константинопольский Е.К.',
            'Константинопольский Е.К.',
            'Константинопольский Е.К.',
            'Константинопольский Е.К.',
        ],
    },
    {
        day: 'Четверг',
        date: '27 Января',
        time: '13:00 -14:00',
        participants: ['Баканова Е.Ю.', 'Константинопольский Е.К.'],
    },
    {
        day: 'Пятница',
        date: '28 Января',
        time: '13:00 -14:00',
        participants: ['Баканова Е.Ю.', 'Константинопольский Е.К.', 'Константинопольский Е.К.'],
    },
];
const showScroll: boolean = false;
/**
 * @SliderWrapper - обертка для Slider
 * @param props.dataSlider - данные для items слайдера
 * @param props.showScroll - флаг для отображения скролла в контейнере
 */
const SliderWrapper: React.FC = () => {
    return <SliderDateItems dataSlider={dataSlider} showScroll={showScroll} />;
};

export default SliderWrapper;
