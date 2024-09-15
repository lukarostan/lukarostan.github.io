import {useEffect} from 'react';
import anime from 'animejs/lib/anime.es';
import {useDeviceWidthContext} from "@/context/DeviceWidthContext";
import ContactCtaMax600 from "@/components/Animations/ContactCta/max600";
import ContactCtaMax1024 from "@/components/Animations/ContactCta/max1024";
import ContactCtaMin1024 from "@/components/Animations/ContactCta/min1024";

export default function ContactCta() {

    const {width} = useDeviceWidthContext()

    useEffect(() => {
        anime({
            targets: '.contact-anim path',
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

    switch (true) {
        case width <= 600:
            return <ContactCtaMax600/>
        case width <= 1024:
            return <ContactCtaMax1024/>
        case width > 1024:
            return <ContactCtaMin1024/>
    }

}