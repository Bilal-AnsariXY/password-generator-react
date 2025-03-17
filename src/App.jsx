
import { useState,useCallback } from 'react'
import './App.css'
function App() {
  const [num,setSum] = useState(false);
  const [chart,setchart] = useState(false);
  const [ran,setRan] = useState(0);
  const [inp, setInp]=useState("")
 
  const fun = useCallback(()=>
  {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(chart == true)str += "!@#$%^&*()_+|}{~<>?";
    if(num == true)str += "1234567890";
    let ansStr = "";
    for(let i=0;i<ran;i++)
    {
      let x = Math.floor(Math.random()*(str.length));
      ansStr += str[x];
    }
    setInp(ansStr);
    ansStr = "";
  },[inp,ran,setSum,setchart])
  return (
    <>
      <div className='h-screen w-screen bg-black flex items-center justify-center'>
        <div className='h-max bg-gray-500 w-max p-5 rounded-lg'>
          <div className=''>
            <input type="text" placeholder='password' value={inp} className='rounded-lg w-auto bg-white mx-4 p-2'/>
            <button className='bg-gray-900 text-white p-2 mx-4 rounded-lg' onClick={fun}>Generate_Password</button>
          </div>
          <div className='flex justify-evenly  my-4'>
            <input type="range" value={ran} onChange={(e) => setRan(e.target.value)
            }/>
            <label>Range : {ran} </label>
            <input type="checkbox" onChange={(e)=>
              {
                if(e.target.checked)
                {
                  setSum(true)
                }
                else{
                  setSum(false)
                }
              }
            }/>
            <label>Number</label>
            <input type="checkbox" onChange={(e)=>
              {
                if(e.target.checked)
                {
                  setchart(true)
                }
                else{
                  setchart(false)
                }
              }
            } />
            <label>Charaters</label>

          </div>
        </div>
      </div>
    </>
  )
}
export default App