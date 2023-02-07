import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";

const NewPost = ({account, provider, contract}) => {

    //To get discription text
    const [description, setDescription] = useState({
        descriptiontext: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;//to see which input field is being targeted

        const value = e.target.value;//to get value of targeted input

        setDescription({ ...description, [name]: value }) // Setting value in the varialbles
    }


    //to set name of file in The text showing choosen file
    const [filename, setFileName] = useState("No file chosen.")//to set data of discription under a post
    const [file, setFile] = useState(null);

    const retrieveFile = (e) => {
        const data = e.target.files[0]; //files array of files object
        // console.log(data);//--------------------------
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
          setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
      };

    return (

        <div className="new-post-interface">
            <label htmlFor="file-upload" className="choose">
                Choose Image
            </label>
            <input
                // disabled={!account}
                type="file"
                id="file-upload"
                name="data"
                onChange={retrieveFile}
            />
            <span className="textArea">Image: {filename}</span>
            <div className="description-text-container">
                <textarea name="descriptiontext" id="discription-text" rows="3" onChange={handleInput}></textarea>
            </div>
            <div className="upload-button">
                <input type="button" value="Upload" className="btn btn-primary" disabled={!file}/>
            </div>
        </div>

    )
}

export default NewPost;