import React, { FC, useState, useRef, useEffect } from 'react'

const Demo: FC = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  useEffect(() => {
    countRef.current = count
  }, [count])
  function add() {
    setCount(count + 1)
  }

  //閉包
  // function alertFn() {
  //   setTimeout(() => {
  //     alert(count) //count 2閉包 異步情況獲取的是舊的值
  //   }, 2000)
  // }
  function alertFn() {
    setTimeout(() => {
      alert(countRef.current) //ref 引用類型
    }, 2000)
  }

  return (
    <>
      <p>閉包陷阱</p>
      <div>
        <p>count {count}</p>
        <button onClick={add}>add count</button>
        <button onClick={alertFn}>alart</button>
      </div>
    </>
  )
}
export default Demo
