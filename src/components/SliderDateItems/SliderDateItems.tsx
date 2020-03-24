import React, { useRef, useEffect } from 'react';
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
}
// Компонент
const SliderDateItems: React.FC<SliderDateItemsProps> = props => {
    const { dataSlider } = props;
    const item = dataSlider[0];
    const MyRef = useRef<any>();

    useEffect(() => {
        MyRef.current.scrollLeft = 0;
    }, []);

    const leftScroll = () => {
        MyRef.current.scrollLeft += 50;
    };
    const rightScroll = () => {
        MyRef.current.scrollLeft -= 50;
    };

    let header: string;

    item.participants ? (header = 'Не все могут участвоват') : (header = 'Все могут участвовать');

    return (
        <div className={'slider-data-items'}>
            <div className={'slider-data-items__header'}>{header}</div>
            <div className={'slider-data-items__wrapper'}>
                <SliderButton leftScroll={leftScroll} rightScroll={rightScroll} />
                <ul className={'slider-data-items__container'} ref={MyRef}>
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
