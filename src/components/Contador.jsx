import { useRef } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { DisplayContext } from "../context/displayContext"

const Contador = () => {
  const [store, dispatch] = useContext(DisplayContext)
  const miRef = useRef(null)
  const refValue = useRef(0)

  const click = ()=> miRef.current.focus()
  
  useEffect(()=>{
    if (refValue.current == 0) {
      refValue.current = refValue.current +1
      return
    }
    console.log(`El estado cambio y su valor es ${store}`)
  },[store])

  return (
    <>
      <span className='nameDisplay'>{store}</span>
      <div className='containerButtons'>
        <button onClick={() => dispatch({ type: 'RESTAR_CINCO', payload: 5 })}> -5 </button>
        <button onClick={() => dispatch({ type: 'RESTAR_UNO' })}> -1 </button>
        <button onClick={() => dispatch({ type: 'RESET' })}> Reset </button>
        <button onClick={() => dispatch({ type: 'SUMA_UNO' })}> +1 </button>
        <button onClick={() => dispatch({ type: 'SUMAR_CINCO', payload: 5 })}> +5 </button>
      </div>
      <input ref={miRef}/>
      <button onClick={click}>Click</button>
    </>
  )
}
export default Contador