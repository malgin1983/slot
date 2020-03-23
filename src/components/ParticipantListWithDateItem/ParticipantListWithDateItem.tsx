import React, { useState } from 'react';
import DateItem from '../DateItem/DateItem';
import './ParticipantListWithDateItem.css';
import ParticipantListItem from '../ParticipantListItem/ParticipantListItem';
import ParticipantFullList from '../ParticipantFullList/ParticipantFullList';

export interface IDateItem {
    day: string;
    date: string;
    time: string;
}
const data: IDateItem = {
    day: 'Сегодня. Понедельник',
    date: '24 Января',
    time: '13:00 -14:00',
};
export type ParticipantsType = Array<string>;
const participants: ParticipantsType = [
    'Баканова Е.Ю.',
    'Константинопольский Е.К.',
    'Константинопольский Е.К.',
    'Константинопольский Е.К.',
    'Баканова Е.Ю.',
    'Константинопольский Е.К.',
    'Константинопольский Е.К.',
    'Баканова Е.Ю.',
    'Константинопольский Е.К.',
    'Константинопольский Е.К.',
    'Баканова Е.Ю.',
    'Константинопольский Е.К.',
    'Константинопольский Е.К.',
    'Баканова Е.Ю.',
    'Константинопольский Е.К.',
];
const total: number = 5;
const absent = (total: number): string => {
    switch (total) {
        case 1:
            return 'к';
            break;
        case 2:
            return 'ка';
            break;
        case 3:
            return 'ка';
            break;
        case 4:
            return 'ка';
            break;
        default:
            return 'ков';
    }
};

let toBeAble = total > 1 ? 'могут' : 'может ';

const ParticipantListWithDateItem: React.FC = () => {
    const [show, setShow] = useState<boolean>(true);
    return (
        <div className={'participant-list'}>
            <div>
                Выбранное время:{' '}
                <span className={'participant-list-item'}>{`не ${toBeAble} ${total} участни${absent(total)}`}</span>{' '}
            </div>
            <div className={'participant-list__container'}>
                <DateItem active={true} data={data} />
                {show ? <ParticipantListItem participants={participants} setShow={setShow} show={show} /> : null}
            </div>
            {show ? null : <ParticipantFullList participants={participants} setShow={setShow} show={show} />}
        </div>
    );
};

export default ParticipantListWithDateItem;
