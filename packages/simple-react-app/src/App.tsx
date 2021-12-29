import React, { useState } from 'react';
import logo from './logo.svg'
import './App.css';
import {
    QueryPayload
} from '@ws/simple-node-server/server'

function App() {
    const [msg, setMsg] = useState<string>()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {msg}
                </p>
             
                <button onClick={() => {

                    fetch("http://localhost:3001/data")
                        .then(res => res.json())
                        .then((data: QueryPayload) => setMsg(data.foo))
                        .catch(err => console.error(err.message)
                        )
                }}>Click me - get data</button>
                <button onClick={() => {

                    setMsg("--------")
                }}>reset</button>
            </header>
        </div>
    );
}

export default App;
