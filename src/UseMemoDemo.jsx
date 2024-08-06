import React, { useMemo, useState, FC } from 'react'

const Demo: FC = () => {
  console.log('demo...')
  const [num1, SetNum1] = useState(10)
  const [num2, SetNum2] = useState(20)
  const [text, SetText] = useState('text')
  const sum = useMemo(() => {
    console.log('gen sum', num1 + num2)
    return num1 + num2
  }, [num1, num2])
  return (
    <>
      <p>{sum}</p>
      <p>
        {num1}
        <button
          onClick={() => {
            SetNum1(num1 + 1)
          }}
        >
          add num1
        </button>
      </p>
      <p>
        {num2}
        <button
          onClick={() => {
            SetNum2(num2 + 1)
          }}
        >
          add num2
        </button>
      </p>
      <div>
        <input type="text" onChange={e => SetText(e.target.text)} value={text} />
      </div>
    </>
  )
}

export default Demo
