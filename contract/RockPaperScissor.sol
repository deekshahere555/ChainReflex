// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RockPaperScissors {
    enum Move { None, Rock, Paper, Scissors }
    struct Player {
        address addr;
        Move move;
        uint256 wager;
    }

    Player public player1;
    Player public player2;
    IERC20 public memeCoin;
    uint256 public constant ENTRY_FEE = 10 * 10**18; // Adjusted for a typical ERC-20 decimal place.
    uint256 public constant REWARD_AMOUNT = 10 * 10**18; // Reward for winning the game

    event PlayerJoined(address indexed player);
    event MoveMade(address indexed player, Move move);
    event GameResult(address indexed winner, uint256 amount);
    event GameReset();

    // Constructor: Initialize with MemeCoin contract address
    constructor(address _memeCoinAddress) {
        memeCoin = IERC20(_memeCoinAddress);
    }

    // Function to claim initial tokens (100 meme coins)
    function claimInitialTokens() external {
        uint256 initialAmount = 100 * 10**18; // 100 tokens (assuming 18 decimals)
        require(memeCoin.balanceOf(address(this)) >= initialAmount, "Not enough tokens in contract");
        require(memeCoin.transfer(msg.sender, initialAmount), "Token transfer failed");
    }

    function joinGame() external {
        require(player1.addr == address(0) || player2.addr == address(0), "Game is full");
        require(memeCoin.transferFrom(msg.sender, address(this), ENTRY_FEE), "Failed to transfer entry fee");

        if (player1.addr == address(0)) {
            player1 = Player(msg.sender, Move.None, ENTRY_FEE);
            emit PlayerJoined(msg.sender);
        } else {
            player2 = Player(msg.sender, Move.None, ENTRY_FEE);
            emit PlayerJoined(msg.sender);
        }
    }

    function makeMove(uint8 _move) external {
        require(_move >= 1 && _move <= 3, "Invalid move");
        require(msg.sender == player1.addr || msg.sender == player2.addr, "Not a player");
        require(memeCoin.transferFrom(msg.sender, address(this), ENTRY_FEE), "Failed to transfer move fee");

        Player storage player = msg.sender == player1.addr ? player1 : player2;
        require(player.move == Move.None, "Move already made");
        player.move = Move(_move);
        emit MoveMade(msg.sender, Move(_move));
    }

    function determineWinner() external {
        require(player1.move != Move.None && player2.move != Move.None, "Both players must make a move");

        uint256 totalPot = player1.wager + player2.wager;
        address winner;

        if (player1.move == player2.move) {
            memeCoin.transfer(player1.addr, player1.wager);
            memeCoin.transfer(player2.addr, player2.wager);
        } else {
            if ((player1.move == Move.Rock && player2.move == Move.Scissors) ||
                (player1.move == Move.Paper && player2.move == Move.Rock) ||
                (player1.move == Move.Scissors && player2.move == Move.Paper)) {
                winner = player1.addr;
            } else {
                winner = player2.addr;
            }
            memeCoin.transfer(winner, totalPot + REWARD_AMOUNT);
            emit GameResult(winner, totalPot + REWARD_AMOUNT);
        }
    }

    function resetGame() external {
        require(msg.sender == player1.addr || msg.sender == player2.addr, "Only players can reset the game");
        delete player1;
        delete player2;
        emit GameReset();
    }
}
