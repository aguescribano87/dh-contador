import { useContext } from "react"
import { DisplayContext } from "../context/displayContext"

const Contador = () => {
  const [store, dispatch] = useContext(DisplayContext)
  const { display } = store
  return (
    <>
      <span className='nameDisplay'>{display}</span>
      <div className='containerButtons'>
        <button onClick={() => dispatch({ type: 'RESTAR_CINCO', payload: 5 })}> -5 </button>
        <button onClick={() => dispatch({ type: 'RESTAR_UNO' })}> -1 </button>
        <button onClick={() => dispatch({ type: 'RESET' })}> Reset </button>
        <button onClick={() => dispatch({ type: 'SUMAR_UNO' })}> +1 </button>
        <button onClick={() => dispatch({ type: 'SUMAR_CINCO', payload: 5 })}> +5 </button>
      </div>
    </>
  )
}
export default Contador