import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoResponse, FormCryptos, PriceData } from "./types";
import { getCryptoData, getPriceData } from "./services/getCryptoData";

type CryptoStore = {
  cryptoCurrencies: CryptoResponse[];
  results: PriceData;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchCurrency: (pair: FormCryptos) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    loading: false,
    results: {} as PriceData,

    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptoData();
      set({ cryptoCurrencies });
    },

    fetchCurrency: async (pair: FormCryptos) => {
      set({ loading: true });
      const results = await getPriceData(pair);
      set({ results, loading: false });
    },
  }))
);
