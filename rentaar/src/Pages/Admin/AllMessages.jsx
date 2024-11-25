import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Admin/NavBar'
import axios from 'axios'

const AllMessages = () => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchingMessages = async () => {
        try {
            const response = await axios.get('http://localhost:3000/admin/messages')
            setMessages(response.data.messages)
        } catch (err) {
            console.log(err)
        }
    }

    const handleMessageReply = async (_id) => {
        try {
            const filteredMessage = messages.filter(message => message._id === _id)
            setMessage(filteredMessage[0])
            const reply = prompt('Enter Your Reply to the user')
            setLoading(true)
            const response = await axios.post('http://localhost:3000/admin/message-reply', {
                message,
                reply
            })
            alert(response.data.message)
            

        } catch (err) {
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchingMessages()
    })

    return (
        <div className='flex gap-5'>
            <NavBar />
            <div className=' flex flex-col gap-10 py-10'>
                <h1 className='text-xl font-light'>User Messages</h1>
                <div className='px-6 py-3 grid grid-cols-2 gap-5 '>
                    {messages.map(message => (
                        <div className='rounded-lg shadow-xl shadow-zinc-300 grid grid-cols-2 gap-10 w-full px-6 py-3'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-lg font-light'>User Info</h1>
                                <hr />
                                <p><b>Name - </b>{message.name}</p>
                                <p><b>Email - </b>{message.email}</p>
                                <p><b>Phone - </b>{message.phone}</p>
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <p><b>Message - </b>{message.message}</p>
                                <button className='px-4 py-1 bg-purple-500 rounded text-zinc-200'
                                disabled={loading} 
                                onClick={() => handleMessageReply(message._id)} >{loading?"Sending":"Reply"}</button>
                            </div>
                        </div>
                    ))

                    }
                </div>

            </div>
        </div>
    )
}

export default AllMessages