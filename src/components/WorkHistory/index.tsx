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
    const expandedHeight = `${history.length * 92}px`;
    return (
        <div className={clsx(style.workHistory, 'work-history')} style={{height: !visible ? '0' : expandedHeight}}
             ref={containerRef}>
            <div className={style.historyContainer}>
                <ul className={style.workplaceList}>
                    {history.map(entry => {
                        const convertedStart = new Date(entry.startDate).toISOString();
                        const convertedEnd = new Date(entry.endDate).toISOString();
                        const startTime = moment(convertedStart, 'YYYY/MM/DD HH:mm');
                        const endTime = moment(convertedEnd, 'YYYY/MM/DD HH:mm');

                        console.log("convertedStart", convertedStart)
                        console.log("convertedEnd", convertedEnd)

                        const monthsdiff = endTime.diff(startTime, 'months', true);
                        console.log(monthsdiff)
                        return (
                            <li
                                key={entry.id}
                                className={style.workplaceItem}
                                data-id='item'>
                                <p>{entry.name}</p>
                                <p>{`${moment(entry.startDate).format('MMMM, yyyy')} - ${moment(entry.endDate).format('MMMM, yyyy')}`}</p>
                                <p>{monthsdiff <= 12 ? `${monthsdiff.toFixed(0)} months` : `${(Math.floor(monthsdiff / 12)).toFixed(0)} years, ${(monthsdiff % 12).toFixed(0)} months`}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}