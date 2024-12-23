# Chain Reflex

A decentralized Rock Paper Scissors game built with Solidity, Web3.js, and an ERC-20 token called MemeCoin. Players can join, make moves, and win rewards in MemeCoins. The game is interactive and styled for an engaging experience.

---

## Features

- **Claim Initial Tokens**: Players can claim 100 MemeCoins for free.
- **Join Game**: Two players can join the game by paying an entry fee in MemeCoins.
- **Make a Move**: Players can choose Rock, Paper, or Scissors to compete.
- **Determine Winner**: The smart contract determines the winner and transfers rewards.
- **Reset Game**: Players can reset the game for a fresh start.
- **Live Updates**: Player and balance information can be refreshed dynamically.

---

## Smart Contract Details

- **RockPaperScissors Contract**: Manages the gameplay, player states, and rewards.
- **MemeCoin Contract**: Handles the ERC-20 token used for payments and rewards.

### Contract Features

1. Players join by paying an entry fee in MemeCoins.
2. The game resolves based on the standard Rock-Paper-Scissors rules.
3. Winner receives the pot and additional rewards.

---

## Contract Details

- **Contract Address**: `0xA16748E85bE15EcF751f8936016CF75ec5a0a00E`
- **Network**: Neo X Testnet T4
## Deployment

- **Contract Address**: [View on Explorer](https://xt4scan.ngd.network/address/0xA16748E85bE15EcF751f8936016CF75ec5a0a00E)
- **Coin Used**: GAS

## User Interface

The frontend is designed for simplicity and engagement:

- **Responsive Design**: Fully responsive, optimized for both desktop and mobile.
- **Custom Buttons**: Interactive buttons styled with vibrant colors and hover effects.
- **Game Moves**: Rock, Paper, Scissors moves are represented with images.
- **Live Player Tracking**: View player addresses and refresh player status dynamically.

### Key Sections

1. **Balance**: Displays the user's MemeCoin balance.
2. **Players Joined**: Shows current players in the game with a refresh button.
3. **Game Controls**: Includes buttons for joining, making moves, determining the winner, and resetting the game.

---

## How It Works

1. **Claim Tokens**: Users can claim 100 MemeCoins to get started.
2. **Join Game**: Two players join by transferring an entry fee in MemeCoins.
3. **Make Moves**: Players select Rock, Paper, or Scissors.
4. **Determine Winner**: The contract evaluates the moves and transfers rewards.
5. **Reset Game**: Allows a fresh start for a new game.

---

## Technologies Used

- **Solidity**: For the smart contract logic.
- **HTML, CSS, JavaScript**: For the user interface.
- **ERC-20 Standard**: Used for MemeCoin.

---

## Game Rules

- **Rock beats Scissors**.
- **Scissors beat Paper**.
- **Paper beats Rock**.
- If both players choose the same move, the game is a draw, and their stakes are refunded.

---

## Screenshots

1. **Main Screen**: Interactive UI with live status updates.
2. **Game Moves**: Buttons with Rock, Paper, and Scissors images.
3. **Winner Declaration**: Displays the winner and updates the balance.