import style from './style.module.scss'
import {useDeviceWidthContext} from "@/context/DeviceWidthContext.tsx";

export default function AnimatedBackground() {

    const {width} = useDeviceWidthContext()

    if (width > 600) {
        return (<div className={style.background}>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
                     xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="1">
                    <g stroke="hsl(0, 0%, 80%)" fill="none" strokeLinecap="round">
                        <circle r="826" cx="400" cy="400" strokeWidth="10" strokeDasharray="21 31"
                                strokeDashoffset="25"
                                transform="rotate(143, 400, 400)"></circle>
                        <circle r="767" cx="400" cy="400" strokeWidth="9" strokeDasharray="14 25"
                                strokeDashoffset="25"
                                transform="rotate(62, 400, 400)"></circle>
                        <circle r="708" cx="400" cy="400" strokeWidth="9" strokeDasharray="23 55"
                                strokeDashoffset="25"
                                transform="rotate(179, 400, 400)"></circle>
                        <circle r="649" cx="400" cy="400" strokeWidth="8" strokeDasharray="54 40"
                                strokeDashoffset="25"
                                transform="rotate(152, 400, 400)"></circle>
                        <circle r="590" cx="400" cy="400" strokeWidth="8" strokeDasharray="46 20"
                                strokeDashoffset="25"
                                transform="rotate(54, 400, 400)"></circle>
                        <circle r="531" cx="400" cy="400" strokeWidth="7" strokeDasharray="32 24"
                                strokeDashoffset="25"
                                transform="rotate(141, 400, 400)"></circle>
                        <circle r="472" cx="400" cy="400" strokeWidth="7" strokeDasharray="34 19"
                                strokeDashoffset="25"
                                transform="rotate(126, 400, 400)"></circle>
                        <circle r="413" cx="400" cy="400" strokeWidth="6" strokeDasharray="20 32"
                                strokeDashoffset="25"
                                transform="rotate(151, 400, 400)"></circle>
                        <circle r="354" cx="400" cy="400" strokeWidth="6" strokeDasharray="45 33"
                                strokeDashoffset="25"
                                transform="rotate(55, 400, 400)"></circle>
                        <circle r="295" cx="400" cy="400" strokeWidth="5" strokeDasharray="50 24"
                                strokeDashoffset="25"
                                transform="rotate(203, 400, 400)"></circle>
                        <circle r="236" cx="400" cy="400" strokeWidth="5" strokeDasharray="12 14"
                                strokeDashoffset="25"
                                transform="rotate(90, 400, 400)"></circle>
                        <circle r="177" cx="400" cy="400" strokeWidth="4" strokeDasharray="16 52"
                                strokeDashoffset="25"
                                transform="rotate(130, 400, 400)"></circle>
                        <circle r="118" cx="400" cy="400" strokeWidth="4" strokeDasharray="46 48"
                                strokeDashoffset="25"
                                transform="rotate(322, 400, 400)"></circle>
                        <circle r="59" cx="400" cy="400" strokeWidth="4" strokeDasharray="44 25"
                                strokeDashoffset="25"
                                transform="rotate(171, 400, 400)"></circle>
                    </g>
                </svg>
            </div>
        )
    }
    return (<div className={style.background}>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
                 xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="1">
                <g stroke="hsl(0, 0%, 80%)" fill="none" strokeLinecap="round">
                    <circle r="555" cx="400" cy="400" strokeWidth="10" strokeDasharray="25 40" strokeDashoffset="25"
                            transform="rotate(353, 400, 400)"></circle>
                    <circle r="518" cx="400" cy="400" strokeWidth="9" strokeDasharray="52 49" strokeDashoffset="25"
                            transform="rotate(213, 400, 400)"></circle>
                    <circle r="481" cx="400" cy="400" strokeWidth="9" strokeDasharray="16 17" strokeDashoffset="25"
                            transform="rotate(175, 400, 400)"></circle>
                    <circle r="444" cx="400" cy="400" strokeWidth="8" strokeDasharray="21 19" strokeDashoffset="25"
                            transform="rotate(207, 400, 400)"></circle>
                    <circle r="407" cx="400" cy="400" strokeWidth="8" strokeDasharray="29 28" strokeDashoffset="25"
                            transform="rotate(251, 400, 400)"></circle>
                    <circle r="370" cx="400" cy="400" strokeWidth="7" strokeDasharray="13 39" strokeDashoffset="25"
                            transform="rotate(18, 400, 400)"></circle>
                    <circle r="333" cx="400" cy="400" strokeWidth="7" strokeDasharray="14 19" strokeDashoffset="25"
                            transform="rotate(299, 400, 400)"></circle>
                    <circle r="296" cx="400" cy="400" strokeWidth="7" strokeDasharray="50 23" strokeDashoffset="25"
                            transform="rotate(200, 400, 400)"></circle>
                    <circle r="259" cx="400" cy="400" strokeWidth="6" strokeDasharray="52 43" strokeDashoffset="25"
                            transform="rotate(144, 400, 400)"></circle>
                    <circle r="222" cx="400" cy="400" strokeWidth="6" strokeDasharray="44 16" strokeDashoffset="25"
                            transform="rotate(228, 400, 400)"></circle>
                    <circle r="185" cx="400" cy="400" strokeWidth="5" strokeDasharray="17 47" strokeDashoffset="25"
                            transform="rotate(78, 400, 400)"></circle>
                    <circle r="148" cx="400" cy="400" strokeWidth="5" strokeDasharray="17 25" strokeDashoffset="25"
                            transform="rotate(175, 400, 400)"></circle>
                    <circle r="111" cx="400" cy="400" strokeWidth="4" strokeDasharray="32 51" strokeDashoffset="25"
                            transform="rotate(232, 400, 400)"></circle>
                    <circle r="74" cx="400" cy="400" strokeWidth="4" strokeDasharray="43 21" strokeDashoffset="25"
                            transform="rotate(23, 400, 400)"></circle>
                    <circle r="37" cx="400" cy="400" strokeWidth="4" strokeDasharray="38 14" strokeDashoffset="25"
                            transform="rotate(180, 400, 400)"></circle>
                </g>
            </svg>
        </div>
    )
}