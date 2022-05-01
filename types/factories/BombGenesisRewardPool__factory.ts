/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BombGenesisRewardPool,
  BombGenesisRewardPoolInterface,
} from "../BombGenesisRewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_bomb",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_poolStartTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "TOTAL_REWARDS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_lastRewardTime",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bomb",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bombPerSecond",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fromTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toTime",
        type: "uint256",
      },
    ],
    name: "getGeneratedReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "governanceRecoverUnsupported",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingBOMB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accBombPerShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isStarted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "runningTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006004556708feaf4e7b5e08006007556201518060085534801561002857600080fd5b506040516118563803806118568339818101604052604081101561004b57600080fd5b508051602090910151428111610091576040805162461bcd60e51b815260206004808301919091526024820152636c61746560e01b604482015290519081900360640190fd5b6001600160a01b038216156100bc57600180546001600160a01b0319166001600160a01b0384161790555b60058190556008540160065550600080546001600160a01b0319163317905561176c806100ea6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063570ca735116100b857806393f1a40b1161007c57806393f1a40b146102fd578063943f013d1461034257806396805e541461034a578063b1b0c49e14610384578063b3ab15fb1461038c578063e2bbb158146103b257610137565b8063570ca735146102b95780635f96dc11146102dd57806362241369146102e5578063630b5ba1146102ed5780636e271dd5146102f557610137565b8063441a3e70116100ff578063441a3e70146101fa5780634d84ff8a1461021d57806351eb05a6146102495780635312ea8e1461026657806354575af41461028357610137565b806309cf60911461013c5780631526fe271461015657806317caf6f1146101aa5780631ab06ee5146101b2578063231f0c6a146101d7575b600080fd5b6101446103d5565b60408051918252519081900360200190f35b6101736004803603602081101561016c57600080fd5b50356103e3565b604080516001600160a01b039096168652602086019490945284840192909252606084015215156080830152519081900360a00190f35b61014461042e565b6101d5600480360360408110156101c857600080fd5b5080359060200135610434565b005b610144600480360360408110156101ed57600080fd5b50803590602001356104e2565b6101d56004803603604081101561021057600080fd5b50803590602001356105a7565b6101446004803603604081101561023357600080fd5b50803590602001356001600160a01b0316610764565b6101d56004803603602081101561025f57600080fd5b50356108c0565b6101d56004803603602081101561027c57600080fd5b5035610a1e565b6101d56004803603606081101561029957600080fd5b506001600160a01b03813581169160208101359160409091013516610aba565b6102c1610c02565b604080516001600160a01b039092168252519081900360200190f35b610144610c11565b610144610c17565b6101d5610c1d565b610144610c40565b6103296004803603604081101561031357600080fd5b50803590602001356001600160a01b0316610c46565b6040805192835260208301919091528051918290030190f35b610144610c6a565b6101d56004803603608081101561036057600080fd5b508035906001600160a01b0360208201351690604081013515159060600135610c70565b6102c1610e6d565b6101d5600480360360208110156103a257600080fd5b50356001600160a01b0316610e7c565b6101d5600480360360408110156103c857600080fd5b5080359060200135610ee7565b690bdbc41e0348b300000081565b600281815481106103f057fe5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909160ff1685565b60045481565b6000546001600160a01b0316331461047d5760405162461bcd60e51b815260040180806020018281038252602b81526020018061169b602b913960400191505060405180910390fd5b610485610c1d565b60006002838154811061049457fe5b60009182526020909120600590910201600481015490915060ff16156104db576104d7826104d1836001015460045461105790919063ffffffff16565b906110b4565b6004555b6001015550565b60008183106104f3575060006105a1565b600654821061055b57600654831061050d575060006105a1565b60055483116105405761053960075461053360055460065461105790919063ffffffff16565b90611115565b90506105a1565b6105396007546105338560065461105790919063ffffffff16565b600554821161056c575060006105a1565b6005548311610590576105396007546105336005548561105790919063ffffffff16565b600754610539906105338486611057565b92915050565b60003390506000600284815481106105bb57fe5b600091825260208083208784526003825260408085206001600160a01b03881686529092529220805460059092029092019250841115610637576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b610640856108c0565b600061067d8260010154610677670de0b6b3a76400006106718760030154876000015461111590919063ffffffff16565b9061116e565b90611057565b905080156106cf5761068f84826111d5565b6040805182815290516001600160a01b038616917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b84156106f95781546106e19086611057565b825582546106f9906001600160a01b0316858761128b565b6003830154825461071791670de0b6b3a76400009161067191611115565b600183015560408051868152905187916001600160a01b038716917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a3505050505050565b6000806002848154811061077457fe5b60009182526020808320878452600380835260408086206001600160a01b03808b168852908552818720600590960290930191820154825482516370a0823160e01b815230600482015292519398509596909590949316926370a0823192602480840193829003018186803b1580156107ec57600080fd5b505afa158015610800573d6000803e3d6000fd5b505050506040513d602081101561081657600080fd5b505160028501549091504211801561082d57508015155b1561088a5760006108428560020154426104e2565b9050600061086360045461067188600101548561111590919063ffffffff16565b905061088561087e8461067184670de0b6b3a7640000611115565b85906110b4565b935050505b6108b58360010154610677670de0b6b3a764000061067186886000015461111590919063ffffffff16565b979650505050505050565b6000600282815481106108cf57fe5b90600052602060002090600502019050806002015442116108f05750610a1b565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561093a57600080fd5b505afa15801561094e573d6000803e3d6000fd5b505050506040513d602081101561096457600080fd5b505190508061097a575042600290910155610a1b565b600482015460ff166109ab576004808301805460ff1916600190811790915583015490546109a7916110b4565b6004555b60045415610a125760006109c38360020154426104e2565b905060006109e460045461067186600101548561111590919063ffffffff16565b9050610a0a6109ff8461067184670de0b6b3a7640000611115565b6003860154906110b4565b600385015550505b50426002909101555b50565b600060028281548110610a2d57fe5b600091825260208083208584526003825260408085203380875293528420805485825560018201959095556005909302018054909450919291610a7d916001600160a01b0391909116908361128b565b604080518281529051859133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a350505050565b6000546001600160a01b03163314610b035760405162461bcd60e51b815260040180806020018281038252602b81526020018061169b602b913960400191505060405180910390fd5b6006546276a70001421015610be9576001546001600160a01b0384811691161415610b5e576040805162461bcd60e51b815260206004808301919091526024820152633137b6b160e11b604482015290519081900360640190fd5b60025460005b81811015610be657600060028281548110610b7b57fe5b6000918252602090912060059091020180549091506001600160a01b0387811691161415610bdd576040805162461bcd60e51b815260206004820152600a6024820152693837b7b6173a37b5b2b760b11b604482015290519081900360640190fd5b50600101610b64565b50505b610bfd6001600160a01b038416828461128b565b505050565b6000546001600160a01b031681565b60055481565b60075481565b60025460005b81811015610c3c57610c34816108c0565b600101610c23565b5050565b60065481565b60036020908152600092835260408084209091529082529020805460019091015482565b60085481565b6000546001600160a01b03163314610cb95760405162461bcd60e51b815260040180806020018281038252602b81526020018061169b602b913960400191505060405180910390fd5b610cc2836112dd565b8115610cd057610cd0610c1d565b600554421015610cfc5780610ce85750600554610cf7565b600554811015610cf757506005545b610d10565b801580610d0857504281105b15610d105750425b600060055482111580610d235750428211155b6040805160a0810182526001600160a01b03878116825260208201898152928201868152600060608401818152861580156080870190815260028054600181018255945295517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600590940293840180546001600160a01b031916919096161790945594517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf82015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad082015592517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad184015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad2909201805460ff191692151592909217909155909150610e6657600454610e6290866110b4565b6004555b5050505050565b6001546001600160a01b031681565b6000546001600160a01b03163314610ec55760405162461bcd60e51b815260040180806020018281038252602b81526020018061169b602b913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000339050600060028481548110610efb57fe5b600091825260208083208784526003825260408085206001600160a01b0388168652909252922060059091029091019150610f35856108c0565b805415610fc1576000610f6d8260010154610677670de0b6b3a76400006106718760030154876000015461111590919063ffffffff16565b90508015610fbf57610f7f84826111d5565b6040805182815290516001600160a01b038616917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b505b8315610fed578154610fde906001600160a01b0316843087611377565b8054610fea90856110b4565b81555b6003820154815461100b91670de0b6b3a76400009161067191611115565b600182015560408051858152905186916001600160a01b038616917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a35050505050565b6000828211156110ae576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008282018381101561110e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082611124575060006105a1565b8282028284828161113157fe5b041461110e5760405162461bcd60e51b81526004018080602001828103825260218152602001806116ec6021913960400191505060405180910390fd5b60008082116111c4576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816111cd57fe5b049392505050565b600154604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561122057600080fd5b505afa158015611234573d6000803e3d6000fd5b505050506040513d602081101561124a57600080fd5b505190508015610bfd578082111561127857600154611273906001600160a01b0316848361128b565b610bfd565b600154610bfd906001600160a01b031684845b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610bfd9084906113d7565b60025460005b81811015610bfd57826001600160a01b03166002828154811061130257fe5b60009182526020909120600590910201546001600160a01b0316141561136f576040805162461bcd60e51b815260206004820152601f60248201527f426f6d6247656e65736973506f6f6c3a206578697374696e6720706f6f6c3f00604482015290519081900360640190fd5b6001016112e3565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526113d19085906113d7565b50505050565b606061142c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114889092919063ffffffff16565b805190915015610bfd5780806020019051602081101561144b57600080fd5b5051610bfd5760405162461bcd60e51b815260040180806020018281038252602a81526020018061170d602a913960400191505060405180910390fd5b6060611497848460008561149f565b949350505050565b6060824710156114e05760405162461bcd60e51b81526004018080602001828103825260268152602001806116c66026913960400191505060405180910390fd5b6114e9856115f0565b61153a576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106115795780518252601f19909201916020918201910161155a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146115db576040519150601f19603f3d011682016040523d82523d6000602084013e6115e0565b606091505b50915091506108b58282866115f6565b3b151590565b6060831561160557508161110e565b8251156116155782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561165f578181015183820152602001611647565b50505050905090810190601f16801561168c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe426f6d6247656e65736973506f6f6c3a2063616c6c6572206973206e6f7420746865206f70657261746f72416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212202ac5e5b8a1f3699992904325f58898795f00034e84c7e3202e211e9a8d3d64ec64736f6c634300060c0033";

type BombGenesisRewardPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BombGenesisRewardPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BombGenesisRewardPool__factory extends ContractFactory {
  constructor(...args: BombGenesisRewardPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _bomb: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BombGenesisRewardPool> {
    return super.deploy(
      _bomb,
      _poolStartTime,
      overrides || {}
    ) as Promise<BombGenesisRewardPool>;
  }
  getDeployTransaction(
    _bomb: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_bomb, _poolStartTime, overrides || {});
  }
  attach(address: string): BombGenesisRewardPool {
    return super.attach(address) as BombGenesisRewardPool;
  }
  connect(signer: Signer): BombGenesisRewardPool__factory {
    return super.connect(signer) as BombGenesisRewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BombGenesisRewardPoolInterface {
    return new utils.Interface(_abi) as BombGenesisRewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BombGenesisRewardPool {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BombGenesisRewardPool;
  }
}
