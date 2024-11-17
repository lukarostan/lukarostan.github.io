import style from './style.module.scss';
import { clsx } from 'clsx';
import { Fragment, ReactElement, useState } from 'react';

import { AnimatedListItem } from '@/components/AnimatedList/AnimatedListItem';
import Button from '@/components/Button';
import { useDeviceWidthContext } from '@/context/DeviceWidthContext.tsx';

type Props = {
  data: {
    id: number;
    name: string;
    details: string;
    logo: string;
    startDate?: string;
    endDate?: string;
  }[];
  ctaLabel: string;
};

export default function AnimatedList({ data, ctaLabel }: Props): ReactElement {
  if (!data) {
    return <></>;
  }
  let expandedHeight = `${data.length * 92}px`;

  const [isListVisible, setIsListActive] = useState(false);

  const { width } = useDeviceWidthContext();

  if (width > 1024) {
    expandedHeight = '92px';
  }

  const toggleListVisible = () => {
    setIsListActive(!isListVisible);
  };

  return (
    <div className={style.workHistoryWrapper}>
      <Button title={ctaLabel} onClick={toggleListVisible} extraClass={style.animateAppearance}></Button>
      <div
        className={clsx(style.workHistory, 'work-history')}
        style={
          !isListVisible
            ? { height: '0', margin: '0', opacity: '0' }
            : {
                height: expandedHeight,
                margin: 'unset',
                opacity: '1',
              }
        }>
        <div className={style.listContainer}>
          {data.map((entry) => (
            <Fragment key={entry.id}>
              <AnimatedListItem entry={entry}></AnimatedListItem>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}