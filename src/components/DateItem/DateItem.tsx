import * as React from 'react';
import './DateItem.css';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { RadioProps } from '@material-ui/core/Radio';
import { IDateItem } from '../ParticipantListWithDateItem/ParticipantListWithDateItem';

interface DateItemProps {
    active: boolean;
    data: IDateItem;
    setSelectedValue?: (dateValue: string) => void | undefined;
    dateValue?: string;
}
/**
 * Компонента вывода даты и времени с радиокнопкой.
 * Имеет два состояния (активный / не активны) в зависимости от состояния меняется background и состояние радиокнопки
 * @param.props.active - состояние элемента активно - радиокнопка в режиме checked, у элемента меняется класс.
 * @param.props.data -данные для отображения day- день, data- число, time- время
 * @param.props.setSelectedValue - заносит в стейт значение, активной радиокнопки (@param.props.data.date).
 * @param.props.dateValue - значение стейта из контейнерного компонента.(данные элемента с активной радиокнопкой).
 */
const DateItem: React.FC<DateItemProps> = props => {
    const { active, data, setSelectedValue, dateValue } = props;

    let classItem: string = 'date-item__container';

    const DateItemRadio = withStyles({
        root: {
            position: 'absolute',
            left: '4px',
            top: '-1px',
        },
    })((props: RadioProps) => <Radio color="default" {...props} />);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setSelectedValue(event.target.value);
    };
    if (active) {
        classItem = 'date-item__container--active';
        return (
            <div className={classItem}>
                <DateItemRadio
                    checked={true}
                    size="small"
                    onChange={handleChange}
                    value={`${data.date}`}
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                />
                <ul className={'date-item__list'}>
                    <li className={'date-item__list--item'}>{data.day}</li>
                    <li className={'date-item__list--item'}>{data.date}</li>
                    <li className={'date-item__list--item'}>{data.time}</li>
                </ul>
            </div>
        );
    }
    return (
        <div className={classItem}>
            <DateItemRadio
                checked={dateValue === `${data.date}`}
                size="small"
                onChange={handleChange}
                value={`${data.date}`}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'D' }}
            />
            <ul className={'date-item__list'}>
                <li className={'date-item__list--item'}>{data.day}</li>
                <li className={'date-item__list--item'}>{data.date}</li>
                <li className={'date-item__list--item'}>{data.time}</li>
            </ul>
        </div>
    );
};

export default DateItem;
