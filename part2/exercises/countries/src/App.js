import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState([
    {
      name: {
        common: "testName",
      },
      capital: ["Test Capital"],
      area: 12000,
      languages: {
        ara: "Arabic",
        arc: "Aramaic",
        ckb: "Sorani",
      },
    },
  ]);
  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);
  return (
    <div>
      {countries.map((country) => {
        console.log("The country is ", country);
        return <Country props={country}></Country>;
      })}
    </div>
  );
};

export default App;
