import anime from 'animejs/lib/anime.es.js';
import {useEffect} from 'react';
import style from './style.module.scss'
import {clsx} from 'clsx';

export default function AnimatedBackground() {

    useEffect(() => {
        anime({
            targets: '.anim-child',
            duration: 10000,
            rotate: 360,
            easing: 'easeOutElastic(1, .8)',
            delay: anime.stagger(10),
            autoplay: true,
            loop: false,
        });
        anime({
            targets: '.container',
            duration: 4000,
            keyframes: [
                {scale: 1.01},
                {scale: 0.99}
            ],
            direction: 'normal',
            autoplay: true,
            loop: false,
        });

    }, []);
    return (
        <div className={clsx(style.container, 'container')}>
            {Array(80).fill(1).map((_, index) => {
                return (
                    <div key={index} className={clsx(style.child, 'anim-child')}>
                    </div>)
            })}
        </div>
    )
}