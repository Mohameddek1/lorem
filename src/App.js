import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [count, setCount] = useState(0)
  const [paragraph, setParagraph] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 1
    };
    if (amount > 8) {
      amount = 8
    }
    const selectedParagraphs =100;
    const results =data.slice(0, selectedParagraphs);
    setParagraph(selectedParagraphs);
  }
  return (
    <section className="section-one">
      <h1>Paragraph Generator.</h1>
      <form className="section-two" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph: </label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e) => {
          setCount(e.target.value)
        }} />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article>
        {paragraph.map((item, index) =>{
          return (
            <p className='paragraph' key={index}>{item}</p>
          )
        })}
      </article>
    </section>
  );
}

export default App;
