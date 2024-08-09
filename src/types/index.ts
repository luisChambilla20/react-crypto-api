import { z } from "zod";
import {
  CryptoResponseSchema,
  CurrencySchema,
  FormCryptoSchema,
  PriceDataSchema,
} from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoResponse = z.infer<typeof CryptoResponseSchema>;

export type FormCryptos = z.infer<typeof FormCryptoSchema>;

export type PriceData = z.infer<typeof PriceDataSchema>;
