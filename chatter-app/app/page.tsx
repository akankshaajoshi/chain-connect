"use client";

import MessageHistory from "@/components/MessageHistory";
import SendMessage from "@/components/SendMessage";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const chatterjson = require("../../chatter-contracts/out/Chatter.sol/Chatter.json");
const chatterAddress = "0xf93bE6D813d8ea70Cba9ffb64749cC4b465b9c5b";

export default function Home() {

  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center justify-between container max-w-xl mx-auto py-3">
      <ConnectButton />
      <MessageHistory />
      <SendMessage />
    </div>
  );
}
