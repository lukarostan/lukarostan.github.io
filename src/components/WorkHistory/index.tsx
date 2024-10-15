import {ReactElement} from 'react';
import style from './style.module.scss';
import moment from 'moment';
import {clsx} from 'clsx';
import {WorkHistoryItem} from "../../workHistory";

type Props = {
    history: WorkHistoryItem[];
    visible: boolean;
}

export default function WorkHistory({history, visible}: Props): ReactElement {
    const expandedHeight = `${history.length * 92}px`;
    return (
        <div className={clsx(style.workHistory, 'work-history')}
             style={!visible ? {height: '0', margin: '0'} : {height: expandedHeight, margin: 'unset'}}>
            <div className={style.historyContainer}>
                <ul className={style.workplaceList}>
                    {history.map(entry => {
                        const convertedStart = new Date(entry.startDate).toISOString();
                        const convertedEnd = new Date(entry.endDate).toISOString();
                        const startTime = moment(convertedStart, 'YYYY/MM/DD HH:mm');
                        const endTime = moment(convertedEnd, 'YYYY/MM/DD HH:mm');

                        const monthsDiff = endTime.diff(startTime, 'months', true);
                        return (
                            <li
                                key={entry.id}
                                className={style.workplaceItem}
                                data-id='item'>
                                <img  src={entry.logo} alt={entry.name} width={45} height={45}/>
                                <div className={style.content}>
                                    <p>{entry.name}</p>
                                    <p>{`${moment(entry.startDate).format('MMMM, yyyy')} - ${moment(entry.endDate).format('MMMM, yyyy')}`}</p>
                                    <p>{monthsDiff <= 12 ? `${monthsDiff.toFixed(0)} months` : `${(Math.floor(monthsDiff / 12)).toFixed(0)} years, ${(monthsDiff % 12).toFixed(0)} months`}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}