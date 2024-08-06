import React, { FC, useState } from 'react'
import { produce } from 'immer'
const ImmerDemo: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: 'kk', age: 18 })
  function changeAge() {
    setUserInfo(
      produce(draft => {
        draft.age = 21
        draft.name = 'leo'
      })
    )
  }

  return (
    <div>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>changeAge111</button>
    </div>
  )
}

export default ImmerDemo
