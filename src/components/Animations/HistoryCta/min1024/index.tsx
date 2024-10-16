import style from '.././style.module.scss'
import {clsx} from "clsx";
import {animatedSvgStyle} from "@/components/constants";

type Props = {
    handleHistoryCtaClick: () => void
}

export default function HistoryCtaMin1024({handleHistoryCtaClick}: Props) {

    return (<div className={clsx(style.historyCta, 'history-cta-anim')} onClick={() => handleHistoryCtaClick()}>
        <svg width="371.13" height="29.34" viewBox="0 0 371.13 29.34" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="1"
               fill="none" style={animatedSvgStyle(0.4)}>
                <path
                    d="M 16.38 23.1 L 12.51 23.1 L 0 1.5 L 5.4 1.5 L 14.46 17.19 L 23.52 1.5 L 28.89 1.5 L 16.38 23.1 Z"
                    id="0" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 35.19 23.1 L 30.6 23.1 L 30.6 5.7 L 35.19 5.7 L 35.19 23.1 Z M 35.19 4.62 L 30.6 4.62 L 30.6 0 L 35.19 0 L 35.19 4.62 Z"
                    id="1" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 37.44 18.75 L 37.44 10.05 Q 37.44 8.88 38.04 7.89 Q 38.64 6.9 39.63 6.3 Q 40.62 5.7 41.79 5.7 L 50.73 5.7 Q 51.93 5.7 52.92 6.3 Q 53.91 6.9 54.495 7.89 Q 55.08 8.88 55.08 10.05 L 55.08 16.71 L 42.03 16.71 L 42.03 18.51 L 55.08 18.51 L 55.08 23.1 L 41.79 23.1 Q 40.62 23.1 39.63 22.5 Q 38.64 21.9 38.04 20.91 Q 37.44 19.92 37.44 18.75 Z M 42.03 10.29 L 42.03 12.69 L 50.49 12.69 L 50.49 10.29 L 42.03 10.29 Z"
                    id="2" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 68.01 23.1 L 64.56 23.1 L 57.72 5.7 L 62.58 5.7 L 66.33 14.73 L 70.26 5.7 L 74.7 5.7 L 78.9 14.85 L 82.38 5.7 L 87.24 5.7 L 80.7 23.1 L 77.22 23.1 L 72.51 12.72 L 68.01 23.1 Z"
                    id="3" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 104.13 23.1 L 99.54 23.1 L 99.54 5.7 L 120.48 5.7 Q 121.68 5.7 122.67 6.3 Q 123.66 6.9 124.245 7.89 Q 124.83 8.88 124.83 10.05 L 124.83 23.1 L 120.27 23.1 L 120.27 10.29 L 114.51 10.29 L 114.51 23.1 L 109.89 23.1 L 109.89 10.29 L 104.13 10.29 L 104.13 23.1 Z"
                    id="5" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 141.84 29.34 L 131.28 29.34 L 131.28 24.72 L 141.6 24.72 L 141.6 23.1 L 132.9 23.1 Q 131.7 23.1 130.71 22.5 Q 129.72 21.9 129.12 20.91 Q 128.52 19.92 128.52 18.75 L 128.52 5.76 L 133.11 5.76 L 133.11 18.51 L 141.6 18.51 L 141.6 5.76 L 146.19 5.76 L 146.19 24.99 Q 146.19 26.19 145.605 27.18 Q 145.02 28.17 144.03 28.755 Q 143.04 29.34 141.84 29.34 Z"
                    id="6" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 168.81 23.1 L 165.36 23.1 L 158.52 5.7 L 163.38 5.7 L 167.13 14.73 L 171.06 5.7 L 175.5 5.7 L 179.7 14.85 L 183.18 5.7 L 188.04 5.7 L 181.5 23.1 L 178.02 23.1 L 173.31 12.72 L 168.81 23.1 Z"
                    id="8" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 190.59 18.75 L 190.59 10.05 Q 190.59 8.88 191.19 7.89 Q 191.79 6.9 192.78 6.3 Q 193.77 5.7 194.94 5.7 L 203.88 5.7 Q 205.08 5.7 206.07 6.3 Q 207.06 6.9 207.645 7.89 Q 208.23 8.88 208.23 10.05 L 208.23 18.75 Q 208.23 19.92 207.645 20.91 Q 207.06 21.9 206.07 22.5 Q 205.08 23.1 203.88 23.1 L 194.94 23.1 Q 193.77 23.1 192.78 22.5 Q 191.79 21.9 191.19 20.91 Q 190.59 19.92 190.59 18.75 Z M 195.18 18.51 L 203.64 18.51 L 203.64 10.29 L 195.18 10.29 L 195.18 18.51 Z"
                    id="9" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 215.97 23.1 L 211.38 23.1 L 211.38 10.05 Q 211.38 8.88 211.98 7.89 Q 212.58 6.9 213.57 6.3 Q 214.56 5.7 215.76 5.7 L 225.36 5.7 L 225.36 10.29 L 215.97 10.29 L 215.97 23.1 Z"
                    id="10" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 231.81 23.1 L 227.22 23.1 L 227.22 0 L 231.81 0 L 231.81 12.09 L 234.15 12.09 L 240.06 5.7 L 244.68 5.7 L 244.68 7.26 L 238.2 14.4 L 244.68 21.54 L 244.68 23.1 L 240.06 23.1 L 234.15 16.71 L 231.81 16.71 L 231.81 23.1 Z"
                    id="11" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 260.85 23.1 L 256.26 23.1 L 256.26 0 L 260.85 0 L 260.85 5.7 L 269.55 5.7 Q 270.72 5.7 271.71 6.3 Q 272.7 6.9 273.3 7.89 Q 273.9 8.88 273.9 10.05 L 273.9 23.1 L 269.31 23.1 L 269.31 10.29 L 260.85 10.29 L 260.85 23.1 Z"
                    id="13" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 280.83 23.1 L 276.24 23.1 L 276.24 5.7 L 280.83 5.7 L 280.83 23.1 Z M 280.83 4.62 L 276.24 4.62 L 276.24 0 L 280.83 0 L 280.83 4.62 Z"
                    id="14" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 282.99 18.75 L 282.99 17.88 L 287.58 17.88 L 287.58 18.51 L 296.04 18.51 L 296.04 16.71 L 287.34 16.71 Q 286.17 16.71 285.18 16.11 Q 284.19 15.51 283.59 14.52 Q 282.99 13.53 282.99 12.36 L 282.99 10.05 Q 282.99 8.88 283.59 7.89 Q 284.19 6.9 285.18 6.3 Q 286.17 5.7 287.34 5.7 L 296.28 5.7 Q 297.48 5.7 298.47 6.3 Q 299.46 6.9 300.06 7.89 Q 300.66 8.88 300.66 10.05 L 300.66 10.92 L 296.04 10.92 L 296.04 10.29 L 287.58 10.29 L 287.58 12.09 L 296.28 12.09 Q 297.48 12.09 298.47 12.69 Q 299.46 13.29 300.06 14.28 Q 300.66 15.27 300.66 16.44 L 300.66 18.75 Q 300.66 19.92 300.06 20.91 Q 299.46 21.9 298.47 22.5 Q 297.48 23.1 296.28 23.1 L 287.34 23.1 Q 286.17 23.1 285.18 22.5 Q 284.19 21.9 283.59 20.91 Q 282.99 19.92 282.99 18.75 Z"
                    id="15" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 303.72 18.75 L 303.72 0.54 L 308.31 0.54 L 308.31 5.7 L 314.76 5.7 L 314.76 10.29 L 308.31 10.29 L 308.31 18.51 L 314.76 18.51 L 314.76 23.1 L 308.1 23.1 Q 306.9 23.1 305.91 22.5 Q 304.92 21.9 304.32 20.91 Q 303.72 19.92 303.72 18.75 Z"
                    id="16" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 317.19 18.75 L 317.19 10.05 Q 317.19 8.88 317.79 7.89 Q 318.39 6.9 319.38 6.3 Q 320.37 5.7 321.54 5.7 L 330.48 5.7 Q 331.68 5.7 332.67 6.3 Q 333.66 6.9 334.245 7.89 Q 334.83 8.88 334.83 10.05 L 334.83 18.75 Q 334.83 19.92 334.245 20.91 Q 333.66 21.9 332.67 22.5 Q 331.68 23.1 330.48 23.1 L 321.54 23.1 Q 320.37 23.1 319.38 22.5 Q 318.39 21.9 317.79 20.91 Q 317.19 19.92 317.19 18.75 Z M 321.78 18.51 L 330.24 18.51 L 330.24 10.29 L 321.78 10.29 L 321.78 18.51 Z"
                    id="17" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 342.57 23.1 L 337.98 23.1 L 337.98 10.05 Q 337.98 8.88 338.58 7.89 Q 339.18 6.9 340.17 6.3 Q 341.16 5.7 342.36 5.7 L 351.96 5.7 L 351.96 10.29 L 342.57 10.29 L 342.57 23.1 Z"
                    id="18" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 366.78 29.34 L 356.22 29.34 L 356.22 24.72 L 366.54 24.72 L 366.54 23.1 L 357.84 23.1 Q 356.64 23.1 355.65 22.5 Q 354.66 21.9 354.06 20.91 Q 353.46 19.92 353.46 18.75 L 353.46 5.76 L 358.05 5.76 L 358.05 18.51 L 366.54 18.51 L 366.54 5.76 L 371.13 5.76 L 371.13 24.99 Q 371.13 26.19 370.545 27.18 Q 369.96 28.17 368.97 28.755 Q 367.98 29.34 366.78 29.34 Z"
                    id="19" vectorEffect="non-scaling-stroke"/>
            </g>
        </svg>
    </div>);
}