
import {ChevronDownIcon, ChevronUpIcon, ArrowPathIcon} from '@heroicons/react/24/outline'

import styles from '@/styles/buycrypto.module.css'
import { useContext } from 'react'
import { SimplexContext } from '@/context/SimplexContext'

const SelectorButton = ({loading, currency}) => {

  const { handleSelection, active } = useContext(SimplexContext)
  
  const onSelection = (event) => {
    event.preventDefault()
    if (active !== currency) 
      handleSelection(currency)
    else
      handleSelection(null)
  }

  return (
    <button className={ styles['simplex__selector'] } onClick={onSelection}>
    {
        loading ?
        <ArrowPathIcon className={ styles['rotate'] }/> :
        (active === currency) ?
            <ChevronUpIcon /> :
            <ChevronDownIcon />
    }
    </button>
  )
}

export default SelectorButton
