/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TaxOfficeV2, TaxOfficeV2Interface } from "../TaxOfficeV2";

const _abi = [
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
    inputs: [
      {
        internalType: "uint256",
        name: "amtBomb",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amtBombMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amtEthMin",
        type: "uint256",
      },
    ],
    name: "addLiquidityETHTaxFree",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amtBomb",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amtToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amtBombMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amtTokenMin",
        type: "uint256",
      },
    ],
    name: "addLiquidityTaxFree",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bomb",
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
    name: "disableAutoCalculateTax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enableAutoCalculateTax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "excludeAddressFromTax",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "includeAddressInTax",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_burnThreshold",
        type: "uint256",
      },
    ],
    name: "setBurnThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_taxCollectorAddress",
        type: "address",
      },
    ],
    name: "setTaxCollectorAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_excluded",
        type: "bool",
      },
    ],
    name: "setTaxExclusionForAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
    ],
    name: "setTaxRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_index",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setTaxTiersRate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_index",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setTaxTiersTwap",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bombOracle",
        type: "address",
      },
    ],
    name: "setTaxableBombOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "taxExclusionEnabled",
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
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amt",
        type: "uint256",
      },
    ],
    name: "taxFreeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "taxRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "_newTaxOffice",
        type: "address",
      },
    ],
    name: "transferTaxOffice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniRouter",
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
    name: "weth",
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
];

const _bytecode =
  "0x6080604052600280546001600160a01b0319908116736c021ae822bea943b2e66552bde1d2696a53fbb7179091556003805482167321be370d5312f44cb42ce377bc9b8a0cef1a4c831790556004805490911673f491e7b69e4244ad4002bc14e878a34207e38c2917905534801561007657600080fd5b506000610081610124565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100d3610124565b600180546001600160a01b0319166001600160a01b0392831617908190556040519116906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3610128565b3390565b611c1b806101376000396000f3fe6080604052600436106101815760003560e01c80637fcd79c7116100d1578063be94f86b1161008a578063e1d8752e11610064578063e1d8752e14610528578063f1efacf91461056b578063f2fde38b146105b6578063ff87fc7c146105e957610181565b8063be94f86b14610498578063c6d69a30146104cb578063d1d31a37146104f557610181565b80637fcd79c7146103c15780638da5cb5b146103fc5780639d6b5f2114610411578063a0e47bf61461043b578063b1b0c49e14610450578063b87c5a4a1461046557610181565b8063570ca7351161013e57806369356d471161011857806369356d471461030b578063715018a61461033e57806373baccc014610353578063771a3a1d1461039a57610181565b8063570ca735146102ae57806365bbacd9146102c357806366206ce9146102d857610181565b806313762bdc1461018657806319db099d146101cd5780631ba1f8351461020057806329605e77146102355780633fc8cef3146102685780634456eda214610299575b600080fd5b34801561019257600080fd5b506101b9600480360360208110156101a957600080fd5b50356001600160a01b03166105fe565b604080519115158252519081900360200190f35b3480156101d957600080fd5b506101b9600480360360208110156101f057600080fd5b50356001600160a01b0316610613565b34801561020c57600080fd5b506102336004803603602081101561022357600080fd5b50356001600160a01b0316610670565b005b34801561024157600080fd5b506102336004803603602081101561025857600080fd5b50356001600160a01b0316610722565b34801561027457600080fd5b5061027d6107a2565b604080516001600160a01b039092168252519081900360200190f35b3480156102a557600080fd5b506101b96107b1565b3480156102ba57600080fd5b5061027d6107d7565b3480156102cf57600080fd5b506102336107e6565b3480156102e457600080fd5b506101b9600480360360408110156102fb57600080fd5b5060ff8135169060200135610899565b34801561031757600080fd5b506102336004803603602081101561032e57600080fd5b50356001600160a01b031661096f565b34801561034a57600080fd5b50610233610a06565b61037c6004803603606081101561036957600080fd5b5080359060208101359060400135610ac4565b60408051938452602084019290925282820152519081900360600190f35b3480156103a657600080fd5b506103af610d3d565b60408051918252519081900360200190f35b3480156103cd57600080fd5b50610233600480360360408110156103e457600080fd5b506001600160a01b0381351690602001351515610db4565b34801561040857600080fd5b5061027d610e28565b34801561041d57600080fd5b506102336004803603602081101561043457600080fd5b5035610e37565b34801561044757600080fd5b5061027d610ecd565b34801561045c57600080fd5b5061027d610edc565b34801561047157600080fd5b506101b96004803603604081101561048857600080fd5b5060ff8135169060200135610eeb565b3480156104a457600080fd5b506101b9600480360360208110156104bb57600080fd5b50356001600160a01b0316610f8e565b3480156104d757600080fd5b50610233600480360360208110156104ee57600080fd5b5035610fe3565b34801561050157600080fd5b506102336004803603602081101561051857600080fd5b50356001600160a01b0316611079565b34801561053457600080fd5b506102336004803603606081101561054b57600080fd5b506001600160a01b03813581169160208101359091169060400135611110565b34801561057757600080fd5b5061037c600480360360a081101561058e57600080fd5b506001600160a01b0381351690602081013590604081013590606081013590608001356111fc565b3480156105c257600080fd5b50610233600480360360208110156105d957600080fd5b50356001600160a01b03166115bb565b3480156105f557600080fd5b506102336116cf565b60056020526000908152604090205460ff1681565b6001546000906001600160a01b0316331461065f5760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b61066882611768565b90505b919050565b6001546001600160a01b031633146106b95760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b600254604080516365f98a4f60e11b81526001600160a01b0384811660048301529151919092169163cbf3149e91602480830192600092919082900301818387803b15801561070757600080fd5b505af115801561071b573d6000803e3d6000fd5b5050505050565b61072a61186d565b6001600160a01b031661073b610e28565b6001600160a01b031614610796576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61079f81611871565b50565b6003546001600160a01b031681565b6001546000906001600160a01b03166107c861186d565b6001600160a01b031614905090565b6001546001600160a01b031690565b6001546001600160a01b0316331461082f5760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b600260009054906101000a90046001600160a01b03166001600160a01b03166365bbacd96040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561087f57600080fd5b505af1158015610893573d6000803e3d6000fd5b50505050565b6001546000906001600160a01b031633146108e55760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b600254604080516366206ce960e01b815260ff861660048201526024810185905290516001600160a01b03909216916366206ce9916044808201926020929091908290030181600087803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b505050506040513d602081101561096657600080fd5b50519392505050565b6001546001600160a01b031633146109b85760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b600254604080516369356d4760e01b81526001600160a01b038481166004830152915191909216916369356d4791602480830192600092919082900301818387803b15801561070757600080fd5b610a0e61186d565b6001600160a01b0316610a1f610e28565b6001600160a01b031614610a7a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600080808515801590610ad657503415155b610b1c576040805162461bcd60e51b81526020600482015260126024820152710616d6f756e74732063616e277420626520360741b604482015290519081900360640190fd5b610b253361190e565b50600254604080516323b872dd60e01b81523360048201523060248201526044810189905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b158015610b8057600080fd5b505af1158015610b94573d6000803e3d6000fd5b505050506040513d6020811015610baa57600080fd5b5050600254600454610bc8916001600160a01b0390811691166119df565b610bd133611768565b50600480546002546040805163f305d71960e01b81526001600160a01b0392831694810194909452602484018a905260448401899052606484018890523360848501524260a48501525160009384938493169163f305d71991349160c480830192606092919082900301818588803b158015610c4c57600080fd5b505af1158015610c60573d6000803e3d6000fd5b50505050506040513d6060811015610c7757600080fd5b508051602082015160409092015190945090925090506000610c998a85611ae6565b1115610d2e576002546001600160a01b031663a9059cbb33610cbb8c87611ae6565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610d0157600080fd5b505af1158015610d15573d6000803e3d6000fd5b505050506040513d6020811015610d2b57600080fd5b50505b91989097509095509350505050565b6002546040805163771a3a1d60e01b815290516000926001600160a01b03169163771a3a1d91600480830192602092919082900301818787803b158015610d8357600080fd5b505af1158015610d97573d6000803e3d6000fd5b505050506040513d6020811015610dad57600080fd5b5051905090565b6001546001600160a01b03163314610dfd5760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b6001600160a01b03919091166000908152600560205260409020805460ff1916911515919091179055565b6000546001600160a01b031690565b6001546001600160a01b03163314610e805760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b60025460408051639d6b5f2160e01b81526004810184905290516001600160a01b0390921691639d6b5f219160248082019260009290919082900301818387803b15801561070757600080fd5b6004546001600160a01b031681565b6002546001600160a01b031681565b6001546000906001600160a01b03163314610f375760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b60025460408051635c3e2d2560e11b815260ff861660048201526024810185905290516001600160a01b039092169163b87c5a4a916044808201926020929091908290030181600087803b15801561093c57600080fd5b6001546000906001600160a01b03163314610fda5760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b6106688261190e565b6001546001600160a01b0316331461102c5760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b60025460408051630c6d69a360e41b81526004810184905290516001600160a01b039092169163c6d69a309160248082019260009290919082900301818387803b15801561070757600080fd5b6001546001600160a01b031633146110c25760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b60025460408051631f83ebb560e11b81526001600160a01b03848116600483015291519190921691633f07d76a91602480830192600092919082900301818387803b15801561070757600080fd5b3360009081526005602052604090205460ff1661115e5760405162461bcd60e51b815260040180806020018281038252602b815260200180611b6a602b913960400191505060405180910390fd5b6111678361190e565b50600254604080516323b872dd60e01b81526001600160a01b038681166004830152858116602483015260448201859052915191909216916323b872dd9160648083019260209291908290030181600087803b1580156111c657600080fd5b505af11580156111da573d6000803e3d6000fd5b505050506040513d60208110156111f057600080fd5b50610893905083611768565b60008080861580159061120e57508515155b611254576040805162461bcd60e51b81526020600482015260126024820152710616d6f756e74732063616e277420626520360741b604482015290519081900360640190fd5b61125d3361190e565b50600254604080516323b872dd60e01b8152336004820152306024820152604481018a905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b1580156112b857600080fd5b505af11580156112cc573d6000803e3d6000fd5b505050506040513d60208110156112e257600080fd5b5050604080516323b872dd60e01b81523360048201523060248201526044810188905290516001600160a01b038a16916323b872dd9160648083019260209291908290030181600087803b15801561133957600080fd5b505af115801561134d573d6000803e3d6000fd5b505050506040513d602081101561136357600080fd5b5050600254600454611381916001600160a01b0390811691166119df565b6004546113989089906001600160a01b03166119df565b6113a133611768565b50600480546002546040805162e8e33760e81b81526001600160a01b03928316948101949094528b82166024850152604484018b9052606484018a90526084840189905260a484018890523360c48501524260e48501525160009384938493169163e8e33700916101048082019260609290919082900301818787803b15801561142a57600080fd5b505af115801561143e573d6000803e3d6000fd5b505050506040513d606081101561145457600080fd5b5080516020820151604090920151909450909250905060006114768b85611ae6565b111561150b576002546001600160a01b031663a9059cbb336114988d87611ae6565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156114de57600080fd5b505af11580156114f2573d6000803e3d6000fd5b505050506040513d602081101561150857600080fd5b50505b60006115178a84611ae6565b11156115aa576001600160a01b038b1663a9059cbb336115378c86611ae6565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561157d57600080fd5b505af1158015611591573d6000803e3d6000fd5b505050506040513d60208110156115a757600080fd5b50505b919a90995090975095505050505050565b6115c361186d565b6001600160a01b03166115d4610e28565b6001600160a01b03161461162f576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166116745760405162461bcd60e51b8152600401808060200182810382526026815260200180611b446026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146117185760405162461bcd60e51b8152600401808060200182810382526024815260200180611bc26024913960400191505060405180910390fd5b600260009054906101000a90046001600160a01b03166001600160a01b031663ff87fc7c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561087f57600080fd5b6002546040805163ebca1bd960e01b81526001600160a01b0384811660048301529151600093929092169163ebca1bd99160248082019260209290919082900301818787803b1580156117ba57600080fd5b505af11580156117ce573d6000803e3d6000fd5b505050506040513d60208110156117e457600080fd5b50511561066b57600254604080516393995d4b60e01b81526001600160a01b038581166004830152915191909216916393995d4b9160248083019260209291908290030181600087803b15801561183a57600080fd5b505af115801561184e573d6000803e3d6000fd5b505050506040513d602081101561186457600080fd5b5051905061066b565b3390565b6001600160a01b0381166118b65760405162461bcd60e51b815260040180806020018281038252602d815260200180611b95602d913960400191505060405180910390fd5b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6002546040805163ebca1bd960e01b81526001600160a01b0384811660048301529151600093929092169163ebca1bd99160248082019260209290919082900301818787803b15801561196057600080fd5b505af1158015611974573d6000803e3d6000fd5b505050506040513d602081101561198a57600080fd5b505161066b5760025460408051631bac736760e11b81526001600160a01b03858116600483015291519190921691633758e6ce9160248083019260209291908290030181600087803b15801561183a57600080fd5b60408051636eb1769f60e11b81523060048201526001600160a01b03838116602483015291519184169163dd62ed3e91604480820192602092909190829003018186803b158015611a2f57600080fd5b505afa158015611a43573d6000803e3d6000fd5b505050506040513d6020811015611a5957600080fd5b5051611ae257816001600160a01b031663095ea7b3826000196040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015611ab857600080fd5b505af1158015611acc573d6000803e3d6000fd5b505050506040513d602081101561089357600080fd5b5050565b600082821115611b3d576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737341646472657373206e6f7420617070726f76656420666f72207461782066726565207472616e73666572736f70657261746f723a207a65726f206164647265737320676976656e20666f72206e6577206f70657261746f726f70657261746f723a2063616c6c6572206973206e6f7420746865206f70657261746f72a2646970667358221220626b1ca1600d8e33fbdfedf3748cb3c371b1bf55c6174b297a25e3393e0c448764736f6c634300060c0033";

type TaxOfficeV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TaxOfficeV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TaxOfficeV2__factory extends ContractFactory {
  constructor(...args: TaxOfficeV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TaxOfficeV2> {
    return super.deploy(overrides || {}) as Promise<TaxOfficeV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TaxOfficeV2 {
    return super.attach(address) as TaxOfficeV2;
  }
  connect(signer: Signer): TaxOfficeV2__factory {
    return super.connect(signer) as TaxOfficeV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TaxOfficeV2Interface {
    return new utils.Interface(_abi) as TaxOfficeV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TaxOfficeV2 {
    return new Contract(address, _abi, signerOrProvider) as TaxOfficeV2;
  }
}