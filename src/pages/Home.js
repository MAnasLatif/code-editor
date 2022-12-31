import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate()
    const [roomID, setroomID] = useState('')
    const [userName, setuserName] = useState('')

    const createNewRoom = (e) => {
        e.preventDefault()
        const id = uuidV4()
        setroomID(id)
        toast.success("Created a new room");
    }

    const joinRoom = () => {
        if (!roomID || !userName) {
            toast.error('Room ID & username is required')
            return
        }

        // Redirect 
        navigate(`/editor/${roomID}`, {
            state: {
                userName
            }
        })
    }

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className='logo' src="/code-sync.png" alt="code-sync-logo" />
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input value={roomID} onChange={(e) => setroomID(e.target.value)} type="text" className='inputBox' placeholder='ROOM ID' />
                    <input value={userName} onChange={(e) => setuserName(e.target.value)} type="text" className="inputBox" placeholder='USERNAME' />
                    <button className="btn joinBtn" onClick={joinRoom}>Join</button>
                    <span className='createTnfo'>
                        If you don't have an invite then create &nbsp;
                        <a onClick={createNewRoom} href="/" className='createNewBtn'>new room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with ❤️ by &nbsp;
                    <a href="https://m.anaslatif.com">M Anas Latif</a>
                </h4>
            </footer>
        </div>
    )
}