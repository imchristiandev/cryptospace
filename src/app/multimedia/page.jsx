'use client'
import React, { useEffect, useState } from 'react';

import styles from '../../styles/page.module.css';
import { FrontPage } from '@/components/multimedia/FrontPage';
import { StatusPage } from '@/components/multimedia/StatusPage';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://test.cryptomex.online/',
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  },
});

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
    redirect: 'follow'
  };

  try {
    const response = await fetch(`${api_rarible}/ownerships/search`, requestOptionsPOST);
    const result = await response.json();
    ownerships = result.ownerships;
    await Promise.all(ownerships.map(async (e) => {
      const itemResponse = await fetch(`https://ipfs.io/ipfs/bafybeiek7nj76elf45il2mwgxsft2uzwuxrpafobyy2ecdgxh3yewfs6o4/${e.tokenId}.json`, requestOptionsGET);
      const itemResult = await itemResponse.json();
      const { edition, name } = itemResult;
      arrayItems.push({
        id: edition,
        blockchain: 'Ethereum',
        contract: '0xEe7f09d6444316EE3df063Fa43a5AD9D682a0ca2',
        tokenId: edition,
        name,
        preview: `https://ipfs.io/ipfs/bafybeiebjct5sqcehbe3someaclfam5jumjjrgebpfgn2iq54qqut6exay/${e.tokenId}.jpg`
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
    <ApolloProvider client={client}>
      {status === 100 ?
        <div className={styles.main}>
          <FrontPage wallet={wallet} objects={nfts} />
        </div>
      :
        <StatusPage status={ status } />
      }
    </ApolloProvider>
  )
}
