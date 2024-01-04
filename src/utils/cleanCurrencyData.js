
export const cleanCurrencyData = ( currency, data, callback ) => {
    if (currency === 'CRYPTO') {
      callback(
        data?.map((dataItem) => ({
          ticker: dataItem.ticker_symbol,
          currency: dataItem.networks[0]
        }))
      )
    } else {
      callback(
        data?.map((dataItem) => ({
            ticker: dataItem.ticker_symbol,
            min_amount: dataItem.min_amount,
            max_amount: dataItem.max_amount
          }
        ))
      )
    }
  }