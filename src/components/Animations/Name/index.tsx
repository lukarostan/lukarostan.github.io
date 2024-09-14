import {useEffect} from 'react';
import anime from 'animejs/lib/anime.es';
import {NameMin1024} from "@/components/Animations/Name/min1024";
import {useDeviceWidthContext} from "@/context/DeviceWidthContext";

export default function Name() {

    const {width} = useDeviceWidthContext();

    useEffect(() => {
    console.log("tctx",width)

    }, [width]);


    useEffect(() => {
        anime({
            targets: '.name-anim path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function (el, i) {
                return i * 250;
            },
            direction: 'normal',
            loop: false
        });
    }, []);

    return (<>
        <NameMin1024/>
    </>);
}