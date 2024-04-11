import { Button } from "./components/ui/Button";
import { Dropdown } from "./components/ui/Dropdown";
import { Grid, Item } from "./components/ui/Grid";
import { Corner } from "./components/ui/Corner";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Icon } from "@iconify/react";
import { truncateWalletAddress } from "./utils/wallet";
import "./App.scss";

function App() {
  const { address: account } = useAccount();
  const { connectors, connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  console.log(connectors)

  const listWallet = [
    {
      name: "Metamask",
      icon: "arcticons:metamask",
      desc: "Connect to your Metamask",
      connector: connectors.find((c) => c.type.includes("injected")),
    },
    {
      name: "WalletConnect",
      icon: "simple-icons:walletconnect",
      desc: "Connect to your WalletConnect",
      connector: connectors.find((c) => c.type.includes("walletConnect")),
    },
    {
      name: "OKX Wallet",
      icon: "arcticons:okx",
      desc: "Connect with OKX Wallet",
      connector: connectors.find((c) => c.id.includes("okex.wallet")),
      // disabled: !!window["okxwallet"],
    },
    // {
    //   name: "Binance Wallet",
    //   icon: "simple-icons:binance",
    //   desc: "Connect with Binance Chain Wallet",
    //   disabled: true
    // },
    {
      name: "Coinbase Wallet",
      icon: "tabler:brand-coinbase",
      desc: "Connect with Coinbase",
      connector: connectors.find((c) => c.type.includes("coinbase")),
    },
  ];

  const handleDisconnect = () => {
    disconnect();
  };

  const ButtonPanel = () => {
    if (account) {
      return (
        <Dropdown
          opener={
            <Button icon="logos:metamask-icon">
              {truncateWalletAddress(account)}
            </Button>
          }
        >
          <Button icon="carbon:wallet" onClick={handleDisconnect}>
            Disconnect your wallet
          </Button>
        </Dropdown>
      );
    } else {
      return <Button icon="carbon:wallet">Connect your wallet</Button>;
    }
  };

  const WagmiWallet = ({ name, icon, desc, disabled, connector }) => {
    const handleConnect = async () => {
      if (!connector) return;

      await connectAsync({ connector });
    };

    return (
      <div
        className="wallet"
        onClick={!disabled ? () => handleConnect() : undefined}
        data-disabled={disabled}
      >
        <Icon icon={icon} />
        <h6>{name}</h6>
        <p>{desc}</p>
        <Corner />
        <Corner color="primary" className="corner-hover" />
      </div>
    );
  };

  return (
    <>
      <ButtonPanel />
      <Grid className="grid-wallet">
        {listWallet.map((wallet, id) => (
          <Item key={id}>
            <WagmiWallet {...wallet} />
          </Item>
        ))}
      </Grid>
    </>
  );
}

export default App;
