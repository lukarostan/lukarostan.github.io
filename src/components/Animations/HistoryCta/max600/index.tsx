import style from '.././style.module.scss'
import {clsx} from "clsx";
import {animatedSvgStyle} from "@/components/constants";

type Props = {
    handleHistoryCtaClick: () => void
}

export default function HistoryCtaMax600({handleHistoryCtaClick}: Props) {

    return (<div className={clsx(style.historyCta, 'history-cta-anim')} onClick={() => handleHistoryCtaClick()}>
        <svg width="272.162" height="21.516" viewBox="0 0 272.162 21.516" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="1"
               fill="none" style={animatedSvgStyle(0.4)}>
                <path
                    d="M 12.012 16.94 L 9.174 16.94 L 0 1.1 L 3.96 1.1 L 10.604 12.606 L 17.248 1.1 L 21.186 1.1 L 12.012 16.94 Z"
                    id="0" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 25.806 16.94 L 22.44 16.94 L 22.44 4.18 L 25.806 4.18 L 25.806 16.94 Z M 25.806 3.388 L 22.44 3.388 L 22.44 0 L 25.806 0 L 25.806 3.388 Z"
                    id="1" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 27.456 13.75 L 27.456 7.37 Q 27.456 6.512 27.896 5.786 Q 28.336 5.06 29.062 4.62 Q 29.788 4.18 30.646 4.18 L 37.202 4.18 Q 38.082 4.18 38.808 4.62 Q 39.534 5.06 39.963 5.786 Q 40.392 6.512 40.392 7.37 L 40.392 12.254 L 30.822 12.254 L 30.822 13.574 L 40.392 13.574 L 40.392 16.94 L 30.646 16.94 Q 29.788 16.94 29.062 16.5 Q 28.336 16.06 27.896 15.334 Q 27.456 14.608 27.456 13.75 Z M 30.822 7.546 L 30.822 9.306 L 37.026 9.306 L 37.026 7.546 L 30.822 7.546 Z"
                    id="2" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 49.874 16.94 L 47.344 16.94 L 42.328 4.18 L 45.892 4.18 L 48.642 10.802 L 51.524 4.18 L 54.78 4.18 L 57.86 10.89 L 60.412 4.18 L 63.976 4.18 L 59.18 16.94 L 56.628 16.94 L 53.174 9.328 L 49.874 16.94 Z"
                    id="3" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 76.362 16.94 L 72.996 16.94 L 72.996 4.18 L 88.352 4.18 Q 89.232 4.18 89.958 4.62 Q 90.684 5.06 91.113 5.786 Q 91.542 6.512 91.542 7.37 L 91.542 16.94 L 88.198 16.94 L 88.198 7.546 L 83.974 7.546 L 83.974 16.94 L 80.586 16.94 L 80.586 7.546 L 76.362 7.546 L 76.362 16.94 Z"
                    id="5" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 104.016 21.516 L 96.272 21.516 L 96.272 18.128 L 103.84 18.128 L 103.84 16.94 L 97.46 16.94 Q 96.58 16.94 95.854 16.5 Q 95.128 16.06 94.688 15.334 Q 94.248 14.608 94.248 13.75 L 94.248 4.224 L 97.614 4.224 L 97.614 13.574 L 103.84 13.574 L 103.84 4.224 L 107.206 4.224 L 107.206 18.326 Q 107.206 19.206 106.777 19.932 Q 106.348 20.658 105.622 21.087 Q 104.896 21.516 104.016 21.516 Z"
                    id="6" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 123.794 16.94 L 121.264 16.94 L 116.248 4.18 L 119.812 4.18 L 122.562 10.802 L 125.444 4.18 L 128.7 4.18 L 131.78 10.89 L 134.332 4.18 L 137.896 4.18 L 133.1 16.94 L 130.548 16.94 L 127.094 9.328 L 123.794 16.94 Z"
                    id="8" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 139.766 13.75 L 139.766 7.37 Q 139.766 6.512 140.206 5.786 Q 140.646 5.06 141.372 4.62 Q 142.098 4.18 142.956 4.18 L 149.512 4.18 Q 150.392 4.18 151.118 4.62 Q 151.844 5.06 152.273 5.786 Q 152.702 6.512 152.702 7.37 L 152.702 13.75 Q 152.702 14.608 152.273 15.334 Q 151.844 16.06 151.118 16.5 Q 150.392 16.94 149.512 16.94 L 142.956 16.94 Q 142.098 16.94 141.372 16.5 Q 140.646 16.06 140.206 15.334 Q 139.766 14.608 139.766 13.75 Z M 143.132 13.574 L 149.336 13.574 L 149.336 7.546 L 143.132 7.546 L 143.132 13.574 Z"
                    id="9" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 158.378 16.94 L 155.012 16.94 L 155.012 7.37 Q 155.012 6.512 155.452 5.786 Q 155.892 5.06 156.618 4.62 Q 157.344 4.18 158.224 4.18 L 165.264 4.18 L 165.264 7.546 L 158.378 7.546 L 158.378 16.94 Z"
                    id="10" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 169.994 16.94 L 166.628 16.94 L 166.628 0 L 169.994 0 L 169.994 8.866 L 171.71 8.866 L 176.044 4.18 L 179.432 4.18 L 179.432 5.324 L 174.68 10.56 L 179.432 15.796 L 179.432 16.94 L 176.044 16.94 L 171.71 12.254 L 169.994 12.254 L 169.994 16.94 Z"
                    id="11" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 191.29 16.94 L 187.924 16.94 L 187.924 0 L 191.29 0 L 191.29 4.18 L 197.67 4.18 Q 198.528 4.18 199.254 4.62 Q 199.98 5.06 200.42 5.786 Q 200.86 6.512 200.86 7.37 L 200.86 16.94 L 197.494 16.94 L 197.494 7.546 L 191.29 7.546 L 191.29 16.94 Z"
                    id="13" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 205.942 16.94 L 202.576 16.94 L 202.576 4.18 L 205.942 4.18 L 205.942 16.94 Z M 205.942 3.388 L 202.576 3.388 L 202.576 0 L 205.942 0 L 205.942 3.388 Z"
                    id="14" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 207.526 13.75 L 207.526 13.112 L 210.892 13.112 L 210.892 13.574 L 217.096 13.574 L 217.096 12.254 L 210.716 12.254 Q 209.858 12.254 209.132 11.814 Q 208.406 11.374 207.966 10.648 Q 207.526 9.922 207.526 9.064 L 207.526 7.37 Q 207.526 6.512 207.966 5.786 Q 208.406 5.06 209.132 4.62 Q 209.858 4.18 210.716 4.18 L 217.272 4.18 Q 218.152 4.18 218.878 4.62 Q 219.604 5.06 220.044 5.786 Q 220.484 6.512 220.484 7.37 L 220.484 8.008 L 217.096 8.008 L 217.096 7.546 L 210.892 7.546 L 210.892 8.866 L 217.272 8.866 Q 218.152 8.866 218.878 9.306 Q 219.604 9.746 220.044 10.472 Q 220.484 11.198 220.484 12.056 L 220.484 13.75 Q 220.484 14.608 220.044 15.334 Q 219.604 16.06 218.878 16.5 Q 218.152 16.94 217.272 16.94 L 210.716 16.94 Q 209.858 16.94 209.132 16.5 Q 208.406 16.06 207.966 15.334 Q 207.526 14.608 207.526 13.75 Z"
                    id="15" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 222.728 13.75 L 222.728 0.396 L 226.094 0.396 L 226.094 4.18 L 230.824 4.18 L 230.824 7.546 L 226.094 7.546 L 226.094 13.574 L 230.824 13.574 L 230.824 16.94 L 225.94 16.94 Q 225.06 16.94 224.334 16.5 Q 223.608 16.06 223.168 15.334 Q 222.728 14.608 222.728 13.75 Z"
                    id="16" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 232.606 13.75 L 232.606 7.37 Q 232.606 6.512 233.046 5.786 Q 233.486 5.06 234.212 4.62 Q 234.938 4.18 235.796 4.18 L 242.352 4.18 Q 243.232 4.18 243.958 4.62 Q 244.684 5.06 245.113 5.786 Q 245.542 6.512 245.542 7.37 L 245.542 13.75 Q 245.542 14.608 245.113 15.334 Q 244.684 16.06 243.958 16.5 Q 243.232 16.94 242.352 16.94 L 235.796 16.94 Q 234.938 16.94 234.212 16.5 Q 233.486 16.06 233.046 15.334 Q 232.606 14.608 232.606 13.75 Z M 235.972 13.574 L 242.176 13.574 L 242.176 7.546 L 235.972 7.546 L 235.972 13.574 Z"
                    id="17" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 251.218 16.94 L 247.852 16.94 L 247.852 7.37 Q 247.852 6.512 248.292 5.786 Q 248.732 5.06 249.458 4.62 Q 250.184 4.18 251.064 4.18 L 258.104 4.18 L 258.104 7.546 L 251.218 7.546 L 251.218 16.94 Z"
                    id="18" vectorEffect="non-scaling-stroke"/>
                <path
                    d="M 268.972 21.516 L 261.228 21.516 L 261.228 18.128 L 268.796 18.128 L 268.796 16.94 L 262.416 16.94 Q 261.536 16.94 260.81 16.5 Q 260.084 16.06 259.644 15.334 Q 259.204 14.608 259.204 13.75 L 259.204 4.224 L 262.57 4.224 L 262.57 13.574 L 268.796 13.574 L 268.796 4.224 L 272.162 4.224 L 272.162 18.326 Q 272.162 19.206 271.733 19.932 Q 271.304 20.658 270.578 21.087 Q 269.852 21.516 268.972 21.516 Z"
                    id="19" vectorEffect="non-scaling-stroke"/>
            </g>
        </svg>
    </div>);
}