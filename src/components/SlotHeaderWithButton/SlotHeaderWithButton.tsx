import * as React from 'react';
import './SlotHeaderWithButton.css';
import RefreshButton from '../RefreshButton/RefreshButton';
const header: string = 'Доступные промежутки времени с учетом Outlook Sigma и Alpha';
/**
 *@SlotHeaderWithButton - header слота
 * Отображает кол-во участников, также выводит контейнер - @DateItem и @ParticipantListItem
 *Принимает заголовок  и кнопку из store
 */
const SlotHeaderWithButton: React.FC = () => {
    return (
        <div className={'slot-header-component__container'}>
            <div className={'slot-header-component__text'}>{header}</div>
            <RefreshButton color={'#15805c'} buttonText={'Обновить'} />
        </div>
    );
};

export default SlotHeaderWithButton;
