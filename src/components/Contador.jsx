import { useContext } from "react"
import { DisplayContext, useStore } from "../context/displayContext"

const Contador = () => {
  const [store, dispatch] = useContext(DisplayContext)
  
  return (
    <>
      <span className='nameDisplay'>{store}</span>
      <div className='containerButtons'>
        <button onClick={() => dispatch({ type: "RESTAR", payload: 5 })}> -5 </button>
        <button onClick={() => dispatch({ type: "RESTAR", payload: 1 })}> -1 </button>
        <button onClick={() => dispatch({})}> Reset </button>
        <button onClick={() => dispatch({ type: "SUMAR", payload: 1 })}> +1 </button>
        <button onClick={() => dispatch({ type: "SUMAR", payload: 5 })}> +5 </button>
      </div>
    </>
  )
}
export default Contador