import React from 'react'
import {ReactDOM} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import reportWebvitals from './reportWebVitals'
import {useState} from 'react'
import './App.css'
import {Start} from './components/Start'
import {Question} from './components/Question'
import {Result} from './components/Result'
import Store from './components/state/Store'

function App(props) {
  let [answer, setAnswer] = useState(0)
  let [flag, setFlag] = useState(0)
  let [result, setResult] = useState(0)

  let questionArray = Store.questions.map((element) => (
    <Question
      questionNumber={element.questionNumber}
      question={element.question}
      var1={element.var1}
      var2={element.var}
      var3={element.var3}
      value1={element.value1}
      value2={element.value2}
      value3={element.value3}
      path={element.path}
      link={element.link}
      next={element.next}
    />
  ))

  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">Тест на знания столиц стран мира</h1>
        {/* <Route exact path='/'><Start/></Route> */}
        {/* {questionArray} */}
        <Route exact path="/result">
          <Result />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App
