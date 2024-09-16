"use client"
import Hero from '@/components/Hero';
// import AnimatedBackground from '@/components/AnimatedBackground';
import {DeviceWidthContextProvider} from "@/context/DeviceWidthContext";

export default function Home() {
    return (
        <main>
            <DeviceWidthContextProvider>
                <Hero/>
            </DeviceWidthContextProvider>
            {/*{false && <AnimatedBackground/>}*/}

        </main>
    )
}
