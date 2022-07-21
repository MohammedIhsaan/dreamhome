import React, { useCallback,useState } from 'react'

export default function SearchBox() {
    const [state, setstate] = useState('')
    
    const debounce = function(fn,delay){
        let timer
        return function(...args){
            let context = this
            clearTimeout(timer)
            timer = setTimeout(()=>fn.apply(context,args),delay)
        }
    }
    const fetchData = (e)=>{
        console.log('typing',e)
        
     }
     const optimizied =useCallback(debounce(fetchData,1000),[])

  return (
    <div>
        <input type='text' placeholder='serach' onChange={(e)=>optimizied(e.target.value)}/>
    </div>
  )
}
