import {ReactElement} from 'react';
import style from './style.module.scss'
import {clsx} from 'clsx';

export default function NavigationWrapper ({onLeftClick, onRightClick}) {
    return <div className={style.wrapper}>
        <div className={clsx(style.control)} onClick={() => onLeftClick()}> \- </div>
        <div className={clsx(style.control)} onClick={() => onRightClick()}> -\ </div>
    </div>
}