import style from './style.module.scss';
import { clsx } from 'clsx';
import moment from 'moment';
import { ReactElement, useEffect } from 'react';

import AnimatedList from '@/components/AnimatedList';
import Name from '@/components/Animations/Name';
import Subheading from '@/components/Animations/Subheading';
import Button from '@/components/Button';
import { useDeviceWidthContext } from '@/context/DeviceWidthContext';
import { technologies } from '@/data/technologies.ts';
import { workHistory as history } from '@/data/workHistory.ts';
import { projects } from '@/data/projects.ts';

const getHistoryWithLatestDate = () => {
  history[0].endDate = moment().format('MM-DD-YYYY');
  return history;
};

export default function Hero(): ReactElement {
  const { setWidth } = useDeviceWidthContext();

  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', (e) => {
      if (!e.target) {
        return;
      }
      setWidth((e.target as Window).innerWidth);
    });
    return window.removeEventListener('resize', () => setWidth);
  });

  // todo: make multiple open lists look better
  // todo: fix background height on desktop with opened lists

  return (
    <div className={clsx(style.hero, 'hero')}>
      <Name />
      <Subheading />
      <div className={'content-wrapper'}>
        <AnimatedList data={projects} ctaLabel={'Projects'}></AnimatedList>
        <AnimatedList data={technologies} ctaLabel={'Technologies'}></AnimatedList>
        <AnimatedList data={getHistoryWithLatestDate()} ctaLabel={'Work History'}></AnimatedList>

        <Button
          title="Contact me on LinkedIn"
          href="https://linkedin.com/in/lukarostan"
          extraClass={style.animateAppearance}></Button>
      </div>
    </div>
  );
}