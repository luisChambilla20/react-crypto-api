import { useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { FormCryptos } from "../types";
import { toast } from "react-toastify";

export default function CriptoSearchForm() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const fetchCurrency = useCryptoStore((state) => state.fetchCurrency);

  const [formCrypto, setFormCrypto] = useState<FormCryptos>({
    currency: "",
    criptocurrency: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormCrypto({
      ...formCrypto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(formCrypto).includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    fetchCurrency(formCrypto);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={formCrypto.currency}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
          value={formCrypto.criptocurrency}
        >
          <option value="">-- Seleccione --</option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
