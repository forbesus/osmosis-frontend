import { OS, Wallet } from "@cosmos-kit/core";

export const trustMobileInfo: Wallet = {
  name: "trust-mobile",
  prettyName: "Trust Mobile",
  logo: "https://ia804606.us.archive.org/28/items/github.com-trustwallet-assets_-_2022-01-03_21-15-20/cover.jpg",
  mode: "wallet-connect",
  mobileDisabled: false,
  rejectMessage: {
    source: "Request rejected",
  },
  downloads: [
    {
      device: "mobile",
      os: "android",
      link: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=en&gl=US&pli=1",
    },
    {
      device: "mobile",
      os: "ios",
      link: "https://apps.apple.com/us/app/trust-wallet/id1567851089",
    },
    {
      link: "https://trustwallet.com/download",
    },
  ],
  connectEventNamesOnWindow: ["trust_keystorechange"],
  walletconnect: {
    name: "Trust Wallet",
    projectId:
      "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    // mobile: {
    //   native: {
    //     ios: "trust:",
    //     android: "intent:",
    //   },
    // },
    formatNativeUrl: (
      appUrl: string,
      wcUri: string,
      os: OS | undefined,
      _name: string
    ): string => {
      const plainAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      const encodedWcUrl = encodeURIComponent(wcUri);
      console.log(appUrl, wcUri);
      console.log("encodedWcUrl");
      console.log(encodedWcUrl);
      switch (os) {
        case "ios":
          return `${plainAppUrl}://${encodedWcUrl}`;
        case "android":
          return `${plainAppUrl}://${encodedWcUrl}`;
        default:
          return `${plainAppUrl}://${encodedWcUrl}`;
      }
    },
  },
};
