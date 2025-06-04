
import { Vault, Transaction } from "./types";

export const mockVaults: Vault[] = [
  {
    id: "1",
    name: "Team Vesting Q1 2024",
    recipient: "0x742d35Cc6634C0532925a3b8D99B5c55B7b4f78c",
    amount: 50000,
    token: "USDC",
    unlockDate: "2024-07-15T10:00:00",
    createdDate: "2024-01-15T10:00:00",
    status: "active",
    progress: 65,
    description: "Quarterly vesting for development team"
  },
  {
    id: "2", 
    name: "Charity Donation",
    recipient: "0x8ba1f109551bD432803012645Hac136c54s9ABC",
    amount: 10000,
    token: "ETH",
    unlockDate: "2024-12-25T00:00:00",
    createdDate: "2024-01-01T10:00:00",
    status: "active",
    progress: 25,
    description: "Holiday charity contribution"
  },
  {
    id: "3",
    name: "Bounty Reward",
    recipient: "0x123ABC456def789GHI012JKL345MNO678PQR901",
    amount: 5000,
    token: "USDC",
    unlockDate: "2024-05-01T09:00:00",
    createdDate: "2024-04-01T10:00:00",
    status: "completed",
    progress: 100,
    description: "Bug bounty program reward"
  },
  {
    id: "4",
    name: "Investment Lock",
    recipient: "0x987ZYX654wvu321TSR098PON765MLK432JIH109",
    amount: 25000,
    token: "BTC",
    unlockDate: "2024-08-30T15:30:00",
    createdDate: "2024-03-01T10:00:00",
    status: "active",
    progress: 40,
    description: "Long-term investment hold"
  },
  {
    id: "5",
    name: "Contractor Payment",
    recipient: "0xABC123DEF456GHI789JKL012MNO345PQR678STU",
    amount: 7500,
    token: "DAI",
    unlockDate: "2024-06-01T12:00:00",
    createdDate: "2024-05-01T10:00:00",
    status: "pending",
    progress: 0,
    description: "Milestone-based contractor payment"
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: "tx1",
    vaultId: "3",
    vaultName: "Bounty Reward",
    type: "unlocked",
    amount: 5000,
    token: "USDC",
    date: "2024-05-01T09:05:00",
    recipient: "0x123ABC456def789GHI012JKL345MNO678PQR901",
    txHash: "0xabcd1234efgh5678ijkl9012mnop3456qrst7890"
  },
  {
    id: "tx2",
    vaultId: "1",
    vaultName: "Team Vesting Q1 2024",
    type: "created",
    amount: 50000,
    token: "USDC",
    date: "2024-01-15T10:00:00",
    recipient: "0x742d35Cc6634C0532925a3b8D99B5c55B7b4f78c",
    txHash: "0x1234abcd5678efgh9012ijkl3456mnop7890qrst"
  },
  {
    id: "tx3",
    vaultId: "2",
    vaultName: "Charity Donation",
    type: "created",
    amount: 10000,
    token: "ETH",
    date: "2024-01-01T10:00:00",
    recipient: "0x8ba1f109551bD432803012645Hac136c54s9ABC",
    txHash: "0x5678efgh9012ijkl3456mnop7890qrst1234abcd"
  }
];
