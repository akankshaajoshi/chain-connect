import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    sepolia
} from 'wagmi/chains';


const anvil: Chain = {
    id: 31337,
    name: "Anvil local",
    // network: "anvil",
    nativeCurrency: {
        decimals: 18,
        name: "tETH",
        symbol: "tETH"
    },
    rpcUrls: {
        public: { http: ["http://localhost:8545"] },
        default: { http: ["http://localhost:8545"] },
    },
    testnet: true
}
export const config = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: 'YOUR_PROJECT_ID',
    chains: [
        // anvil,
        sepolia,
    ],
    ssr: true,
});