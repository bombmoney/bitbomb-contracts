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
import type { OracleADA, OracleADAInterface } from "../OracleADA";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "_pair",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
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
        name: "previousOperator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "OperatorTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "price0CumulativeLast",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price1CumulativeLast",
        type: "uint256",
      },
    ],
    name: "Updated",
    type: "event",
  },
  {
    inputs: [],
    name: "blockTimestampLast",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "consult",
    outputs: [
      {
        internalType: "uint144",
        name: "amountOut",
        type: "uint144",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentEpoch",
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
    name: "getLastEpochTime",
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
    name: "getPeriod",
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
    name: "getStartTime",
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
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextEpochPoint",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pair",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price0Average",
    outputs: [
      {
        internalType: "uint224",
        name: "_x",
        type: "uint224",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
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
    name: "price1Average",
    outputs: [
      {
        internalType: "uint224",
        name: "_x",
        type: "uint224",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
    ],
    name: "setEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
    ],
    name: "setPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
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
    inputs: [],
    name: "token1",
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
        internalType: "address",
        name: "newOperator_",
        type: "address",
      },
    ],
    name: "transferOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "twap",
    outputs: [
      {
        internalType: "uint144",
        name: "_amountOut",
        type: "uint144",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016b0380380620016b0833981810160405260608110156200003757600080fd5b508051602082015160409092015190919081816000806200005762000462565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620000ab62000462565b600180546001600160a01b0319166001600160a01b0392831617908190556040519116906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a36002839055600382905560058190556200011e828462000466602090811b62000c5717901c565b6004908155600880546001600160a01b0319166001600160a01b03898116919091179182905560408051630dfe168160e01b81529051929091169550630dfe16819450808301935060209290829003018186803b1580156200017f57600080fd5b505afa15801562000194573d6000803e3d6000fd5b505050506040513d6020811015620001ab57600080fd5b5051600680546001600160a01b0319166001600160a01b039283161790556008546040805163d21220a760e01b81529051919092169163d21220a7916004808301926020929190829003018186803b1580156200020757600080fd5b505afa1580156200021c573d6000803e3d6000fd5b505050506040513d60208110156200023357600080fd5b5051600780546001600160a01b0319166001600160a01b0392831617905560085460408051635909c0d560e01b815290519190921691635909c0d5916004808301926020929190829003018186803b1580156200028f57600080fd5b505afa158015620002a4573d6000803e3d6000fd5b505050506040513d6020811015620002bb57600080fd5b505160095560085460408051635a3d549360e01b815290516001600160a01b0390921691635a3d549391600480820192602092909190829003018186803b1580156200030657600080fd5b505afa1580156200031b573d6000803e3d6000fd5b505050506040513d60208110156200033257600080fd5b5051600a5560085460408051630240bc6b60e21b8152905160009283926001600160a01b0390911691630902f1ac91600480820192606092909190829003018186803b1580156200038257600080fd5b505afa15801562000397573d6000803e3d6000fd5b505050506040513d6060811015620003ae57600080fd5b50805160208201516040909201516008805463ffffffff909216600160a01b0263ffffffff60a01b19909216919091179055925090506001600160701b038216158015906200040557506001600160701b03811615155b62000457576040805162461bcd60e51b815260206004820152601360248201527f4f7261636c653a204e4f5f524553455256455300000000000000000000000000604482015290519081900360640190fd5b5050505050620004c4565b3390565b600082821115620004be576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6111dc80620004d46000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c8063715018a6116100c3578063ba5224581161007c578063ba52245814610304578063c5700a021461030c578063c5967c261461032d578063c828371e14610335578063d21220a71461033d578063f2fde38b1461034557610158565b8063715018a6146102d45780638da5cb5b146102dc578063a2e62045146102e4578063a6bb4539146102ec578063a8aa1b31146102f4578063b97dd9e2146102fc57610158565b80634456eda2116101155780634456eda214610250578063570ca7351461026c5780635909c0d5146102745780635a3d54931461027c5780635e6aaf2c146102845780636808a128146102a857610158565b80630ceb2cef1461015d5780630dfe16811461017c5780630f3a9f65146101a05780631ed24195146101bd57806329605e77146101d75780633ddac953146101fd575b600080fd5b61017a6004803603602081101561017357600080fd5b503561036b565b005b6101846103b9565b604080516001600160a01b039092168252519081900360200190f35b61017a600480360360208110156101b657600080fd5b50356103c8565b6101c5610474565b60408051918252519081900360200190f35b61017a600480360360208110156101ed57600080fd5b50356001600160a01b031661047a565b6102296004803603604081101561021357600080fd5b506001600160a01b0381351690602001356104fa565b6040805171ffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102586105d0565b604080519115158252519081900360200190f35b6101846105f6565b6101c5610605565b6101c561060b565b61028c610611565b604080516001600160e01b039092168252519081900360200190f35b610229600480360360408110156102be57600080fd5b506001600160a01b038135169060200135610620565b61017a6106f6565b6101846107b4565b61017a6107c3565b61028c610ad3565b610184610ae2565b6101c5610af1565b6101c5610af7565b610314610afd565b6040805163ffffffff9092168252519081900360200190f35b6101c5610b10565b6101c5610b2e565b610184610b34565b61017a6004803603602081101561035b57600080fd5b50356001600160a01b0316610b43565b6001546001600160a01b031633146103b45760405162461bcd60e51b81526004018080602001828103825260248152602001806111606024913960400191505060405180910390fd5b600555565b6006546001600160a01b031681565b6001546001600160a01b031633146104115760405162461bcd60e51b81526004018080602001828103825260248152602001806111606024913960400191505060405180910390fd5b610e10811015801561042657506202a3008111155b61046f576040805162461bcd60e51b81526020600482015260156024820152745f706572696f643a206f7574206f662072616e676560581b604482015290519081900360640190fd5b600255565b60025490565b610482610cb4565b6001600160a01b03166104936107b4565b6001600160a01b0316146104ee576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6104f781610cb8565b50565b6006546000906001600160a01b0384811691161415610546576040805160208101909152600b546001600160e01b0316815261053f9061053a9084610d55565b610dd3565b90506105ca565b6007546001600160a01b038481169116146105a0576040805162461bcd60e51b815260206004820152601560248201527427b930b1b6329d1024a72b20a624a22faa27a5a2a760591b604482015290519081900360640190fd5b6040805160208101909152600c546001600160e01b031681526105c79061053a9084610d55565b90505b92915050565b6001546000906001600160a01b03166105e7610cb4565b6001600160a01b031614905090565b6001546001600160a01b031690565b60095481565b600a5481565b600c546001600160e01b031681565b60085460009081908190819061063e906001600160a01b0316610dda565b600854600654939650919450925063ffffffff600160a01b909104168203906001600160a01b03888116911614156106ae576106a761053a8760405180602001604052808563ffffffff166009548a038161069557fe5b046001600160e01b0316905290610d55565b94506106ec565b6007546001600160a01b03888116911614156106ec576106e961053a8760405180602001604052808563ffffffff16600a5489038161069557fe5b94505b5050505092915050565b6106fe610cb4565b6001600160a01b031661070f6107b4565b6001600160a01b03161461076a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b60006107cd610b10565b90508042101561096e576107df6105f6565b6001600160a01b0316336001600160a01b03161461082e5760405162461bcd60e51b815260040180806020018281038252602a815260200180611109602a913960400191505060405180910390fd5b6008546000908190819061084a906001600160a01b0316610dda565b600854929550909350915063ffffffff600160a01b909104811682039081166108765750505050610969565b60405180602001604052808263ffffffff1660095487038161089457fe5b046001600160e01b039081169091529051600b80546001600160e01b031916919092161790556040805160208101909152600a54819063ffffffff8416908603816108db57fe5b046001600160e01b039081169091529051600c80546001600160e01b031916919092161790556009849055600a8390556008805463ffffffff60a01b1916600160a01b63ffffffff851602179055604080518581526020810185905281517fd78a0cb8bb633d06981248b816e7bd33c2a35a6089241d099fa519e361cab902929181900390910190a1505050505b6104f7565b6008546000908190819061098a906001600160a01b0316610dda565b600854929550909350915063ffffffff600160a01b909104811682039081166109b65750505050610aa9565b60405180602001604052808263ffffffff166009548703816109d457fe5b046001600160e01b039081169091529051600b80546001600160e01b031916919092161790556040805160208101909152600a54819063ffffffff841690860381610a1b57fe5b046001600160e01b039081169091529051600c80546001600160e01b031916919092161790556009849055600a8390556008805463ffffffff60a01b1916600160a01b63ffffffff851602179055604080518581526020810185905281517fd78a0cb8bb633d06981248b816e7bd33c2a35a6089241d099fa519e361cab902929181900390910190a1505050505b6004819055600580546001019055610abf610b10565b905080421015610ace576104f7565b610aa9565b600b546001600160e01b031681565b6008546001600160a01b031681565b60055490565b60045490565b600854600160a01b900463ffffffff1681565b6000610b29600254600454610fa990919063ffffffff16565b905090565b60035490565b6007546001600160a01b031681565b610b4b610cb4565b6001600160a01b0316610b5c6107b4565b6001600160a01b031614610bb7576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610bfc5760405162461bcd60e51b81526004018080602001828103825260268152602001806110e36026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600082821115610cae576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b3390565b6001600160a01b038116610cfd5760405162461bcd60e51b815260040180806020018281038252602d815260200180611133602d913960400191505060405180910390fd5b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b610d5d6110bd565b6000821580610d8357505082516001600160e01b031682810290838281610d8057fe5b04145b610dbe5760405162461bcd60e51b81526004018080602001828103825260238152602001806111846023913960400191505060405180910390fd5b60408051602081019091529081529392505050565b5160701c90565b6000806000610de7611003565b9050836001600160a01b0316635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b158015610e2257600080fd5b505afa158015610e36573d6000803e3d6000fd5b505050506040513d6020811015610e4c57600080fd5b505160408051635a3d549360e01b815290519194506001600160a01b03861691635a3d549391600480820192602092909190829003018186803b158015610e9257600080fd5b505afa158015610ea6573d6000803e3d6000fd5b505050506040513d6020811015610ebc57600080fd5b505160408051630240bc6b60e21b81529051919350600091829182916001600160a01b03891691630902f1ac916004808301926060929190829003018186803b158015610f0857600080fd5b505afa158015610f1c573d6000803e3d6000fd5b505050506040513d6060811015610f3257600080fd5b5080516020820151604090920151909450909250905063ffffffff80821690851614610f9f5780840363ffffffff8116610f6c848661100d565b516001600160e01b031602969096019563ffffffff8116610f8d858561100d565b516001600160e01b0316029590950194505b5050509193909250565b6000828201838110156105c7576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b63ffffffff421690565b6110156110d0565b6000826001600160701b031611611073576040805162461bcd60e51b815260206004820152601760248201527f4669786564506f696e743a204449565f42595f5a45524f000000000000000000604482015290519081900360640190fd5b6040805160208101909152806001600160701b0384166dffffffffffffffffffffffffffff60701b607087901b16816110a857fe5b046001600160e01b0316815250905092915050565b6040518060200160405280600081525090565b6040805160208101909152600081529056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345706f63683a206f6e6c79206f70657261746f7220616c6c6f77656420666f72207072652d65706f63686f70657261746f723a207a65726f206164647265737320676976656e20666f72206e6577206f70657261746f726f70657261746f723a2063616c6c6572206973206e6f7420746865206f70657261746f724669786564506f696e743a204d554c5449504c49434154494f4e5f4f564552464c4f57a26469706673582212206e6602fc64460f36eba7e27e3a4c331e4fa42a85af1acbcb42e85848fee1171664736f6c634300060c0033";

type OracleADAConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleADAConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleADA__factory extends ContractFactory {
  constructor(...args: OracleADAConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _pair: string,
    _period: BigNumberish,
    _startTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OracleADA> {
    return super.deploy(
      _pair,
      _period,
      _startTime,
      overrides || {}
    ) as Promise<OracleADA>;
  }
  getDeployTransaction(
    _pair: string,
    _period: BigNumberish,
    _startTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pair,
      _period,
      _startTime,
      overrides || {}
    );
  }
  attach(address: string): OracleADA {
    return super.attach(address) as OracleADA;
  }
  connect(signer: Signer): OracleADA__factory {
    return super.connect(signer) as OracleADA__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleADAInterface {
    return new utils.Interface(_abi) as OracleADAInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleADA {
    return new Contract(address, _abi, signerOrProvider) as OracleADA;
  }
}