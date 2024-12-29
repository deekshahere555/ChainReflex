const rockPaperScissorsABI = [
	{
		"inputs": [],
		"name": "claimInitialTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "determineWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_memeCoinAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "GameReset",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "GameResult",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "joinGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_move",
				"type": "uint8"
			}
		],
		"name": "makeMove",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum RockPaperScissors.Move",
				"name": "move",
				"type": "uint8"
			}
		],
		"name": "MoveMade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "PlayerJoined",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "resetGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ENTRY_FEE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "memeCoin",
		"outputs": [
			{
				"internalType": "contract IMemeCoin",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "player1",
		"outputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "enum RockPaperScissors.Move",
				"name": "move",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "wager",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "player2",
		"outputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "enum RockPaperScissors.Move",
				"name": "move",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "wager",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_AMOUNT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const rockPaperScissorsAddress = "0xd536154E364F238CB63bc6d91d6be30060084E82";

const memeCoinABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_initialSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const memeCoinAddress = "0x4EA90E9Ee0665D804C2D8d0b87E1FC69af7A0971";

let web3;
let rockPaperScissorsContract;
let memeCoinContract;

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];

        // Initialize both contracts
        rockPaperScissorsContract = new web3.eth.Contract(rockPaperScissorsABI, rockPaperScissorsAddress);
        memeCoinContract = new web3.eth.Contract(memeCoinABI, memeCoinAddress);

        document.getElementById("claimTokens").onclick = claimInitialTokens;
        document.getElementById("joinGame").onclick = joinGame;
        document.getElementById("determineWinner").onclick = determineWinner;
        document.getElementById("resetGame").onclick = resetGame;

        updateStatus("Ready to play!");
		updateBalance();
		
		await getPlayers();
    } else {
        updateStatus("MetaMask not detected!");
    }
};

function updateStatus(message) {
    document.getElementById("status").innerText = message;
}

async function claimInitialTokens() {
    try {
        await rockPaperScissorsContract.methods.claimInitialTokens().send({ from: web3.eth.defaultAccount });
        updateStatus("Initial tokens claimed!");
		await updateBalance();
    } catch (error) {
        console.error(error);
        updateStatus("Error claiming tokens.");
    }
}

async function updateBalance() {
    try {
        const balance = await memeCoinContract.methods.balanceOf(web3.eth.defaultAccount).call();
        const formattedBalance = web3.utils.fromWei(balance, "ether");
		console.log(formattedBalance)
        document.getElementById("balance").innerText = `Balance: ${formattedBalance} MEME`;
    } catch (error) {
        console.error(error);
        updateStatus("Error fetching balance.");
    }
}

async function joinGame() {
    try {
        const entryFee = web3.utils.toWei("10", "ether");

        // Approve the RockPaperScissors contract to spend MemeCoins on your behalf
        await memeCoinContract.methods.approve(rockPaperScissorsAddress, entryFee).send({ from: web3.eth.defaultAccount });
        updateStatus("MemeCoin approval granted!");

        // Join the game
        await rockPaperScissorsContract.methods.joinGame().send({ from: web3.eth.defaultAccount });
        updateStatus("Joined the game!");
		await updateBalance();
		await getPlayers();
    } catch (error) {
        console.error(error);
        updateStatus("Error joining the game.");
    }
}

async function makeMove(move) {
    try {
        const moveFee = web3.utils.toWei("10", "ether");

        // Approve the RockPaperScissors contract to spend MemeCoins on your behalf
        await memeCoinContract.methods.approve(rockPaperScissorsAddress, moveFee).send({ from: web3.eth.defaultAccount });
        updateStatus("MemeCoin approval granted for move!");

        // Make the move
        await rockPaperScissorsContract.methods.makeMove(move).send({ from: web3.eth.defaultAccount });
        updateStatus(`Move ${["None", "Rock", "Paper", "Scissors"][move]} made!`);
		await updateBalance();
    } catch (error) {
        console.error(error);
        updateStatus("Error making a move.");
    }
}

async function determineWinner() {
    try {
        await rockPaperScissorsContract.methods.determineWinner().send({ from: web3.eth.defaultAccount });
        updateStatus("Winner determined!");
		await updateBalance();
    } catch (error) {
        console.error(error);
        updateStatus("Error determining winner.");
		
    }
}

async function resetGame() {
    try {
        await rockPaperScissorsContract.methods.resetGame().send({ from: web3.eth.defaultAccount });
        updateStatus("Game reset!");
		await updateBalance();
    } catch (error) {
        console.error(error);
        updateStatus("Error resetting the game.");
    }
}

async function getPlayers() {
    try {
        const player1 = await rockPaperScissorsContract.methods.player1().call();
        const player2 = await rockPaperScissorsContract.methods.player2().call();

        document.getElementById("player1").innerText = player1.addr || "Waiting...";
        document.getElementById("player2").innerText = player2.addr || "Waiting...";
    } catch (error) {
        console.error(error);
        updateStatus("Error fetching players.");
    }
}

document.getElementById("refreshPlayers").onclick = getPlayers;
