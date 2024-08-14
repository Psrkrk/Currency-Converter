import { useState } from 'react'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import {InputBox} from './components' 

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertdata, setconvertdata] = useState(0)

  const currencyinfo = usecurrencyinfo(from)

 const option = Object.keys(currencyinfo)

 const swap = () =>{
  setfrom(to)
  setto(from)
  setconvertdata(amount)
  setamount(convertdata)
 }

 const convert = () =>
   {setconvertdata(amount*currencyinfo[to])}
 
 
 return (
  <div
      className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
      style={{ 
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/background/20240518/pngtree-best-amazing-wonderful-this-photo-take-picture-for-your-work-ai-image_15796853.jpg')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert();
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount= {amount}
                          currencyoption = {option}
                          oncurrencychange = {(currency) => setamount(amount)}
                          selectcurrency = {from}
                          onamountchange={(amount ) => 
                            setamount(amount)
                          }
                    
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount= {convertdata}
                          currencyoption = {option}
                          oncurrencychange = {(currency) =>
                            setto(currency)
                          }
                          selectcurrency = {from}
                        
                    
                          
                      />
                  </div>
                  <button type="submit" className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
 )
};
export default App
