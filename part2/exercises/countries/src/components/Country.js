import React from "react";
import Language from "./Language";

const Country = ({ props }) => {
  let language = Object.values(props.languages);
  // console.log(language);

  return (
    <div>
      <h1>{props.name.common}</h1>
      {props.capital === undefined ? (
        <div></div>
      ) : (
        <div>capital:{props.capital[0]}</div>
      )}
      <div>area {props.area}</div>
      <h3>Languages:</h3>
      <ul>
        {language.map((whatLanguage) => () => {
          console.log("Language:", whatLanguage);
          return (
            <Language key={whatLanguage} language={whatLanguage}></Language>
          );
        })}
      </ul>
    </div>
  );
};
export default Country;
