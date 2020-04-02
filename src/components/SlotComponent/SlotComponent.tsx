import * as React from 'react';
import './SlotComponent.css';
import SlotHeaderWithButton from '../SlotHeaderWithButton/SlotHeaderWithButton';
import ParticipantListWithDateItem from '../ParticipantListWithDateItem/ParticipantListWithDateItem';
import SliderWrapperAll from '../SliderWrapperAll/SliderWrapperAll';
import SliderWrapper from '../SliderWrapper/SliderWrapper';

/**
 *@SlotComponent - главный компонент-контейнер слота.
 */
const SlotComponent: React.FC = () => {
    return (
        <div className={'slot-component__container'}>
            <SlotHeaderWithButton />
            <ParticipantListWithDateItem />
            <SliderWrapperAll />
            <SliderWrapper />
        </div>
    );
};

export default SlotComponent;
