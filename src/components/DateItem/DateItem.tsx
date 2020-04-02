import * as React from 'react';
import './DateItem.css';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { RadioProps } from '@material-ui/core/Radio';
import { IDateItem } from '../ParticipantListWithDateItem/ParticipantListWithDateItem';

interface DateItemProps {
    active: boolean;
    data: IDateItem;
}
/**
 * Компонента вывода даты и времени с радиокнопкой.
 * Имеет два состояния (активный / не активны) в зависимости от состояния меняется background и состояние радиокнопки
 * @param.props.active - состояние элемента
 * @param.props.data -данные для отображения day- день, data- число, time- время
 * У радиокнопки есть два положения (вкл -"d"/выкл - "а"). Положение "d" устанавливается автоматически если @param.props.active - true
 */
const DateItem: React.FC<DateItemProps> = props => {
    const { active, data } = props;
    // let cheked = '';
    // active ? (cheked = 'd') : (cheked = 'a');

    let classItem;
    active ? (classItem = 'date-item__container--active') : (classItem = 'date-item__container');
    const DateItemRadio = withStyles({
        root: {
            position: 'absolute',
            left: '4px',
            top: '-1px',
        },
    })((props: RadioProps) => <Radio color="default" {...props} />);

    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    let keyChange: string = `${data.date}`;
    return (
        <div className={classItem}>
            <DateItemRadio
                checked={selectedValue === keyChange}
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
