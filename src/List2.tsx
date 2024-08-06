import React, { FC, useState, useEffect } from 'react'
import QuestionCard from './components/ QuestionCard'
import { produce } from 'immer'
const List2: FC = () => {
  //數組是依賴，空數組無依賴在第一次加載時執行
  //當某些state更新時執行
  useEffect(() => {
    console.log('ajax')
    return () => {
      console.log('銷毀')
    }
  }, [])
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '問卷1', isPublish: false },
    { id: 'q2', title: '問卷2', isPublish: true },
    { id: 'q3', title: '問卷3', isPublish: false },
  ])

  function edit(id: string) {
    console.log('edit', id)
  }
  function add() {
    const r = Math.random().toString().slice(-3)

    // setQuestionList(
    //   //新增 concat
    //   questionList.concat({
    //     id: 'q' + r,
    //     title: '問卷' + r,
    //     isPublish: false,
    //   })
    // )
    setQuestionList(
      //新增 immer方式使用draft直接push新的數據
      produce(draft => {
        draft.push({ id: 'q' + r, title: '問卷' + r, isPublish: false })
      })
    )
  }
  function deleteQuestion(id: string) {
    //刪除 filter
    // setQuestionList(
    //   questionList.filter(q => {
    //     if (q.id === id) return false
    //     else return true
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        draft.splice(index, 1)
      })
    )
  }
  function publishQuestion(id: string) {
    //修改用map
    // setQuestionList(
    //   questionList.map(q => {
    //     if (q.id !== id) return q
    //     else
    //       return {
    //         ...q,
    //         isPublish: true,
    //       }
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const q = draft.find(item => item.id === id)

        if (q) q.isPublish = true
      })
    )
  }

  return (
    <div>
      <h1>問卷列表2</h1>
      <div>
        {questionList.map(item => {
          const { id, title, isPublish } = item
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublish={isPublish}
              onEdit={edit}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            />
          )
        })}
      </div>
      <div>
        <button onClick={add}> 新增問卷</button>
      </div>
    </div>
  )
}

export default List2
