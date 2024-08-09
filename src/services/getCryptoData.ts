import axios from "axios";
import {
  CryptosResponseSchema,
  PriceDataSchema,
} from "../schema/crypto-schema";
import { FormCryptos } from "../types";

export const getCryptoData = async () => {
  try {
    const {
      data: { Data },
    } = await axios.get(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    );

    const result = CryptosResponseSchema.safeParse(Data);

    if (result.success) {
      return result.data;
    } else {
      console.error("Error parsing cryptos response: ", result.error);
    }
  } catch (error) {
    console.error("Error fetching cryptos: ", error);
  }
};

export const getPriceData = async (pair: FormCryptos) => {
  try {
    const {
      data: { DISPLAY },
    } = await axios.get(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    );

    const result = PriceDataSchema.safeParse(
      DISPLAY[pair.criptocurrency][pair.currency]
    );

    if (result.success) {
      return result.data;
    } else {
      console.error("Error parsing price data: ", result.error);
    }
  } catch (error) {
    console.error("Error fetching price data: ", error);
  }
};
