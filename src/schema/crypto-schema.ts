import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
    ImageUrl: z.string(),
  }),
});

export const CryptosResponseSchema = z.array(CryptoResponseSchema);

export const FormCryptoSchema = z.object({
  currency: z.string(),
  criptocurrency: z.string(),
});

export const PriceDataSchema = z.object({
  IMAGEURL: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  PRICE: z.string(),
  LASTUPDATE: z.string(),
});
