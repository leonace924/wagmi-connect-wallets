export function truncateWalletAddress(
  walletAddress,
  startLength = 6,
  endLength = 4
) {
  if (!walletAddress || typeof walletAddress !== "string") {
    return "Invalid address";
  }

  if (walletAddress.length < startLength + endLength) {
    return walletAddress;
  }

  // Tronque l'adresse
  const truncatedAddress =
    walletAddress.slice(0, startLength) +
    "..." +
    walletAddress.slice(-endLength);

  return truncatedAddress;
}
