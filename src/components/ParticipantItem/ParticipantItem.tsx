import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './ParticipantItem.css';

interface ParticipantItemProps {
    name: string;
    showAllName: boolean;
}
/**
 * @ParticipantItem отображает имя участника
 * @param props.showAllName - boolean - флаг для проведения проверки и корректировки длины имени.
 * Если имя участника больше 17 символов, выводит укороченный вариант имени, с "..." на конце
 * @param props.name - имя участника.
 */

const ParticipantItem: React.FC<ParticipantItemProps> = props => {
    const { name, showAllName } = props;
    let reductName: string;
    if (showAllName) {
        name.length > 18 ? (reductName = `${name.slice(0, 17)}...`) : (reductName = name);
    } else {
        reductName = name;
    }

    return (
        <div className={'participant-item__container'}>
            <HighlightOffIcon className={'participant-item__container--icon'} />
            <div className={'participant-item__container--name'}>{reductName}</div>
        </div>
    );
};

export default ParticipantItem;
