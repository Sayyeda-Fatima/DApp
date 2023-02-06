import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { useState } from "react";

const NewPost = (account, provider, contract)=>{

    const [filename, setFileName] = useState("No file chosen.")
    const [description, setDescription] = useState({
        descriptiontext: "",
    });

    const handleInput = (e)=>{
        const name = e.target.name;//to see which input field is being targeted

        const value = e.target.value;//to get value of targeted input

        setDescription({...description, [name] : value}) // Setting value in the varialbles
    }

    const retrieveFile = (e) => {
        const data = e.target.files[0]; //files array of files object
        setFileName(e.target.files[0].name);
    }

    return(
        <div className="background-of-interface">
            <div className="new-post-interface">
                <div className="choose-image">
                    <input type="file" name="choose" id="choose" className="file-btn" onChange={retrieveFile} />
                </div>
                <div className="image-preview">
                    <img src={filename} alt="Couldn't show image" className="new-img"/>
                </div>
                <div className="description-text-container">
                    <textarea name="descriptiontext" id="discription-text" cols="30" rows="5" onChange={handleInput}></textarea>
                </div>
                <div className="upload-button">
                    <input type="button" value="Upload" className="btn btn-outline-success" />
                </div>
            </div>
        </div>
    )
}

export default NewPost;