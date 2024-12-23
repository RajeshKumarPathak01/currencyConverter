import React, { useEffect, useState } from 'react'



function  CurrencyApi(currencyA, currencyB) {

    const [data, setData] = useState({});

    useEffect(() => {

        const fetchData = (async () => {
            try {
                const result = await fetch(`https://hexarate.paikama.co/api/rates/latest/${currencyA}?target=${currencyB}`);
             
               
                if (result.status!=200) {
                    throw new Error(`Http Error : ${result.status}`)
                } 
                const res = await result.json();
                setData(res);


            } catch (error) {
                console.log(`Error fetching data: , ${error.message}`);
            }
        })
         fetchData();

    }, [currencyA, currencyB]);

    console.log(data);
    return {data};
}



export default CurrencyApi
