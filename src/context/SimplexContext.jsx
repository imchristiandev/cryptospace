"use client"

import { createContext, useState } from "react"

const SimplexContext = createContext()

const SimplexProvider = ({ children }) => {
    const [active, setActive] = useState(null)
    const [crypto, setCrypto] = useState('Select your Cryptocurrency')
    const [cryptoTicker, setCryptoTicker] = useState('UND')
    const [fiatTicker, setFiatTicker] = useState('CUR')

    const handleSelection = (key) => {
        switch (key) {
            case 'CRYPTO':
                setActive('CRYPTO')
                break;

            case 'FIAT':
                setActive('FIAT')
                break;
        
            default:
                setActive(null)
                break;
        }
    }

    const data = {
        active,
        crypto,
        cryptoTicker,
        fiatTicker,
    }

    const methods = {
        handleSelection,
        setCrypto,
        setCryptoTicker,
        setFiatTicker
    }

    return (
        <SimplexContext.Provider value={{ 
            ...data,
            ...methods
        }}>
            { children }
        </SimplexContext.Provider>
    )
}

export {
    SimplexContext,
    SimplexProvider
}