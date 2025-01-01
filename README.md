# Chain Connect

## Overview
The **Chain connect** is a decentralized messaging platform built on Ethereum. It leverages smart contracts to enable users to send and record messages on the blockchain, ensuring transparency and immutability.

This project combines Ethereum smart contract functionality with a modern frontend framework, Next.js, for seamless interaction and scalability.

## Features
- **Decentralized Messaging**: Messages are stored on the blockchain.
- **Transparent Logs**: Every message includes the sender's address, ensuring accountability.
- **Event-Driven Architecture**: Utilizes Solidity events for efficient message handling.

## Technologies Used
### Backend
- **Solidity**: Smart contract development.
- **Hardhat or Foundry**: Development and testing framework.

### Frontend
- **Next.js**: React-based frontend framework for fast, server-side rendering and static site generation.
- **JavaScript/TypeScript**: For frontend development.

### DevOps
- **GitHub Actions**: CI/CD workflows.
- **Environment Variables**: `.env` for managing secrets and configuration.

## Smart Contract
The core contract, `Chat.sol`, is simple yet powerful:

### Contract Summary
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Chat {
    event Message(address indexed sender, string message);

    function sendMessage(string memory message) public {
        emit Message(msg.sender, message);
    }
}
```
- **Event**: `Message` logs the sender's address and the message.
- **Function**: `sendMessage` emits the event.

## Project Structure
```
chain connect - contracts/
├── src/
│   └── Chat.sol          # Smart contract
├── test/
│   └── Chat.t.sol        # Tests for the smart contract
├── script/
│   └── ChatMessage.s.sol # Deployment script
├── .github/workflows/    # CI/CD workflows
├── foundry.toml          # Foundry configuration
├── .gitignore            # Ignored files
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites
- **Node.js**: v16+
- **npm** or **yarn**
- **Foundry**: Solidity development framework

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/erc4337-nextjs-chat-app.git
   cd erc4337-nextjs-chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add required variables (e.g., blockchain provider URL, private keys).

4. Compile the smart contracts:
   ```bash
   forge build
   ```

### Running the Application
1. Deploy the contract:
   ```bash
   forge script script/ChatMessage.s.sol --broadcast
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Testing
Run the smart contract tests:
```bash
forge test
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes with clear messages.
4. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments
- **Ethereum Foundation**: For supporting decentralized technologies.
- **OpenZeppelin**: For Solidity utilities and patterns.
- **Foundry**: For streamlining smart contract development.


