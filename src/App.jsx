
import { useState } from 'react';
import './App.css'
import Question from './Question'

function App() {
  const [result , setResult] =useState(0)
  const [id, setId] = useState(0)
  const questions = [
    {
      
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      answer: 'Jupiter',
    },
    {
      question: 'What is the smallest country in the world?',
      options: ['Monaco', 'Vatican', 'Maldives', 'Nauru'],
      answer: 'Vatican',
  },
  ];
  return (
    <div className='m-20 '>
      <h1 className='text-3xl font-bold mb-10 mx-20 text-center'>Quiz App </h1>
    {questions.map((item, index) =>  (
    index  <= id ? (

      <Question key={index} setId={setId} id={id} result={result} setResult={setResult} item={item}/>
    ) : ''

    ))}
{result}
    </div>
  )
}

export default App
