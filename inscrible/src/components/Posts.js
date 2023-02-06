import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { useState, useEffect } from "react";
import {FloatButton} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import NewPost from './NewPost'
import { Link } from "react-router-dom";

import Upload from "../artifacts/contracts/Upload.sol/Upload.json";//fetching abi
import { ethers } from "ethers";

const Posts = () =>{

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [newPostOpen, setNewPostOpen] = useState(false);

    // useEffect(() => {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    //     const loadProvider = async () => {
    //       if (provider) {
    //         window.ethereum.on("chainChanged", () => {
    //           window.location.reload();
    //         });
    
    //         window.ethereum.on("accountsChanged", () => {
    //           window.location.reload();
    //         });
    //         await provider.send("eth_requestAccounts", []);
    //         const signer = provider.getSigner();
    //         const address = await signer.getAddress();
    //         setAccount(address);
    //         let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    
    //         const contract = new ethers.Contract(
    //           contractAddress,
    //           Upload.abi,
    //           signer
    //         );
    //         console.log(contract);  ///-----------------------------------
    //         setContract(contract);
    //         setProvider(provider);
    //       } else {
    //         console.error("Metamask is not installed");//can give a alert instead
    //       }
    //     };
    //     provider && loadProvider();//checking if provider and then running function defined above
    //   }, []);

    //   const addPost = ()=>{
    //     <NewPost
    //     account={account}
    //     provider={provider}
    //     contract={contract}></NewPost>
    //   }

    return (
        <div className="main-container">
            <div className="posts-container">
                <div className="single-post-container">

                    <span className="account-name">{account}</span>
                    <div className="image-container">
                        <img src="./Images/raining.jpg" alt="Couldn't Load Post" className="post-image"/>
                    </div>
                    <div className="discription">
                        <span className="discription-text">this is post discription</span>
                    </div>

                </div>
            </div>
            <Link to={'NewPost'}>
                <FloatButton icon={<PlusOutlined />} tooltip='New Post' size='large'/>
            </Link>
        </div>
    )
}

export default Posts;