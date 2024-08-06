import React, { useRef, FC } from 'react'

// const Demo: FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null)
//   function selectInput() {
//     const inputElement = inputRef.current
//     if (inputElement) inputElement.select()
//   }
//   return (
//     <div>
//       <input ref={inputRef} defaultValue="hello" type="text" />
//       <button onClick={selectInput}>選中input</button>
//     </div>
//   )
// }
const Demo: FC = () => {
  const nameRef = useRef('kk')
  function changeName() {
    nameRef.current = 'leo'
    console.log(nameRef.current)
  }
  return (
    <div>
      <p>name{nameRef.current}</p>
      <div>
        <button onClick={changeName}>change name</button>
      </div>
    </div>
  )
}
export default Demo
