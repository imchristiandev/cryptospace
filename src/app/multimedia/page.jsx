'use client'
import React, { useEffect, useState } from 'react';

import styles from '../../styles/page.module.css';
import { FrontPage } from '@/components/multimedia/FrontPage';
import { StatusPage } from '@/components/multimedia/StatusPage';

async function buscarNfts(owner) {
  const collection = process.env.COLLECTION;
  const api_rarible = process.env.API_RARIBLE;
  const blockchain = process.env.BLOCKCHAIN;
  const api_rarible_key = process.env.API_RARIBLE_KEY;
  let arrayItems = [];
  let ownerships = [];
  let myHeaders = new Headers();
  myHeaders.append("X-API-KEY", api_rarible_key);
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "filter": {
      "blockchains": [blockchain],
      "deleted": false,
      "owners": [`${blockchain}:${owner}`],
      "collections": [collection]
    }
  });

  var requestOptionsPOST = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  var requestOptionsGET = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`${api_rarible}/ownerships/search`, requestOptionsPOST);
    const result = await response.json();
    ownerships = result.ownerships;
    await Promise.all(ownerships.map(async (e) => {
      const itemResponse = await fetch(`${api_rarible}/items/${collection}:${e.tokenId}`, requestOptionsGET);
      const itemResult = await itemResponse.json();
      arrayItems.push({
        id: itemResult.id,
        blockchain: itemResult.blockchain,
        collection: itemResult.collection,
        contract: itemResult.contract,
        tokenId: itemResult.tokenId,
        name: itemResult.meta.name,
        description: itemResult.meta.description,
        preview: itemResult.meta.content[3].url,
      });
    }));
  } catch (error) {
    console.log('error', error);
  }
  return arrayItems;
}

export default function Multimedia() {
  const [wallet, setWallet] = useState("");
  const [nfts, setNfts] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const checkMetamask = () => {
      if (typeof window.ethereum !== 'undefined') {
        const ethereum = window.ethereum;
        ethereum.on('accountsChanged', (newAccounts) => {
          if (newAccounts.length > 0) {
            accountHandling(newAccounts[0]);
          } else {
            setStatus(500);// Not Connected
          }
        });
      } else {
        setStatus(404); // No installed
      }
    };
    checkMetamask();
  }, []);

  useEffect(() => {
    loginMetamask()
  }, []);

  const loginMetamask = async() => {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      accountHandling(account);
    } catch (error) {
      console.log(error)
    }
  }

  const accountHandling = async(account) => {
    const items = await buscarNfts(account);
    if (items.length > 0) {
      setNfts(items);
      setWallet(account);
      setStatus(100);
    }
    else {
      setStatus(401) // No nfts
    }
  }

  return (
    <>
      {status === 100 ?
        <div className={styles.main}>
          <FrontPage wallet={wallet} objects={nfts} />
        </div>
      :
        <StatusPage status={ status } />
      }
    </>
  )
}
