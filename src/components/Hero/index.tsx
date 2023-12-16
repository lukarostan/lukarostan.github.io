import {ReactElement} from 'react';
import style from './style.module.scss';
import Subheading from '@/components/animations/Subheading';
import Name from '@/components/Animations/Name';
import {clsx} from 'clsx';

export default function Hero(): ReactElement {
    return (
        <div className={clsx(style.hero, 'hero')}>
            <Name/>
            <Subheading/>
        </div>
    );
}