import React, {createContext, useContext, useState, useEffect} from "react"

type Props = {
    children: React.ReactNode
}
type Context = {
    width: number
    setWidth: (width: number) => void
}

// Just find-replace "DeviceWidthContext" with whatever context name you like. (ie. DankContext)
const DeviceWidthContext = createContext<Context>({width: 0, setWidth: (width: number) => {}})


export const DeviceWidthContextProvider = ({children}: Props) => {
    const [width, setWidth] = useState(20)
    return (
        <DeviceWidthContext.Provider value={{width, setWidth}}>
            {children}
        </DeviceWidthContext.Provider>
    );
}

export const useDeviceWidthContext = () => {
    const {width, setWidth} = useContext(DeviceWidthContext)

    if (!width)
        throw new Error("DeviceWidthContext must be called from within the DeviceWidthContextProvider")

    return {width, setWidth}
}