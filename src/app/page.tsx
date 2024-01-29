"use client"
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkHistory from '@/components/WorkHistory';
import {workHistory as history} from '@/workHistory';
import AnimatedBackground from '@/components/AnimatedBackground';
import {useEffect, useRef, useState} from 'react';
import anime from 'animejs';

export default function Home() {
    const [position, setPosition] = useState(1);
    const rightAnimationRef = useRef()
    const leftAnimationRef = useRef()

    useEffect(() => {
        rightAnimationRef.current = anime({
            targets: '.hero',
            translateX: position * 800,
            duration: 1000,
            autoplay: false
        })
        leftAnimationRef.current = anime({
            targets: '.hero',
            translateX: position * -800,
            duration: 1000,
            autoplay: false
        })

    })


    const leftClick = () => {
        if(position === 0) {
            return
        }
        setPosition(position - 1)
        leftAnimationRef.current.play();
        console.log("position", position)
    }

    const rightClick = () => {
        if(position === 2) {
            return
        }
        setPosition(position + 1 )
        rightAnimationRef.current.play();
        console.log("position", position)
    }


  return (
    <main>
            <Hero/>
            <AnimatedBackground/>
            {false && <Header/>}

    </main>
  )
}
