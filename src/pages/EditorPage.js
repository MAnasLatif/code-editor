import React, { useState } from 'react'
import Client from '../components/Client'
import Editor from '../components/Editor'

export default function EditorPage() {
    const [clients, setClients] = useState([
        { socketId: 1, username: "Rakesh K" },
        { socketId: 2, username: "Anas Latif" }
    ])

    return (
        <div className='mainWrap'>
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img
                            className="logoImage"
                            src="/code-sync.png"
                            alt="logo"
                        />
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {
                            clients.map(client => {
                                return (
                                    <Client username={client.username} key={client.socketId} />
                                )
                            })
                        }
                    </div>
                </div>
                <button className='btn copyBtn'>
                    Copy ROOM ID
                </button>
                <button className='btn leaveBtn'>
                    Leave
                </button>
            </div>
            <div className="editorWrap">
                <Editor />
            </div>
        </div>
    )
}