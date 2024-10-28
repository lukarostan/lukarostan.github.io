import {ReactElement, useEffect, useState} from 'react';
import style from './style.module.scss';
import Subheading from '@/components/Animations/Subheading';
import {clsx} from 'clsx';
import WorkHistory from '@/components/WorkHistory';
import {workHistory as history} from '@/workHistory';
import Name from "@/components/Animations/Name";
import {useDeviceWidthContext} from "@/context/DeviceWidthContext";
import moment from "moment";
import Button from '@/components/Button';

const getHistoryWithLatestDate = () => {
    history[0].endDate = moment().format('MM-DD-YYYY')
    return history
}


export default function Hero(): ReactElement {
    const [workHistoryVisible, setWorkHistoryVisible] = useState(false);

    const {setWidth} = useDeviceWidthContext()

    useEffect(() => {
        setWidth(document.documentElement.clientWidth)
        window.addEventListener('resize', (e) => {
            if (!e.target) {
                return;
            }
            setWidth((e.target as Window).innerWidth)
        })
        return window.removeEventListener('resize', () => setWidth)
    })
    const onHistoryClick = () => {
        setWorkHistoryVisible(!workHistoryVisible);
    }

    return (
        <div className={clsx(style.hero, 'hero')}>
            <Name/>
            <Subheading/>
            <Button title="View my work history" onClick={onHistoryClick} extraClass={style.animateAppearance}></Button>
            {<WorkHistory history={getHistoryWithLatestDate()} visible={workHistoryVisible}/>}
            <Button title="Contact me on LinkedIn" href='https://linkedin.com/in/lukarostan' extraClass={style.animateAppearance}></Button>
        </div>
    );
}