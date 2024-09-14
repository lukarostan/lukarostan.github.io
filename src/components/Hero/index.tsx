import {ReactElement, useState} from 'react';
import style from './style.module.scss';
import HistoryCta from '@/components/Animations/HistoryCta';
import Subheading from '@/components/Animations/Subheading';
import {clsx} from 'clsx';
import WorkHistory from '@/components/WorkHistory';
import {workHistory as history} from '@/workHistory';
import Name from "@/components/Animations/Name";
import ContactCta from "@/components/Animations/ContactCta";


export default function Hero(): ReactElement {
    const [workHistoryVisible, setWorkHistoryVisible] = useState(false);

    const onHistoryClick = () => {
        setWorkHistoryVisible(!workHistoryVisible);
    }

    return (
        <div className={clsx(style.hero, 'hero')}>
            <Name/>
            <Subheading/>
            <HistoryCta handleHistoryCtaClick={onHistoryClick}/>
            {<WorkHistory history={history} visible={workHistoryVisible}/>}
            <ContactCta/>
        </div>
    );
}