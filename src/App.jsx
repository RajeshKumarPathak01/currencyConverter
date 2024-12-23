import { useEffect, useState } from "react";
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the Font Awesome React component
import { faCodeCompare, faUserClock } from "@fortawesome/free-solid-svg-icons";
import CurrencyApi from "./components/CurrencyApi";
import pex2 from './assets/pex2.jpg'


function App() {
  const [from, setFrom] = useState("USD");
  const [unit, setUnit] = useState("");
  const [To, setTo] = useState("INR");
  const [trigger, setTrigger] = useState(false);
  const [err, setError] = useState(false);
  const [value, setValue] = useState("");
  const[data,setData]=useState({});




 useEffect(()=>{
  const fetchData=(async ()=>{
   try {
     if (trigger) {
       const response = await fetch(
         `https://hexarate.paikama.co/api/rates/latest/${from}?target=${To}`
       );
       if (response.ok) {
         const resp = await response.json();
         const filteredData = JSON.parse(JSON.stringify(resp));
         console.log(filteredData);
         
          setData(filteredData && filteredData.data && filteredData.data.mid*unit);
          setTrigger(false);
          setError("")
       }else{
        console.error("Http status",response.status)
       }
     }
   } catch (error) {
    console.log(`Error fetching data: , ${error.message}`);
   }
  })
  fetchData();

 },[from,To,trigger,unit])  
 
  const commonCurrencies = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "INR", name: "Indian Rupee" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan Renminbi" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "KRW", name: "South Korean Won" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "ZAR", name: "South African Rand" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "THB", name: "Thai Baht" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "DKK", name: "Danish Krone" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "COP", name: "Colombian Peso" },
    { code: "TWD", name: "New Taiwan Dollar" },
    { code: "VND", name: "Vietnamese Dong" },
  ];

  const handleClickCurrency = () => {
  
    if (unit) {
      setTrigger(true);
    } else {
      setError("* Note : Please Enter valid Amount");
    }
    
  };

const handleSwap=(()=>{

    setFrom(To);
    setTo(from);

})

  return (
    <>

      <div
        className="w-screen h-screen bg-cover text-black text-pretty "
        style={{ backgroundImage: `url(${pex2})` }}
      >
        <div
          className=" justify-center text-center   max-h-fit w-fit bg-white/30 border-white border-2 text-black 
        backdrop-blur-xl  rounded-xl mx-[30%] relative top-[15%] sm:max-h-fit sm:w-[60%] sm:text-[12px] sm:font-bold"
        >
          <h1 className="text-white">Currency Converter</h1>
          <hr className="mx-6 font-bold py-1 mt-4" />
          <div className="bg-white  w-fit h-[120px] px-3 py-3 mx-8 mt-5 -mb-3 rounded-lg  text-black sm:mx-3">
            <div className=" text-black text-bold">
              <span className=" -left-8  -ml-[58%] sm:-ml-4 sm:font-medium sm:text-sm text-bold text-xl">
                From
              </span>

              <span className=" -right-14 float-right mr-2 text-xl sm:font-medium sm:text-sm ">
                Currency Type
              </span>
            </div>

            <div className=" relative left-8 ml-4 sm:ml-1">
              <input
                type="number"
                name="FromCurrency"
                id="FromCurrency"
                onChange={(e) => setUnit(e.target.value)}
                // value={unit}
                placeholder="please enter amount"
                className=" float-left   outline-none py-2 mt-2 text-md   bg-slate-200 border-blue-400 border-2 rounded-lg  text-center font-bold w-[50%] -ml-10"
              />

              <select
                name="currencyListFrom"
                id="currencyListFrom"
                className="border-blue-400 border-2 rounded-lg py-2 my-2  px-3 mr-6 w-[47%] "
                onChange={(ev) => setFrom(ev.target.value)}
                value={from}
              >
                <option value="Usd">Us Dollar</option>
                {commonCurrencies.map((code, keys) => {
                  return (
                    <option key={keys} value={code.code}>
                      {code.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <button
            className=" bg-blue-700 text-white text-center  py-3 hover:bg-blue-800  w-[25%] mb-[2]  "
            onClick={handleSwap}
          >
            Swap
            <FontAwesomeIcon
              icon={faCodeCompare}
              className="super-crazy-colors"
              size="lg"
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                color: "white",
                marginLeft: "15px",
              }}
            />
          </button>

          <div className="bg-white w-fit h-[120px] px-3 py-3 mx-8 -mt-3 rounded-lg  text-black sm:mx-3">
            <div className=" text-black text-bold">
              <span className=" -left-8  -ml-[64%] sm:-ml-4 sm:font-medium sm:text-sm text-bold text-xl">
                To
              </span>
              <span className=" -right-14 float-right mr-2 text-xl sm:font-medium sm:text-sm">
                Currency Type
              </span>
            </div>

            <div className=" relative left-8 ml-4 sm:ml-1">
              <input
                type="number"
                name="ToCurrency"
                id="ToCurrency"
                readOnly
                value={parseFloat(data).toFixed(2)}
                className=" float-left   outline-none py-2 mt-2 text-md   bg-slate-200 border-blue-400 border-2 rounded-lg  text-center font-bold w-[50%] -ml-10"
              />

              <select
                name="currencyListFrom"
                id="currencyListFrom"
                className="border-blue-400 border-2 rounded-lg py-2 my-2  px-3 mr-6 w-[47%] "
                onChange={(ev) => setTo(ev.target.value)}
                value={To}
              >
                <option value="Inr">Indian Rupee</option>
                {commonCurrencies.map((code, keys) => {
                  return (
                    <option key={keys} value={code.code}>
                      {code.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <button
            onClick={handleClickCurrency}
            className=" bg-blue-700 text-white text-center px-2 py-3 hover:bg-blue-800 my-5 w-[85%] hover:text-md"
          >
            Convert {from} to {To}
          </button>
          <span className="text-red-950 flex flex-start ml-10 mb-5 font-bold">
            {err}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
