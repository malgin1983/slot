import React from 'react';
import './SliderButton.css';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
interface SliderButtonProps {
    leftScroll: () => void;
    rightScroll: () => void;
}
const SliderButton: React.FC<SliderButtonProps> = props => {
    const { leftScroll, rightScroll } = props;
    return (
        <div className={'slider-button'}>
            <div className={'slider-button__left'} onClick={leftScroll}>
                <ChevronLeft fontSize={'large'} />
            </div>
            <div className={'slider-button__right'} onClick={rightScroll}>
                <ChevronRight fontSize={'large'} />
            </div>
        </div>
    );
};

export default SliderButton;
