import {ReactElement, useState} from 'react';
import style from './style.module.scss';
import {WorkHistoryItem} from '@/workHistory';
import moment from 'moment';
import {clsx} from 'clsx';

type Props = {
    history: WorkHistoryItem[]
}

export default function WorkHistory({history}: Props): ReactElement {
    const [selectedItem, setSelectedItem] = useState(null);
    console.log(moment('01-08-2020').format('MMMM, yyyy'));
    return (
        <div className={clsx(style.workHistory, 'work-history')}>
            <h2 className={style.title}>Work history</h2>
            <div className={style.historyContainer}>
                <ul className={style.workplaceList}>
                    {history.map(entry => {
                        return (
                            <li
                                key={entry.id}
                                className={style.workplaceItem}
                                onClick={() => setSelectedItem(entry.id)}>
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
                <div className={style.details}>
                    {selectedItem === null && <p>no item selected</p>}
                    {selectedItem !== null && <p>{history[selectedItem - 1].details}</p>}
                </div>
            </div>
        </div>
    );
}