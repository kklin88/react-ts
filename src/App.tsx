import React from 'react'
// import type { ChangeEvent } from 'react'
// import useTitle from './hooks/useTitle'
// import useMouse from './hooks/useMouse'
// import logo from './logo.svg'
// import './App.css'
// import List2 from './List2'
// import type { MouseEvent } from 'react'
// import ImmerDemo from './immerDemo'
// import UseRefDemo from './UseRefDemo'
// import UseMemoDemo from './UseMemoDemo'
// import UseCallBackDemo from './UseCallBackDemo'
// import ClosureTrap from './ClosureTrap'
// import StyledComponentsDemo from './StyledComponentsDemo'
import FormElementDemo from './FormElementsDemo'
function App() {
  // useTitle('hello hooks') //自定義hook
  // const [x, y] = useMouse()
  // const text = 'val'
  // const [text, setText] = useState<string>('hello')
  // function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   setText(event.target.value)
  // }
  return (
    <>
      {/* <List2 /> */}
      {/* <ImmerDemo /> */}
      {/* <UseCallBackDemo /> */}
      {/* app page {x} {y} */}
      {/* <ClosureTrap /> */}
      {/* <StyledComponentsDemo /> */}
      <FormElementDemo />
    </>
  )
}

export default App
