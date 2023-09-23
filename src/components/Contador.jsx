import { useEffect, useRef } from "react"
import { useDispatch, useStore } from "../context/displayContext"

const Contador = () => {
  const store = useStore()
  const dispatch = useDispatch()

  const inputRef = useRef(null)
  const miRef = useRef(null)
  console.log(miRef)
  const handleBtn = () => inputRef.current.focus()

/*   useEffect(() => {
    if (miRef.current === 0) {
      miRef.current = miRef.current + 1
      return
    }
    console.log("el estado cambio")
  }, [store]) */

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
      <input ref={inputRef} />
      <button onClick={handleBtn}>Hola</button>
    </>
  )
}
export default Contador