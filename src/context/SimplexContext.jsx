"use client";

import { createContext, useEffect, useState } from "react";

const SimplexContext = createContext();

const SimplexProvider = ({ children }) => {
  const [active, setActive] = useState(null);
  const [crypto, setCrypto] = useState("Select your Cryptocurrency")
  const [cryptoTicker, setCryptoTicker] = useState("UND")
  const [fiatTicker, setFiatTicker] = useState("CUR")
  const [fiatValue, setFiatValue] = useState(0)

  useEffect(() => {
    console.log('Fiat Value', fiatValue)
  }, [fiatValue]);
//* transactionValue is the value of the transaction

  const handleSelection = (key) => {
    switch (key) {
      case "CRYPTO":
        setActive("CRYPTO");
        break;

      case "FIAT":
        setActive("FIAT");
        break;

      default:
        setActive(null);
        break;
    }
  };

  const data = {
    active,
    crypto,
    cryptoTicker,
    fiatTicker,
    fiatValue
  };

  const methods = {
    handleSelection,
    setActive,
    setCrypto,
    setCryptoTicker,
    setFiatTicker,
    setFiatValue
  };

  return (
    <SimplexContext.Provider
      value={{
        ...data,
        ...methods,
      }}
    >
      {children}
    </SimplexContext.Provider>
  );
};

export { SimplexContext, SimplexProvider };
