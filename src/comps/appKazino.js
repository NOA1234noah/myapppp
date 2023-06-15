import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function AppKazino() {
    const [ranNum, setRand] = useState(1);
    const [coinNum, setCoin] = useState(5);
    const [message, setMessage] = useState();
    useEffect(() => {
        if (localStorage["coins"]) {
            setCoin(Number(localStorage["coins"]))
        }
        else {
            localStorage.setItem("coins", 5);
        }
    }, [])
    const roll = () => {
        let rnd = Math.random() * 6;
        let rand = Math.ceil(rnd);

        setRand(rand);
        if (rand == 5 || rand == 6) {
            setCoin(coinNum + 2);
            setMessage("win");
        }
        else {
            setCoin(coinNum - 1);
            setMessage("try again");
        }
        if (coinNum == 0) {
            alert("sorry!!\n no enught money");
            setCoin(5);
            setMessage("");
        }
        localStorage.setItem("coins", coinNum);
    }
    return (
        <div className='text-center'><h1 className='text-danger'>Kazino</h1>
            <h2>your coins: {coinNum}</h2>
            <h2>your num random {ranNum}</h2>
            <img src={`./dice_images/dice${ranNum}.jpg`} /><br />
            <h2 className={(message == "win") ? "text-success" : "text-danger"}>{message}</h2>
            <br />
            <button className='btn btn-danger p-3 rounded-5' onClick={roll}>  Roll  </button>
        </div>
    )
}
