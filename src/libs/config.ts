import { http, createConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

const projectId = "2b9b340fa18e8b5d57fb3ed8e9821bd3";

export const config = createConfig({
  chains: [mainnet, polygon],
  connectors: [
    coinbaseWallet({
      appName: "The Next Gem — AI",
    }),
    walletConnect({ projectId }),
    injected({
      target: "okxWallet",
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
});
