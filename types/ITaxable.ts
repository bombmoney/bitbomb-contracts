/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ITaxableInterface extends utils.Interface {
  functions: {
    "disableAutoCalculateTax()": FunctionFragment;
    "enableAutoCalculateTax()": FunctionFragment;
    "excludeAddress(address)": FunctionFragment;
    "includeAddress(address)": FunctionFragment;
    "isAddressExcluded(address)": FunctionFragment;
    "setBurnThreshold(uint256)": FunctionFragment;
    "setTaxCollectorAddress(address)": FunctionFragment;
    "setTaxOffice(address)": FunctionFragment;
    "setTaxRate(uint256)": FunctionFragment;
    "setTaxTiersRate(uint8,uint256)": FunctionFragment;
    "setTaxTiersTwap(uint8,uint256)": FunctionFragment;
    "setTokenOracle(address)": FunctionFragment;
    "taxRate()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "disableAutoCalculateTax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enableAutoCalculateTax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "includeAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAddressExcluded",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBurnThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxCollectorAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxOffice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxTiersRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxTiersTwap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenOracle",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "taxRate", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "disableAutoCalculateTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableAutoCalculateTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "includeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAddressExcluded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBurnThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxCollectorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxOffice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTaxRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTaxTiersRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxTiersTwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "taxRate", data: BytesLike): Result;

  events: {};
}

export interface ITaxable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITaxableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    excludeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    includeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAddressExcluded(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxOffice(
      _taxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenOracle(
      _tokenOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxRate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  disableAutoCalculateTax(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableAutoCalculateTax(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  excludeAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  includeAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAddressExcluded(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBurnThreshold(
    _burnThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxCollectorAddress(
    _taxCollectorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxOffice(
    _taxOffice: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxRate(
    _taxRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxTiersRate(
    _index: BigNumberish,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxTiersTwap(
    _index: BigNumberish,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenOracle(
    _tokenOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxRate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    disableAutoCalculateTax(overrides?: CallOverrides): Promise<void>;

    enableAutoCalculateTax(overrides?: CallOverrides): Promise<void>;

    excludeAddress(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    includeAddress(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAddressExcluded(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxOffice(_taxOffice: string, overrides?: CallOverrides): Promise<void>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setTokenOracle(
      _tokenOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    taxRate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    excludeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    includeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAddressExcluded(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxOffice(
      _taxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenOracle(
      _tokenOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxRate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    excludeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    includeAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAddressExcluded(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxOffice(
      _taxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenOracle(
      _tokenOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxRate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
