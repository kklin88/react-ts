import React, { FC, useState, ChangeEvent } from 'react'
const FormElementDemo: FC = () => {
  const [text, setText] = useState<string>('hello')
  //   function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //     setText(event.target.value)
  //   }
  const [gender, setGender] = useState('male')
  const [checked, setCheckd] = useState(false)
  const [selectedCityList, setSelectedCityList] = useState<string[]>([])
  const [lang, setLang] = useState('js')
  function handleGenderChange(event: ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value)
  }
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
    console.log(text)
  }
  function genHtml() {
    return { __html: text.replaceAll('\n', '<br/>') }
  }
  function toggleChecked() {
    setCheckd(!checked)
  }
  function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
    const city = event.target.value
    if (selectedCityList.includes(city)) {
      setSelectedCityList(
        selectedCityList.filter(c => {
          if (c === city) return false
          return true
        })
      )
    } else {
      setSelectedCityList(selectedCityList.concat(city))
    }
  }
  function handleLangChange(event: ChangeEvent<HTMLSelectElement>) {
    setLang(event.target.value)
  }
  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault() //阻止默認行為
  }
  return (
    <>
      <p>Form elements demo</p>
      <div>
        {/* <input value={text} onChange={handleChange} /> */}
        {/* <button onClick={() => console.log(text)}>print</button> */}
        <textarea value={text} onChange={handleChange}></textarea>
        <p>{text}</p>
        <p dangerouslySetInnerHTML={genHtml()}></p>
      </div>
      <div>
        <label htmlFor="radio1">男</label>
        <input
          type="radio"
          id="radio1"
          name="gender"
          value="male"
          onChange={handleGenderChange}
          checked={gender === 'male'}
        />
        <label htmlFor="radio2">女</label>
        <input
          type="radio"
          id="radio2"
          name="gender"
          value="female"
          onChange={handleGenderChange}
          checked={gender === 'female'}
        />
        <button onClick={() => console.log(gender)}>print gender {gender}</button>
      </div>
      <div>
        <label htmlFor="checkbox1">選中</label>
        <input type="checkbox" id="checkbox1" checked={checked} onChange={toggleChecked} />
        {checked.toString()}
      </div>
      <div>
        <label htmlFor="checkboxtpe">TPE</label>
        <input
          type="checkbox"
          id="checkboxtpe"
          value="tpe"
          checked={selectedCityList.includes('tpe')}
          onChange={handleCityChange}
        />
        <label htmlFor="checkboxsh">SH</label>
        <input
          type="checkbox"
          id="checkboxsh"
          value="sh"
          checked={selectedCityList.includes('sh')}
          onChange={handleCityChange}
        />
        <label htmlFor="checkboxamoy">AMOY</label>
        <input
          type="checkbox"
          id="checkboxamoy"
          value="amoy"
          checked={selectedCityList.includes('amoy')}
          onChange={handleCityChange}
        />
        {selectedCityList.toString()}
      </div>
      <div>
        <select name="" id="" value={lang} onChange={handleLangChange}>
          <option value="java">Java</option>
          <option value="js">js</option>
          <option value="css">Css</option>
        </select>
        {lang}
      </div>
      <div>
        <form action="/api/post" onSubmit={handleSubmit}>
          <input type="text" name="k1" value="v1" />
          <textarea name="" id=""></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  )
}
export default FormElementDemo
