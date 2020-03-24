import React from 'react';
import SlotComponent from '../../components/SlotComponent/SlotComponent';
import './PageSlot.css';
/**
 *@PageSlot - страница Слота
 */
const PageSlot: React.FC = () => {
    return (
        <div className={'page-slot'}>
            <SlotComponent />
        </div>
    );
};

export default PageSlot;
