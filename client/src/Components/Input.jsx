import React, { useState } from 'react';
import {sendUrl} from '../Service/api';

const Input = () => {
    const [Text, setText] = useState('');
    const [btnText, setbtnText] = useState('Short');
    const url = window.location.host;

    const getText = (e) => {
        setText(e.target.value);
    }

    const mainFunction = () => {
        let arr = [];
        let a;
        for(a = 1; a <= 8; a++){
            let Numeric = Math.floor(Math.random() * (10) + parseFloat(48));
            let sAlpha = Math.floor(Math.random() * (26) + parseFloat(65));
            let cAlpha = Math.floor(Math.random() * (26) + parseFloat(97));
            let smallArray = [Numeric, sAlpha, cAlpha];
            let random = Math.floor(Math.random() * smallArray.length);
            let singleWord = String.fromCharCode(smallArray[random]);
            let finalArray = arr.push(singleWord);
            finalArray += finalArray;
        };
        
        let finalVal = arr.join('');
        return finalVal;
    };

    const sendLink = async () => {
        if(btnText === 'Short'){
            const urlData = {
                url: Text,
                code: mainFunction()
            };
            sendUrl(urlData);
            setbtnText('Copy');
            setText(`${url}/${urlData.code}`);
        }else if(btnText === 'Copy'){
            let inputElm = document.createElement('input');
            inputElm.setAttribute('value', Text);
            document.body.appendChild(inputElm);
            inputElm.select();
            document.execCommand('copy');
            inputElm.parentNode.removeChild(inputElm);
            setbtnText('Copied..');
        }
    }

    const refreshWin = () => {
        setText('');
        setbtnText('Short');
    }

    return (
        <div>
            <div className="input-container">
                <div className="input-box">
                    <input type="url" id="inputBox" value={Text} onChange={getText} />
                    <button onClick={sendLink} id="shortBtn">{btnText}</button>
                    <i className="fas fa-redo-alt" id="refreshIcon" onClick={refreshWin}></i>
                </div>
                <p id="infoTxt">Now, Get your link in just one click...</p>
            </div>
        </div>
    )
}

export default Input;