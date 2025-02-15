import { createConfig, http } from "wagmi";
import { bsc } from "wagmi/chains";
import { injected, metaMask, walletConnect } from "wagmi/connectors";

const projectId = "45a029651f37ec8e01c2e486810e6f3e";
export const USDTContractAdress = "0x55d398326f99059fF775485246999027B3197955";

export const config = createConfig({
  chains: [bsc],
  connectors: [injected(), walletConnect({ projectId }), metaMask()],

  transports: {
    // [sepolia.id]: http(),
    [bsc.id]: http(),
  },
});

export const ABI = [
  {
    type: "constructor",
    inputs: [
      { name: "_usdtAddress", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "OwnableInvalidOwner",
    type: "error",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    name: "OwnableUnauthorizedAccount",
    type: "error",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  {
    name: "SafeERC20FailedOperation",
    type: "error",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
  },
  {
    name: "FundsDistributed",
    type: "event",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      { name: "matrix", type: "uint8", indexed: false, internalType: "uint8" },
      { name: "level", type: "uint8", indexed: false, internalType: "uint8" },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
    signature:
      "0x491203a85fbca1e3c9a65920cd5bb8bb847d0974f7b8cf665c44a25c5aac0f92",
  },
  {
    name: "LevelActivated",
    type: "event",
    inputs: [
      { name: "user", type: "address", indexed: true, internalType: "address" },
      { name: "matrix", type: "uint8", indexed: false, internalType: "uint8" },
      { name: "level", type: "uint8", indexed: false, internalType: "uint8" },
    ],
    anonymous: false,
    signature:
      "0x5f9b14f1e84bdad36483b5b3e8fa2adf7d4c11eb58c202a88504ab1cfc93c452",
  },
  {
    name: "OwnershipTransferred",
    type: "event",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
    signature:
      "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
  },
  {
    name: "SlotFilled",
    type: "event",
    inputs: [
      { name: "user", type: "address", indexed: true, internalType: "address" },
      { name: "matrix", type: "uint8", indexed: false, internalType: "uint8" },
      { name: "level", type: "uint8", indexed: false, internalType: "uint8" },
      {
        name: "slotsFilled",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
    signature:
      "0x6857bfc9f51d89360875c5986502ee3d22db10609faaa09b5c0775405ca083d7",
  },
  {
    name: "UserRegistered",
    type: "event",
    inputs: [
      { name: "user", type: "address", indexed: true, internalType: "address" },
      {
        name: "referrer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "id", type: "uint256", indexed: false, internalType: "uint256" },
    ],
    anonymous: false,
    signature:
      "0x05345a91f639184e946e5aac384b1e9f74ae9ab08d775a7deddb3180cebecb23",
  },
  {
    name: "LAST_LEVEL",
    type: "function",
    inputs: [],
    outputs: [{ name: "", type: "uint8", value: "12", internalType: "uint8" }],
    constant: true,
    signature: "0x29c70400",
    stateMutability: "view",
  },
  {
    name: "LEVEL_1_PRICE",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        value: "2500000000000000000",
        internalType: "uint256",
      },
    ],
    constant: true,
    signature: "0xae32d691",
    stateMutability: "view",
  },
  {
    name: "USDTAddress",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        value: "0x55d398326f99059fF775485246999027B3197955",
        internalType: "contract IERC20",
      },
    ],
    constant: true,
    signature: "0xff920c74",
    stateMutability: "view",
  },
  {
    name: "activateLevel",
    type: "function",
    inputs: [
      { name: "matrix", type: "uint8", internalType: "uint8" },
      { name: "level", type: "uint8", internalType: "uint8" },
    ],
    outputs: [],
    signature: "0xb8a2b5fc",
    stateMutability: "nonpayable",
  },
  {
    name: "getCurrentLevel",
    type: "function",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    constant: true,
    signature: "0xd9087025",
    stateMutability: "view",
  },
  {
    name: "getCurrentX1Level",
    type: "function",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    constant: true,
    signature: "0x056c31c4",
    stateMutability: "view",
  },
  {
    name: "getCurrentX2Level",
    type: "function",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    constant: true,
    signature: "0x886e41f1",
    stateMutability: "view",
  },
  {
    name: "getSlotsFilled",
    type: "function",
    inputs: [
      { name: "user", type: "address", internalType: "address" },
      { name: "matrix", type: "uint8", internalType: "uint8" },
      { name: "level", type: "uint8", internalType: "uint8" },
    ],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    constant: true,
    signature: "0xe19c123f",
    stateMutability: "view",
  },
  {
    name: "getTotalUSDTReceived",
    type: "function",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    constant: true,
    signature: "0xecf634e3",
    stateMutability: "view",
  },
  {
    name: "id1",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        value: "0x31eaCE9383eE97A5cF2FD6A1B254F27683DedE1B",
        internalType: "address",
      },
    ],
    constant: true,
    signature: "0x517999bc",
    stateMutability: "view",
  },
  {
    name: "idToAddress",
    type: "function",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    constant: true,
    signature: "0x2a2d0c47",
    stateMutability: "view",
  },
  {
    name: "isLocked",
    type: "function",
    inputs: [
      { name: "user", type: "address", internalType: "address" },
      { name: "matrix", type: "uint8", internalType: "uint8" },
      { name: "level", type: "uint8", internalType: "uint8" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    constant: true,
    signature: "0xba5d106a",
    stateMutability: "view",
  },
  {
    name: "isUserExists",
    type: "function",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    constant: true,
    signature: "0x509222cd",
    stateMutability: "view",
  },
  {
    name: "lastUserid",
    type: "function",
    inputs: [],
    outputs: [{ name: "id", type: "uint8", value: "2", internalType: "uint8" }],
    constant: true,
    signature: "0xa19fb28b",
    stateMutability: "view",
  },
  {
    name: "owner",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        value: "0x6d1695e8Ed58dd50AD8EFa4F01E93F0D5967230B",
        internalType: "address",
      },
    ],
    constant: true,
    signature: "0x8da5cb5b",
    stateMutability: "view",
  },
  {
    name: "register",
    type: "function",
    inputs: [{ name: "referrer", type: "address", internalType: "address" }],
    outputs: [],
    signature: "0x4420e486",
    stateMutability: "nonpayable",
  },
  {
    name: "renounceOwnership",
    type: "function",
    inputs: [],
    outputs: [],
    signature: "0x715018a6",
    stateMutability: "nonpayable",
  },
  {
    name: "setSystemRecipentAddress",
    type: "function",
    inputs: [{ name: "_newAddress", type: "address", internalType: "address" }],
    outputs: [],
    signature: "0xc72186bd",
    stateMutability: "nonpayable",
  },
  {
    name: "systemRecipentAddress",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        value: "0x6d1695e8Ed58dd50AD8EFa4F01E93F0D5967230B",
        internalType: "address",
      },
    ],
    constant: true,
    signature: "0xbd06c602",
    stateMutability: "view",
  },
  {
    name: "transferOwnership",
    type: "function",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    signature: "0xf2fde38b",
    stateMutability: "nonpayable",
  },
  {
    name: "updateToken",
    type: "function",
    inputs: [
      { name: "_token", type: "address", internalType: "contract IERC20" },
    ],
    outputs: [],
    signature: "0x7ad3def2",
    stateMutability: "nonpayable",
  },
  {
    name: "users",
    type: "function",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [
      { name: "referrer", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "currentLevel", type: "uint8", internalType: "uint8" },
      { name: "currentX1Level", type: "uint8", internalType: "uint8" },
      { name: "currentX2Level", type: "uint8", internalType: "uint8" },
      { name: "totalUSDTReceived", type: "uint256", internalType: "uint256" },
    ],
    constant: true,
    signature: "0xa87430ba",
    stateMutability: "view",
  },
  {
    name: "withdrawUSDT",
    type: "function",
    inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
    outputs: [],
    signature: "0x3ea521ef",
    stateMutability: "nonpayable",
  },
];

export const USDTTestNetABI = [
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const ContractAdress = "0xAEda261A3691DfAB8D0599fb0c3D9E16237e9cbf";
