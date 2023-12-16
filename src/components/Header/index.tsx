import {ReactElement} from 'react';
import style from './style.module.scss';
import Button from '@/components/Button';

export default function Header(): ReactElement {
    return (
        <div className={style.pageHeader}>
            <Button
                title={'Reach out on LinkedIn!'}
            ></Button>
        </div>
    );
}