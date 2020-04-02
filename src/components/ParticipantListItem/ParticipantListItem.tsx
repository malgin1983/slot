import * as React from 'react';
import ParticipantItem from '../ParticipantItem/ParticipantItem';
import './ParticipantListItem.css';

interface ParticipantListItemProps {
    participants: Array<string>;
    setShow: (show: boolean) => void;
    show: boolean;
}
/**
 * Компонента для отображения списка участников.
 * @param props.participants - список участников
 * @param props.setShow - функция отображения
 * @param props.show- логическое значение отображении.
 */
const ParticipantListItem: React.FC<ParticipantListItemProps> = props => {
    const { participants, setShow, show } = props;
    let total = participants.length;
    if (participants.length > 5) {
        const showParticipants = participants.slice(0, 5);

        return (
            <ul className={'participant-list-item__container'}>
                {showParticipants.map((item, idx) => {
                    return (
                        <li key={idx} className={'participant-list-item__container--item'}>
                            <ParticipantItem name={item} showAllName={show} />
                        </li>
                    );
                })}
                <li className={'participant-list-item__container--selector'} onClick={() => setShow(!show)}>
                    и ещё {total - 5}
                </li>
            </ul>
        );
    } else if (participants) {
        return (
            <ul className={'participant-list-item__container'}>
                {participants.map((item, idx) => {
                    return (
                        <li key={idx} className={'participant-list-item__container--item'}>
                            <ParticipantItem name={item} showAllName={show} />
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        return (
            <ul className={'participant-list-item__container'}>
                <li className={'participant-list-item__container--item'}></li>;
            </ul>
        );
    }
};

export default ParticipantListItem;
