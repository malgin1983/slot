import React from 'react';
import ParticipantItem from '../ParticipantItem/ParticipantItem';
import './ParticipantFullList.css';

interface ParticipantListItemProps {
    participants: Array<string>;
    setShow: (show: boolean) => void;
    show: boolean;
}

interface ParticipantColumnListProps {
    participants: Array<string>;
}

/**
 * Если необходимо отобразить весь список участников, подключает компоненту @ParticipantFullList если @param props.show - true.
 * @ParticipantFullList - UI - контейнерная компонента для вывода двух контейнеров @ParticipantColumnList
 * @ParticipantColumnList отображает список компонент @ParticipantColumnList
 * @param props.participants - список участников
 * @param props.setShow - функция отображения
 * @param props.show- логическое значение отображении.
 */

const ParticipantColumnList: React.FC<ParticipantColumnListProps> = props => {
    const { participants } = props;
    if (participants) {
        return (
            <ul className={'participant-column-list__container'}>
                {participants.map((item, idx) => {
                    return (
                        <li key={idx} className={'participant-column-list__container--item'}>
                            <ParticipantItem name={item} showAllName={false} />
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        return (
            <ul className={'participant-column-list__container'}>
                <li className={'participant-column-list__container--item'}></li>
            </ul>
        );
    }
};
/**
 * Разбиваем массив участников @param props.participants на  2 массива (четные, нечетные) для корректного отображения
 * Передаем данные во вложенную компоненту @ParticipantColumnList
 */
const ParticipantFullList: React.FC<ParticipantListItemProps> = props => {
    const { participants, setShow, show } = props;
    //
    const even = participants.filter((item, idx) => idx % 2 === 0);
    const odd = participants.filter((item, idx) => idx % 2 !== 0);
    return (
        <>
            <div className={'participant-full-list__wrapper'}>
                <div className={'participant-full-list__wrapper--item'}>
                    <ParticipantColumnList participants={odd} />
                </div>
                <div className={'participant-full-list__wrapper--item'}>
                    <ParticipantColumnList participants={even} />
                </div>
            </div>
            <div className={'participant-full-list__container--switch'} onClick={() => setShow(!show)}>
                Свернуть участников
            </div>
        </>
    );
};

export default ParticipantFullList;
