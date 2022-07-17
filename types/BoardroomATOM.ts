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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BoardroomATOMInterface extends utils.Interface {
  functions: {
    "allocateSeigniorage(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "boardroomHistory(uint256)": FunctionFragment;
    "canClaimReward(address)": FunctionFragment;
    "canWithdraw(address)": FunctionFragment;
    "claimReward()": FunctionFragment;
    "earned(address)": FunctionFragment;
    "epoch()": FunctionFragment;
    "exit()": FunctionFragment;
    "getLastSnapshotIndexOf(address)": FunctionFragment;
    "getTokenPrice()": FunctionFragment;
    "governanceRecoverUnsupported(address,uint256,address)": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "latestSnapshotIndex()": FunctionFragment;
    "members(address)": FunctionFragment;
    "nextEpochPoint()": FunctionFragment;
    "operator()": FunctionFragment;
    "reserveFund()": FunctionFragment;
    "rewardLockupEpochs()": FunctionFragment;
    "rewardPerShare()": FunctionFragment;
    "setLockUp(uint256,uint256)": FunctionFragment;
    "setOperator(address)": FunctionFragment;
    "setReserveFund(address)": FunctionFragment;
    "setStakeFee(uint256)": FunctionFragment;
    "setWithdrawFee(uint256)": FunctionFragment;
    "setWithdrawFeeMultiplier(uint256)": FunctionFragment;
    "share()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakeFee()": FunctionFragment;
    "token()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "treasury()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawFee()": FunctionFragment;
    "withdrawFeeMultiplier()": FunctionFragment;
    "withdrawLockupEpochs()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allocateSeigniorage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "boardroomHistory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "canClaimReward",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "canWithdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "earned", values: [string]): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getLastSnapshotIndexOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceRecoverUnsupported",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestSnapshotIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "members", values: [string]): string;
  encodeFunctionData(
    functionFragment: "nextEpochPoint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reserveFund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardLockupEpochs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLockUp",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOperator", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setReserveFund",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakeFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWithdrawFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWithdrawFeeMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "share", values?: undefined): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "stakeFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFeeMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLockupEpochs",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "allocateSeigniorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "boardroomHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canClaimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLastSnapshotIndexOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceRecoverUnsupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestSnapshotIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "members", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextEpochPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserveFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardLockupEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLockUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWithdrawFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWithdrawFeeMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "share", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFeeMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLockupEpochs",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(address,uint256)": EventFragment;
    "RewardAdded(address,uint256)": EventFragment;
    "RewardPaid(address,uint256)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type InitializedEvent = TypedEvent<
  [string, BigNumber],
  { executor: string; at: BigNumber }
>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type RewardAddedEvent = TypedEvent<
  [string, BigNumber],
  { user: string; reward: BigNumber }
>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

export type RewardPaidEvent = TypedEvent<
  [string, BigNumber],
  { user: string; reward: BigNumber }
>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export type StakedEvent = TypedEvent<
  [string, BigNumber],
  { user: string; amount: BigNumber }
>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber],
  { user: string; amount: BigNumber }
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface BoardroomATOM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BoardroomATOMInterface;

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
    allocateSeigniorage(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    boardroomHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        time: BigNumber;
        rewardReceived: BigNumber;
        rewardPerShare: BigNumber;
      }
    >;

    canClaimReward(
      member: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    canWithdraw(member: string, overrides?: CallOverrides): Promise<[boolean]>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    earned(member: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    epoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLastSnapshotIndexOf(
      member: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    governanceRecoverUnsupported(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _token: string,
      _share: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    latestSnapshotIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    members(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        lastSnapshotIndex: BigNumber;
        rewardEarned: BigNumber;
        epochTimerStart: BigNumber;
      }
    >;

    nextEpochPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    reserveFund(overrides?: CallOverrides): Promise<[string]>;

    rewardLockupEpochs(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    setLockUp(
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveFund(
      _reserveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStakeFee(
      _stakeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWithdrawFee(
      _withdrawFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWithdrawFeeMultiplier(
      _withdrawFeeMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    share(overrides?: CallOverrides): Promise<[string]>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawFeeMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawLockupEpochs(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  allocateSeigniorage(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  boardroomHistory(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      time: BigNumber;
      rewardReceived: BigNumber;
      rewardPerShare: BigNumber;
    }
  >;

  canClaimReward(member: string, overrides?: CallOverrides): Promise<boolean>;

  canWithdraw(member: string, overrides?: CallOverrides): Promise<boolean>;

  claimReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  earned(member: string, overrides?: CallOverrides): Promise<BigNumber>;

  epoch(overrides?: CallOverrides): Promise<BigNumber>;

  exit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLastSnapshotIndexOf(
    member: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

  governanceRecoverUnsupported(
    _token: string,
    _amount: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _token: string,
    _share: string,
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  latestSnapshotIndex(overrides?: CallOverrides): Promise<BigNumber>;

  members(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      lastSnapshotIndex: BigNumber;
      rewardEarned: BigNumber;
      epochTimerStart: BigNumber;
    }
  >;

  nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

  operator(overrides?: CallOverrides): Promise<string>;

  reserveFund(overrides?: CallOverrides): Promise<string>;

  rewardLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

  setLockUp(
    _withdrawLockupEpochs: BigNumberish,
    _rewardLockupEpochs: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOperator(
    _operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveFund(
    _reserveFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStakeFee(
    _stakeFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWithdrawFee(
    _withdrawFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWithdrawFeeMultiplier(
    _withdrawFeeMultiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  share(overrides?: CallOverrides): Promise<string>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeFee(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  treasury(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    allocateSeigniorage(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    boardroomHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        time: BigNumber;
        rewardReceived: BigNumber;
        rewardPerShare: BigNumber;
      }
    >;

    canClaimReward(member: string, overrides?: CallOverrides): Promise<boolean>;

    canWithdraw(member: string, overrides?: CallOverrides): Promise<boolean>;

    claimReward(overrides?: CallOverrides): Promise<void>;

    earned(member: string, overrides?: CallOverrides): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    getLastSnapshotIndexOf(
      member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    governanceRecoverUnsupported(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _token: string,
      _share: string,
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    latestSnapshotIndex(overrides?: CallOverrides): Promise<BigNumber>;

    members(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        lastSnapshotIndex: BigNumber;
        rewardEarned: BigNumber;
        epochTimerStart: BigNumber;
      }
    >;

    nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<string>;

    reserveFund(overrides?: CallOverrides): Promise<string>;

    rewardLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    setLockUp(
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOperator(_operator: string, overrides?: CallOverrides): Promise<void>;

    setReserveFund(
      _reserveFund: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStakeFee(
      _stakeFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWithdrawFee(
      _withdrawFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWithdrawFeeMultiplier(
      _withdrawFeeMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    share(overrides?: CallOverrides): Promise<string>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeFee(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<string>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Initialized(address,uint256)"(
      executor?: string | null,
      at?: null
    ): InitializedEventFilter;
    Initialized(executor?: string | null, at?: null): InitializedEventFilter;

    "RewardAdded(address,uint256)"(
      user?: string | null,
      reward?: null
    ): RewardAddedEventFilter;
    RewardAdded(user?: string | null, reward?: null): RewardAddedEventFilter;

    "RewardPaid(address,uint256)"(
      user?: string | null,
      reward?: null
    ): RewardPaidEventFilter;
    RewardPaid(user?: string | null, reward?: null): RewardPaidEventFilter;

    "Staked(address,uint256)"(
      user?: string | null,
      amount?: null
    ): StakedEventFilter;
    Staked(user?: string | null, amount?: null): StakedEventFilter;

    "Withdrawn(address,uint256)"(
      user?: string | null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(user?: string | null, amount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    allocateSeigniorage(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    boardroomHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canClaimReward(
      member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canWithdraw(member: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    earned(member: string, overrides?: CallOverrides): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLastSnapshotIndexOf(
      member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    governanceRecoverUnsupported(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _token: string,
      _share: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    latestSnapshotIndex(overrides?: CallOverrides): Promise<BigNumber>;

    members(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    reserveFund(overrides?: CallOverrides): Promise<BigNumber>;

    rewardLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    setLockUp(
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveFund(
      _reserveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStakeFee(
      _stakeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWithdrawFee(
      _withdrawFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWithdrawFeeMultiplier(
      _withdrawFeeMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    share(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeFee(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allocateSeigniorage(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    boardroomHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canClaimReward(
      member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canWithdraw(
      member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    earned(
      member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLastSnapshotIndexOf(
      member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceRecoverUnsupported(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _token: string,
      _share: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestSnapshotIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    members(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextEpochPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserveFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardLockupEpochs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setLockUp(
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveFund(
      _reserveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStakeFee(
      _stakeFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWithdrawFee(
      _withdrawFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWithdrawFeeMultiplier(
      _withdrawFeeMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    share(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawFeeMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawLockupEpochs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
