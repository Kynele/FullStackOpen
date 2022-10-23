import React from "react";
import Country from "./Country";

const Show = (props) => {
  if (props.countriesFiltered.length > 10) {
    {
    }
    return <div>Too many matches, speficy another filter</div>;
  } else if (
    props.countriesFiltered.length > 1 &&
    props.countriesFiltered.length < 10
  ) {
    return props.countriesFiltered.map((country) => {
      return (
        <div>
          {country.name.common}
          <button
            onClick={() => {
              props.updateText(country.name.common);
            }}
          >
            Show
          </button>
        </div>
      );
    });
  } else if (props.countriesFiltered.length == 1) {
    return <Country props={props.countriesFiltered[0]}></Country>;
  } else {
    return <div>No matches</div>;
  }
};

export default Show;
