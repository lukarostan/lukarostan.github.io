import {useEffect} from 'react';
import anime from 'animejs/lib/anime.es';
import {useDeviceWidthContext} from "@/context/DeviceWidthContext";
import SubheadingMax600 from "@/components/Animations/Subheading/max600";
import SubheadingMax1024 from "@/components/Animations/Subheading/max1024";
import SubheadingMin1024 from "@/components/Animations/Subheading/min1024";

export default function Subheading() {

    const {width} = useDeviceWidthContext();

    useEffect(() => {
        anime({
            targets: '.subheading-anim svg path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function (el, i) {
                return i * 50;
            },
            direction: 'normal',
            loop: false
        });
    }, []);

    switch (true) {
        case width <= 600:
            return <SubheadingMax600/>
        case width <= 1024:
            return <SubheadingMax1024/>
        case width > 1024:
            return <SubheadingMin1024/>
    }

}