import React from 'react'
import JazziconImage from './JazzIconImage'
import { useAccount } from 'wagmi'

const ChatMessage = ({ address, message }: { address: string, message: string }) => {
    const { address: connectedAddress } = useAccount();

    return (
        <div
            className={[
                "flex items-center m-2",
                address === connectedAddress ? "justify-end" : "justify-start"
            ].join(" ")}
        >
            <JazziconImage
                address={address}
                className={[
                    "w-6 h-6 rounded-full mx-2",
                    address === connectedAddress ? "order-2" : ""
                ].join(" ")}
            />
            <div
                className={[
                    "px-4 py-2 rounded-lg",
                    address === connectedAddress
                        ? "rounded-br-none bg-blue-700 text-white"
                        : "rounded-bl-none bg-gray-300 text-gray-700"
                ].join(" ")}
            >
                {message}
            </div>
        </div>
    );

}

export default ChatMessage