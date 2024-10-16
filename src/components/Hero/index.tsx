import {ReactElement, useEffect, useState} from 'react';
import style from './style.module.scss';
import HistoryCta from '@/components/Animations/HistoryCta';
import Subheading from '@/components/Animations/Subheading';
import {clsx} from 'clsx';
import WorkHistory from '@/components/WorkHistory';
import {workHistory as history} from '@/workHistory';
import Name from "@/components/Animations/Name";
import ContactCta from "@/components/Animations/ContactCta";
import {useDeviceWidthContext} from "@/context/DeviceWidthContext";
import moment from "moment";

const getHistoryWithLatestDate = () => {
    history[3].endDate = moment().format('MM-DD-YYYY')
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
            <HistoryCta handleHistoryCtaClick={onHistoryClick}/>
            {<WorkHistory history={getHistoryWithLatestDate()} visible={workHistoryVisible}/>}
            <ContactCta/>
        </div>
    );
}