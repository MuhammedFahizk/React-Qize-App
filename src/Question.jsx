import React, { useState } from 'react';


const Question = ({ item, id, setId, result, setResult }) => {
  const [answer, setAnswer] = useState('');
  const [click, setClick] = useState(true);

  const handleClick = (a) => {
    if (click) {
      setAnswer(a);
      if (a === item.answer) {
        setResult(result + 1);
      }
      setId(id + 1);
      setClick(false);
    }
  };

  return (
    <div className=' grid  gap-4'>
      <h1 className='border-2 p-3 rounded-2xl mx-20'>{item.question}</h1>
      <div className='border-2 rounded-2xl p-3 mx-20 mb-5'>

      {item.options.map((a, i) => (
        <p 
          key={i} 
          className={click ? ' ' : 'disabled'} 
          onClick={() => handleClick(a)} 
          style={{ cursor: click ? 'pointer' : 'not-allowed', color: click ? 'initial' : 'gray' }}
        >
          {a}
        </p>
      ))}

      {answer && (
        <p className={answer === item.answer ? 'text-green-500' : 'text-red-500'}>
         Your Answer is : {answer}
        </p> 
      )}
      {click? '' : <p>Correct Answer: {item.answer}</p>}
      </div>

    </div>
  );
};

export default Question;
