import React, { useState } from "react";

export default function JsonConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  function changeInput(event) {
    setInputValue(event.target.value);
  }

  function convertJson() {
    const newObj = JSON.parse(inputValue);
    //JSON.parse(inputValue);
    console.log(inputValue);
    /* For the keys of mainDetailsData, meterDetailsData, usageRatesData 
      and auxilliaryDetailsData, convert each key-value pair into and object
      with keys of key and value and values of the key and value given
      */
    const categoriesToChange = [
      "AuxiliaryDetailsData",
      "MainDetailsData",
      "MeterDetailsData",
      "UsageRatesData",
    ];

    for (let category in newObj.docusignDetails) {
      if (categoriesToChange.includes(category)) {
        const currentCategory = newObj.docusignDetails[category];
        console.log(category);
        const newCategory = [];
        for (let key in currentCategory) {
          newCategory.push({ Key: key, Value: currentCategory[key] });
        }
        console.log(newCategory);
        newObj.docusignDetails[category] = newCategory;
      } else {
        continue;
      }
    }

    //const convertedJson = JSON.stringify(newObj);
    //console.log(convertedJson);

    setOutputValue(JSON.stringify(newObj));
  }

  return (
    <div>
      <h4>JSON Converter</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1000px",
          justifyContent: "space-evenly",
          backgroundColor: "pink",
          alignItems: "center",
        }}
      >
        <br></br>

        <input
          type="text"
          onChange={changeInput}
          value={inputValue}
          style={{
            backgroundColor: "white",
            height: "100px",
            width: "300px",
            wordWrap: "break-word",
          }}
        ></input>
        <button onClick={convertJson} style={{ height: "50px" }}>
          Convert
        </button>
        <br></br>
        <p
          style={{
            backgroundColor: "white",
            height: "400px",
            width: "300px",
            color: "black",
            fontSize: "8px",
            wordWrap: "break-word",
          }}
        >
          {outputValue}
        </p>
      </div>
    </div>
  );
}
