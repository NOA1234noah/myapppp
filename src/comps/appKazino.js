import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function AppKazino() {
    const [ranNum, setRand] = useState();
    const [coinNum, setCoin] = useState(5);
    const [message, setMessage] = useState(5);
    const roll = () => {
        let rnd = Math.random()*6;
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
        }
    }
    return (
        <div className='text-center'><h1 className='text-danger'>Kazino</h1>
            <p>your coins: {coinNum}</p>
            <p>your num random {ranNum}</p>
              <img src={`./dice_images/dice${ranNum}.jpg`} /><br/>
              <strong className={(message=="win")?"text-success":"text-danger"}>{message}</strong>
          <br/>
            <button className='btn btn-danger p-3 rounded-5' onClick={roll}>  Roll  </button>
        </div>
    )
}
