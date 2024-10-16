import {useEffect} from 'react';
import anime from 'animejs/lib/anime.es';
import style from './style.module.scss'
import {useDeviceWidthContext} from "@/context/DeviceWidthContext";
import HistoryCtaMin1024 from "@/components/Animations/HistoryCta/min1024";
import HistoryCtaMax1024 from "@/components/Animations/HistoryCta/max1024";
import HistoryCtaMax600 from "@/components/Animations/HistoryCta/max600";

type Props = {
    handleHistoryCtaClick: () => void
}

export default function HistoryCta({handleHistoryCtaClick}: Props) {

    const {width} = useDeviceWidthContext()

    useEffect(() => {
        anime({
            targets: '.history-cta-anim path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function (_, i) {
                return i * 250;
            },
            direction: 'normal',
            loop: false
        });
    }, []);

    switch (true) {
        case width <= 600:
            return <HistoryCtaMax600 handleHistoryCtaClick={handleHistoryCtaClick}/>
        case width <= 1024:
            return <HistoryCtaMax1024 handleHistoryCtaClick={handleHistoryCtaClick}/>
        case width > 1024:
            return <HistoryCtaMin1024 handleHistoryCtaClick={handleHistoryCtaClick}/>
    }

    return (<div className={style.historyCta} onClick={() => handleHistoryCtaClick()}>
        <svg className="history-cta-anim" width="368.28" height="29.34" viewBox="0 0 368.28 29.34"
             xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000"
               strokeWidth="0.25mm" fill="none" style={{stroke: '#ffffff', strokeWidth: '0.5mm', fill: 'none'}}>
                <path
                    d="M 16.38 23.1 L 12.51 23.1 L 0 1.5 L 5.4 1.5 L 14.46 17.19 L 23.52 1.5 L 28.89 1.5 L 16.38 23.1 Z"
                    id="0" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 35.49 23.1 L 30.9 23.1 L 30.9 5.7 L 35.49 5.7 L 35.49 23.1 Z M 35.49 4.62 L 30.9 4.62 L 30.9 0 L 35.49 0 L 35.49 4.62 Z"
                    id="1" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 38.04 18.75 L 38.04 10.05 Q 38.04 8.88 38.64 7.89 Q 39.24 6.9 40.23 6.3 Q 41.22 5.7 42.39 5.7 L 51.33 5.7 Q 52.53 5.7 53.52 6.3 Q 54.51 6.9 55.095 7.89 Q 55.68 8.88 55.68 10.05 L 55.68 16.71 L 42.63 16.71 L 42.63 18.51 L 55.68 18.51 L 55.68 23.1 L 42.39 23.1 Q 41.22 23.1 40.23 22.5 Q 39.24 21.9 38.64 20.91 Q 38.04 19.92 38.04 18.75 Z M 42.63 10.29 L 42.63 12.69 L 51.09 12.69 L 51.09 10.29 L 42.63 10.29 Z"
                    id="2" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 67.38 23.1 L 63.93 23.1 L 57.09 5.7 L 61.95 5.7 L 65.7 14.73 L 69.63 5.7 L 74.07 5.7 L 78.27 14.85 L 81.75 5.7 L 86.61 5.7 L 80.07 23.1 L 76.59 23.1 L 71.88 12.72 L 67.38 23.1 Z"
                    id="3" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 103.5 23.1 L 98.91 23.1 L 98.91 5.7 L 119.85 5.7 Q 121.05 5.7 122.04 6.3 Q 123.03 6.9 123.615 7.89 Q 124.2 8.88 124.2 10.05 L 124.2 23.1 L 119.64 23.1 L 119.64 10.29 L 113.88 10.29 L 113.88 23.1 L 109.26 23.1 L 109.26 10.29 L 103.5 10.29 L 103.5 23.1 Z"
                    id="5" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 141.21 29.34 L 130.65 29.34 L 130.65 24.72 L 140.97 24.72 L 140.97 23.1 L 132.27 23.1 Q 131.07 23.1 130.08 22.5 Q 129.09 21.9 128.49 20.91 Q 127.89 19.92 127.89 18.75 L 127.89 5.76 L 132.48 5.76 L 132.48 18.51 L 140.97 18.51 L 140.97 5.76 L 145.56 5.76 L 145.56 24.99 Q 145.56 26.19 144.975 27.18 Q 144.39 28.17 143.4 28.755 Q 142.41 29.34 141.21 29.34 Z"
                    id="6" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 168.18 23.1 L 164.73 23.1 L 157.89 5.7 L 162.75 5.7 L 166.5 14.73 L 170.43 5.7 L 174.87 5.7 L 179.07 14.85 L 182.55 5.7 L 187.41 5.7 L 180.87 23.1 L 177.39 23.1 L 172.68 12.72 L 168.18 23.1 Z"
                    id="8" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 188.16 18.75 L 188.16 10.05 Q 188.16 8.88 188.76 7.89 Q 189.36 6.9 190.35 6.3 Q 191.34 5.7 192.51 5.7 L 201.45 5.7 Q 202.65 5.7 203.64 6.3 Q 204.63 6.9 205.215 7.89 Q 205.8 8.88 205.8 10.05 L 205.8 18.75 Q 205.8 19.92 205.215 20.91 Q 204.63 21.9 203.64 22.5 Q 202.65 23.1 201.45 23.1 L 192.51 23.1 Q 191.34 23.1 190.35 22.5 Q 189.36 21.9 188.76 20.91 Q 188.16 19.92 188.16 18.75 Z M 192.75 18.51 L 201.21 18.51 L 201.21 10.29 L 192.75 10.29 L 192.75 18.51 Z"
                    id="9" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 212.73 23.1 L 208.14 23.1 L 208.14 10.05 Q 208.14 8.88 208.74 7.89 Q 209.34 6.9 210.33 6.3 Q 211.32 5.7 212.52 5.7 L 222.12 5.7 L 222.12 10.29 L 212.73 10.29 L 212.73 23.1 Z"
                    id="10" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 228.57 23.1 L 223.98 23.1 L 223.98 0 L 228.57 0 L 228.57 12.09 L 230.91 12.09 L 236.82 5.7 L 241.44 5.7 L 241.44 7.26 L 234.96 14.4 L 241.44 21.54 L 241.44 23.1 L 236.82 23.1 L 230.91 16.71 L 228.57 16.71 L 228.57 23.1 Z"
                    id="11" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 257.61 23.1 L 253.02 23.1 L 253.02 0 L 257.61 0 L 257.61 5.7 L 266.31 5.7 Q 267.48 5.7 268.47 6.3 Q 269.46 6.9 270.06 7.89 Q 270.66 8.88 270.66 10.05 L 270.66 23.1 L 266.07 23.1 L 266.07 10.29 L 257.61 10.29 L 257.61 23.1 Z"
                    id="13" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 277.59 23.1 L 273 23.1 L 273 5.7 L 277.59 5.7 L 277.59 23.1 Z M 277.59 4.62 L 273 4.62 L 273 0 L 277.59 0 L 277.59 4.62 Z"
                    id="14" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 280.95 18.75 L 280.95 17.88 L 285.54 17.88 L 285.54 18.51 L 294 18.51 L 294 16.71 L 285.3 16.71 Q 284.13 16.71 283.14 16.11 Q 282.15 15.51 281.55 14.52 Q 280.95 13.53 280.95 12.36 L 280.95 10.05 Q 280.95 8.88 281.55 7.89 Q 282.15 6.9 283.14 6.3 Q 284.13 5.7 285.3 5.7 L 294.24 5.7 Q 295.44 5.7 296.43 6.3 Q 297.42 6.9 298.02 7.89 Q 298.62 8.88 298.62 10.05 L 298.62 10.92 L 294 10.92 L 294 10.29 L 285.54 10.29 L 285.54 12.09 L 294.24 12.09 Q 295.44 12.09 296.43 12.69 Q 297.42 13.29 298.02 14.28 Q 298.62 15.27 298.62 16.44 L 298.62 18.75 Q 298.62 19.92 298.02 20.91 Q 297.42 21.9 296.43 22.5 Q 295.44 23.1 294.24 23.1 L 285.3 23.1 Q 284.13 23.1 283.14 22.5 Q 282.15 21.9 281.55 20.91 Q 280.95 19.92 280.95 18.75 Z"
                    id="15" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 301.68 18.75 L 301.68 0.54 L 306.27 0.54 L 306.27 5.7 L 312.72 5.7 L 312.72 10.29 L 306.27 10.29 L 306.27 18.51 L 312.72 18.51 L 312.72 23.1 L 306.06 23.1 Q 304.86 23.1 303.87 22.5 Q 302.88 21.9 302.28 20.91 Q 301.68 19.92 301.68 18.75 Z"
                    id="16" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 315.15 18.75 L 315.15 10.05 Q 315.15 8.88 315.75 7.89 Q 316.35 6.9 317.34 6.3 Q 318.33 5.7 319.5 5.7 L 328.44 5.7 Q 329.64 5.7 330.63 6.3 Q 331.62 6.9 332.205 7.89 Q 332.79 8.88 332.79 10.05 L 332.79 18.75 Q 332.79 19.92 332.205 20.91 Q 331.62 21.9 330.63 22.5 Q 329.64 23.1 328.44 23.1 L 319.5 23.1 Q 318.33 23.1 317.34 22.5 Q 316.35 21.9 315.75 20.91 Q 315.15 19.92 315.15 18.75 Z M 319.74 18.51 L 328.2 18.51 L 328.2 10.29 L 319.74 10.29 L 319.74 18.51 Z"
                    id="17" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 339.72 23.1 L 335.13 23.1 L 335.13 10.05 Q 335.13 8.88 335.73 7.89 Q 336.33 6.9 337.32 6.3 Q 338.31 5.7 339.51 5.7 L 349.11 5.7 L 349.11 10.29 L 339.72 10.29 L 339.72 23.1 Z"
                    id="18" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 363.93 29.34 L 353.37 29.34 L 353.37 24.72 L 363.69 24.72 L 363.69 23.1 L 354.99 23.1 Q 353.79 23.1 352.8 22.5 Q 351.81 21.9 351.21 20.91 Q 350.61 19.92 350.61 18.75 L 350.61 5.76 L 355.2 5.76 L 355.2 18.51 L 363.69 18.51 L 363.69 5.76 L 368.28 5.76 L 368.28 24.99 Q 368.28 26.19 367.695 27.18 Q 367.11 28.17 366.12 28.755 Q 365.13 29.34 363.93 29.34 Z"
                    id="19" vectorEffect="non-scaling-stroke"/>
            </g>
        </svg>
    </div>);
}