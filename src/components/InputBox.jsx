
import React, {useId} from "react";


function InputBox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoption = [],
    selectcurrency = "usd",
    amountdisable = false,
    currencydisable = false,
     className = "",
}) {
   
const amountinputid = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            
            <div className="w-1/2">
                <label htmlFor={amountinputid}  className="inline-block mb-2 text-black/40">
                    {label}
                </label>
                <input
                    id = {amountinputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountdisable}
                    value = {amount}
                    onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-wrap justify-end w-1/2 text-right">
                <p className="w-full mb-2 text-black/40">Currency Type</p>
                <select
                    className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                    value={selectcurrency}
                    onChange={(e ) => oncurrencychange && oncurrencychange(e.target.value)}
                    disabled = {currencydisable}
                >
                    
                      {currencyoption.map((currency) => (
                        <option key={currency} value=
                        {currency}>
                            {currency}
                            
                        </option>
                
                      ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
