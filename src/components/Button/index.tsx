import {ReactElement} from 'react';
import style from './style.module.scss';

type ButtonProps = {
    title: string,
    color?: string,
    onClick?: Function
}

export default function Button({title, color, onClick}: ButtonProps): ReactElement {
    console.log(color)
    return (
        <button
            className={style.customButton}
            onClick={onClick ? () => onClick() : () => null}
        >
            {title}
        </button>
    );
}