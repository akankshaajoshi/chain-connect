import { useState } from "react";
import { useWriteContract } from "wagmi";

const chatterjson = require("../../chatter-contracts/out/Chatter.sol/Chatter.json");
const chatterAddress = "0xf93bE6D813d8ea70Cba9ffb64749cC4b465b9c5b";

export default function SendMessage() {
    const [message, setMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { writeContract } = useWriteContract();

    const sendMessage = () => {
        if (message && message.length > 0) {
            setIsLoading(true);
            writeContract({
                abi: chatterjson.abi,
                address: chatterAddress,
                functionName: "sendMessage",
                args: [message]
            }, {
                onSettled: () => {
                    setIsLoading(false);
                    setMessage("");
                }
            });
        }
    };

    return <div className="flex flex-row w-full space-between  pt-3 ">
        <input
            type="text"
            value={message}
            className="text-black w-full fw-[200px] rounded-l-md pt-1 bg-gray-300 p-1"
            onKeyDown={event => {
                if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
                    sendMessage();
                }
            }}
            onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-blue-500 rounded-r-md p-2" onClick={(e) => { e.preventDefault(); sendMessage(); }} type="button" disabled={isLoading}>
            💌
        </button>
    </div>
}