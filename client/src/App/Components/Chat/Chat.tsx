import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCurrentUserQuery } from "../../redux/auth/auth";
import { ChatConitaner,MessageConiter,UserName,
    Message,ChatIntarface,SendMassageContainer,SendMassageInput,
    SendMassageBtn,ChatTitle} from "./Chat.styled";
export const Chat:React.FC = () => {
    const {data} = useCurrentUserQuery()
    const [messages,setMessages]:any = useState([])
    const [valueMessage,setValueMessage] = useState('')
    const [isConnected, setIsConnected] = useState(true);

    const setupWebSocket = () => {
        socket.current = new WebSocket('ws://localhost:3001');
        socket.current.onmessage = (event) => {
            const message: string = JSON.parse(event.data);
            setMessages((prev: any) => [...prev, message]);
        };
        setIsConnected(false)
    };
    const scroll = useRef<HTMLDivElement | null>(null)
    const socket = useRef<WebSocket | undefined>()
    useEffect(() => {
        if (scroll.current) {
          scroll.current.scrollTop = scroll.current.scrollHeight;
        }
      }, [messages]);
    const sendMessage = () => {
        if (socket.current && valueMessage && socket.current.readyState === WebSocket.OPEN) {
            const message = {
                messages: valueMessage,
            };
            socket.current.send(JSON.stringify(message));
            setValueMessage(''); 
        }
    }
      

    return(
        <ChatConitaner>
            <ChatTitle>Write to new friends ;)</ChatTitle>
            <ChatIntarface  ref={scroll}>
                {messages.map((e:string,i:number) => {
                    return(
                        <MessageConiter key={i+1}>
                        <UserName>{data.user.name}</UserName>
                        <Message>{e}</Message>
                    </MessageConiter>
                    )
                })}
            </ChatIntarface>
            <SendMassageContainer>
                <SendMassageInput onChange={(e) => setValueMessage(e.target.value)} value={valueMessage}></SendMassageInput>
           {isConnected ? <SendMassageBtn onClick={setupWebSocket}  type="button">Connect</SendMassageBtn>  : <SendMassageBtn onClick={sendMessage}  type="button">Send</SendMassageBtn> }   
            </SendMassageContainer>
        </ChatConitaner>
    )
}