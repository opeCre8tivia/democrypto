import { MoralisNextApi } from "@moralisweb3/next";
let key = process.env.MORALIS_API_KEY ? process.env.MORALIS_API_KEY : ""
export default MoralisNextApi({
     apiKey:key,
     authentication: {
        domain:'goldpointofsale.com',
        uri: process.env.NEXTAUTH_URL as string,
        timeout: 120,
      },
    });