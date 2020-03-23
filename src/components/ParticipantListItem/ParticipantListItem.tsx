import React from 'react';
import ParticipantItem from '../ParticipantItem/ParticipantItem';
import './ParticipantListItem.css';

interface ParticipantListItemProps {
    participants: Array<string>;
    setShow: (show: boolean) => void;
    show: boolean;
}

const ParticipantListItem: React.FC<ParticipantListItemProps> = props => {
    const { participants, setShow, show } = props;
    let total = participants.length;
    if (participants.length > 5) {
        const showParticipants = participants.slice(0, 5);

        return (
            <ul className={'participal-list-item__container'}>
                {showParticipants.map((item, idx) => {
                    return (
                        <li key={idx} className={'participal-list-item__container-item'}>
                            <ParticipantItem name={item} showAllName={show} />
                        </li>
                    );
                })}
                <li className={'participal-list-item__container-selector'} onClick={() => setShow(!show)}>
                    и ещё {total - 5}
                </li>
            </ul>
        );
    }

    return (
        <ul className={'participal-list-item__container'}>
            {participants.map((item, idx) => {
                return (
                    <li key={idx} className={'participal-list-item__container-item'}>
                        <ParticipantItem name={item} showAllName={show} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ParticipantListItem;
