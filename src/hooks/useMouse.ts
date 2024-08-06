import { useState, useEffect } from 'react'
// 獲取鼠標位置
function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const mouseMoveHandler = (event: MouseEvent) => {
    setX(event.clientX)
    setY(event.clientY)
  }
  //  這個組件
  useEffect(() => {
    //監聽鼠標事件
    window.addEventListener('mousemove', mouseMoveHandler)
    //當組件銷毀時，一定要解綁 DOM 事件！！ 可能會出現組件內存洩漏問題
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])
  return [x, y]
}
export default useMouse
