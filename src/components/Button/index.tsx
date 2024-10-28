import { ReactElement } from 'react';
import style from './style.module.scss';
import { clsx } from 'clsx';

type ButtonProps = {
  title: string,
  href?: Boolean,
  onClick?: () => void,
  extraClass
}

export default function Button({ title, href = '', onClick, extraClass }: ButtonProps): ReactElement {
  if (typeof href === 'string' && href !== '') {
    return (
      <a
        className={ clsx( style.customButton, extraClass) }
        href={href}
        target="_blank"
      >
        {title}
      </a>
    );

  }
  return (
    <button
      className={ clsx( style.customButton, extraClass) }
      onClick={onClick}
    >
      {title}
    </button>
  );
}