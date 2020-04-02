import * as React from 'react';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import { withStyles } from '@material-ui/core/styles';

interface RefreshButtonProps {
    color: string;
    buttonText: string;
    onHandleClick?: () => void;
}
/**
 * @RefreshButton - компонента кнопка Refresh
 * Отображает кол-во участников, также выводит контейнер - @DateItem и @ParticipantListItem
 *@param props.color - цвет элементов и значка.
 *@param props.buttonText - текст кнопки.
 *@param props.onHandleClick - callBack function
 */
const RefreshButton: React.FC<RefreshButtonProps> = props => {
    const { color, buttonText } = props;
    const RefreshButton = withStyles({
        root: {
            color: color,
            // padding: '9px 36px 9px 13px',
        },
    })(Button);
    const onHandleClick = () => {};
    return (
        <div className={'refresh-button'}>
            <RefreshButton size={'small'} variant={'outlined'} startIcon={<RefreshIcon />} onClick={onHandleClick}>
                {buttonText}
            </RefreshButton>
        </div>
    );
};

export default RefreshButton;
