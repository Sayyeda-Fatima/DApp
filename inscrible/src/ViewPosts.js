import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './ViewPosts.css'
import './NewPost.css'
import './components/NavBar.css'
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";//fetching abi
import { ethers } from "ethers";


function ViewPosts() {

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
      
          const loadProvider = async () => {
            if (provider) {
              window.ethereum.on("chainChanged", () => {
                window.location.reload();
              });
      
              window.ethereum.on("accountsChanged", () => {
                window.location.reload();
              });
              await provider.send("eth_requestAccounts", []);
              const signer = provider.getSigner();
              const address = await signer.getAddress();
              setAccount(address);
              let contractAddress = "0xe0x5FbDB2315678afecb367f032d93F642f64180aa3";
      
              const contract = new ethers.Contract(
                contractAddress,
                Upload.abi,
                signer
              );
              // console.log(contract);  ///-----------------------------------
              setContract(contract);
              setProvider(provider);
            } else {
              console.error("Metamask is not installed");//can give a alert instead
            }
          };
          provider && loadProvider();//checking if provider and then running function defined above
          
        }, []);

    //everything inside return is called jsx---> means can write html and js both inside
    return (
      <>
        <NavBar />
        <Posts 
          account={account}
          provider={provider}
          contract={contract}
        />
        <NewPost 
          account={account}
          provider={provider}
          contract={contract}
        />
      </>
    );
  }
  
  export default ViewPosts;