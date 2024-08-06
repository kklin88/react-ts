import React, { FC, useCallback, useState } from 'react'

const Demo: FC = () => {
  const [text, setText] = useState('helo')
  const fn1 = () => {
    console.log('fn1', text)
  }
  const fn2 = useCallback(() => {
    console.log('fn2', text)
  }, [text])
  return (
    <>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <div>
        <button onClick={fn1}>fn1</button>
        <button onClick={fn2}>fn2</button>
      </div>
    </>
  )
}

export default Demo
