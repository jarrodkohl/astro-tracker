import React, { useState } from "react";
import { Connection, PublicKey, AccountInfo } from '@solana/web3.js';

const WalletChecker: React.FC = () => {
  const [walletAddress, setWallerAddress] = useState<string>('');
  const [walletInfo, setWalletInfo] = useState<AccountInfo<Buffer> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWallerAddress(event.target.value);
  };

  const handleSubmit =async (event:React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const publicKey = new PublicKey(walletAddress);
      const accountInfo = await connection.getAccountInfo(publicKey);
      setWalletInfo(accountInfo);
    } catch (error) {
      console.error('Error fetching wallet info:', error);
      setWalletInfo(null);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Wallet Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={walletAddress}
          onChange={handleAddressChange}
          placeholder="Enter Solana Wallet Address"
        />
        <button type="submit">Check Wallet</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {walletInfo && (
        <div>
          <h2>Wallet Information</h2>
          <pre>{JSON.stringify(walletInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );

};

export default WalletChecker;



// async function getWalletInfo(walletAddress) {
//   const connection = new Connection("https://api.mainnet-beta.solana.com");
//   const publicKey = new PublicKey(walletAddress);
//   const accountInfo = await connection.getAccountInfo(publicKey);
//   console.log(accountInfo); // Process and display this information as needed
// }

