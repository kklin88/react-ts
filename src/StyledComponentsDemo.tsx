import React, { FC } from 'react'
import styled, { css } from 'styled-components'

// const name = 'kk'
// const hello = `hello ${name}` //模板字符串
type ButtonPropsType = {
  primary?: boolean
}
//Button組件
const Button = styled.button<ButtonPropsType>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props: ButtonPropsType) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`
//Container組件
const Container = styled.div`
  text-align: center;
`
const Demo: FC = () => {
  return (
    <div>
      <Container>
        <p>styled-component-demo</p>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </div>
  )
}

export default Demo
