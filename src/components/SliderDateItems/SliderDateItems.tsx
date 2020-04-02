import * as React from 'react';
import { useRef, useEffect } from 'react';
import './SliderDateItems.css';
import DateItem from '../DateItem/DateItem';
import ParticipantItem from '../ParticipantItem/ParticipantItem';
import SliderButton from '../SliderButton/SliderButton';

export interface IDateItem {
    day: string;
    date: string;
    time: string;
    participants?: Array<string>;
}
interface SliderDateItemsProps {
    dataSlider: IDateItem[];
    showScroll?: boolean;
}
/**
 * @SliderDateItems - слайдер компонентов @DateItem
 * @param props.dataSlider -  массив данных для IDateItems
 */
const SliderDateItems: React.FC<SliderDateItemsProps> = props => {
    const { dataSlider, showScroll } = props;
    let showScrollLine: string;
    showScroll
        ? (showScrollLine = 'slider-data-items__container--scroll')
        : (showScrollLine = 'slider-data-items__container');
    const item = dataSlider[0];
    const MyRef = useRef<any>();

    useEffect(() => {
        MyRef.current.scrollLeft = 0;
    }, []);

    const leftScroll = () => {
        setTimeout(() => {
            MyRef.current.scrollLeft -= 80;
        }, 200);
        setTimeout(() => {
            MyRef.current.scrollLeft -= 160;
        }, 350);
        setTimeout(() => {
            MyRef.current.scrollLeft -= 240;
        }, 500);
    };
    const rightScroll = () => {
        setTimeout(() => {
            MyRef.current.scrollLeft += 80;
        }, 200);
        setTimeout(() => {
            MyRef.current.scrollLeft += 160;
        }, 350);
        setTimeout(() => {
            MyRef.current.scrollLeft += 240;
        }, 500);
    };

    let header: string;
    item.participants ? (header = 'Не все могут участвовать') : (header = 'Все могут участвовать');
    return (
        <div className={'slider-data-items'}>
            <div className={'slider-data-items__header'}>{header}</div>
            <div className={'slider-data-items__wrapper'}>
                <SliderButton leftScroll={leftScroll} rightScroll={rightScroll} />
                <ul className={showScrollLine} ref={MyRef}>
                    {dataSlider.map((item, idx) => {
                        const { participants, ...data } = item;
                        if (participants) {
                            let name = participants[0];
                            return (
                                <li className={'slider-data-items__container-item'} key={idx}>
                                    <DateItem active={false} data={data} />
                                    <div className={'slider-data-items__footer'}>
                                        <span className={'slider-data-items__footer-item-component'}>
                                            <ParticipantItem name={name} showAllName={true} />
                                        </span>
                                        <span
                                            className={'slider-data-items__footer-item'}
                                        >{`и еще ${participants?.length}`}</span>
                                    </div>
                                </li>
                            );
                        } else {
                            return (
                                <li className={'slider-data-items__container-item'} key={idx}>
                                    <DateItem active={false} data={data} />
                                    <div className={'slider-data-items__container-item-empty'}></div>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SliderDateItems;
