"use client"

import { useEffect, useRef, useState } from "react";
import { Log } from "viem";
import { usePublicClient, useWatchContractEvent } from "wagmi";
import ChatMessage from "./ChatMessage";
import ScrollableBox from "./ScrollabeBox";

const chatterjson = require("../../chatter-contracts/out/Chatter.sol/Chatter.json");
const chatterAddress = "0xf93bE6D813d8ea70Cba9ffb64749cC4b465b9c5b";

export default function MessageHistory() {
    const [messages, setMessages] = useState<Log[]>([]);

    const publicClient = usePublicClient();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                if (publicClient) {
                    const logs = await publicClient.getContractEvents({
                        address: chatterAddress,
                        abi: chatterjson.abi,
                        eventName: "Message",
                        fromBlock: BigInt(0),
                        toBlock: "latest",
                    });
                    setMessages(logs);
                }
            } catch (error) {
                console.error("Error fetching contract events", error);
            }
        };

        fetchMessages();
    }, [publicClient]);

    useWatchContractEvent({
        address: chatterAddress,
        abi: chatterjson.abi,
        eventName: "Message",
        onLogs(logs: Log[]) {
            setMessages((oldMessages) => {
                return oldMessages ? [...oldMessages, ...logs] : logs;
            });
        },
    });

    return (
        <ScrollableBox className='flex flex-col py-5 px-2 w-full h-full no-scrollbar'>
            {messages?.map((logmsg, i) => (
                <ChatMessage key={i} address={logmsg.args.sender} message={logmsg.args.message} />
            ))}
        </ScrollableBox>)
}