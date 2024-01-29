import {ReactElement, useEffect, useRef, useState} from 'react';
import style from './style.module.scss';
import {WorkHistoryItem} from '@/workHistory';
import moment from 'moment';
import {clsx} from 'clsx';

type Props = {
    history: WorkHistoryItem[];
    visible: boolean;
}

export default function WorkHistory({history, visible}: Props): ReactElement {
    const containerRef = useRef()
    console.log(moment('01-08-2020').format('MMMM, yyyy'));
    const expandedHeight = `${history.length * 92}px`;
    return (
        <div className={clsx(style.workHistory, 'work-history')} style={{height: !visible ? '0' : expandedHeight}} ref={containerRef}>
            <div className={style.historyContainer}>
                <ul className={style.workplaceList}>
                    {history.map(entry => {
                        return (
                            <li
                                key={entry.id}
                                className={style.workplaceItem}
                                data-id='item'>
                                <p>{entry.name}</p>
                                <p>{`${moment(entry.startDate).format('MMMM, yyyy')} - ${moment(entry.endDate).format('MMMM, yyyy')}`}</p>
                                <p>{moment
                                    .duration(moment(entry.endDate, 'YYYY/MM/DD HH:mm')
                                        .diff(moment(entry.startDate, 'YYYY/MM/DD HH:mm'))
                                    ).asHours()}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}