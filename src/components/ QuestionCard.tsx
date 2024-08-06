import React, { FC, useEffect } from 'react'
import styles from './QuestionCard.module.scss'
import classnames from 'classnames'
interface QuestionCardProps {
  id: string
  title: string
  isPublish: boolean
  onEdit: (id: string) => void
  deleteQuestion: (id: string) => void
  publishQuestion: (id: string) => void
}

const QuestionCard: FC<QuestionCardProps> = props => {
  const { id, title, isPublish, deleteQuestion, publishQuestion } = props
  function publish(id: string) {
    publishQuestion(id)
  }
  function del(id: string) {
    deleteQuestion(id)
  }
  //生命週期 ：創建 更新（state變化） 銷毀
  useEffect(() => {
    console.log('mouted')
    //銷毀時執行
    return () => {
      console.log('unmounted', id)
    }
  }, [])

  // let itemClassName = classnames('list-item', { published: isPublish })
  const listItemClass = styles['list-item']
  const publishedClass = styles['published']
  const itemClassName = classnames({ [listItemClass]: true, [publishedClass]: isPublish })
  // if (isPublish) itemClassName += ' published'
  return (
    <div key={id} className={itemClassName}>
      <strong>{title}</strong>
      {isPublish ? <span className={styles['published-span']}>publish</span> : <span>no</span>}
      &nbsp;
      <button
        onClick={() => {
          publish(id)
        }}
      >
        publish
      </button>
      &nbsp;
      <button
        onClick={() => {
          del(id)
        }}
      >
        del
      </button>
    </div>
  )
}

export default QuestionCard
