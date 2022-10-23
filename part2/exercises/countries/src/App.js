import { useEffect, useState } from "react";
import axios from "axios";
import Show from "./components/Show";

const App = () => {
  const [countries, setCountries] = useState([
    {
      name: {
        common: "Japan",
      },
      capital: ["Tokyo"],
      area: 12000,
      languages: {
        ara: "Arabic",
        arc: "Aramaic",
        ckb: "Sorani",
      },
      flags: {
        png: "https://flagcdn.com/w320/bg.png",
      },
    },
  ]);
  const [filtered, setFiltered] = useState("");
  const filter = (event) => {
    setFiltered(event.target.value);
  };
  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);
  const countriesFilter = () => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(filtered.toLowerCase());
    });
  };
  const updateText1 = (text) => {
    setFiltered(text);
  };
  return (
    <div>
      find countries <input value={filtered} onChange={filter}></input>
      <Show
        countriesFiltered={countriesFilter()}
        updateText={updateText1}
      ></Show>
      {/* {countriesFilter().map((country) => {
        console.log("The country is ", country);
        return <Country props={country}></Country>;
      })} */}
    </div>
  );
};

export default App;
