import { useState } from 'react';
import { statementList } from './data';
import './App.css';
import './styles.css';

function App() {
  const [index, setIndex] = useState(0);

  let statement = statementList[index];
  let hasPrev = index > 0;
  let hasNext = index < statementList.length - 1;

  function handlePrevClick() {
    setIndex(index - 1);
  }

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleRandom() {
    setIndex(Math.floor(Math.random() * statementList.length))
  }

  return (
    <div>
      <main className="testimonial-grid">
        <nav>
          <ul>
            <li>
              <button
                onClick={handlePrevClick}
                disabled={!hasPrev}>
                &#8592;
              </button>
          </li>
          <li>
              <button
                onClick={handleRandom}>
                &#8596;
              </button>
            </li>
            <li>
              <button
                onClick={handleNextClick}
                disabled={!hasNext}>
                &#8594;
              </button>
            </li>
          </ul>
          <p className="text-secondary-400">
            ({index + 1} of {statementList.length})
          </p>
        </nav>
        <article className="testimonial grid-col-span-2 grid-row-span-4 flow">
            <div className="flex">
                <div>
                <img
            className="object-none"
            src={statement.url1}
          />  
                </div>
            </div>

        </article>
        <article className="testimonial flow bg-secondary-400 text-primary-400">
            <div className="flex">
                <div>
                    <p className="padding">
                    {statement.quote}                    
                    </p>
                </div>
            </div>

        </article>
        <article className="testimonial flow">
            <div className="flex">
                <div>
                <img
            className="object-none"
            src={statement.url2}
          /> 
                </div>
            </div>
        </article>
        <article className="testimonial grid-col-span-2 flow bg-secondary-400 text-primary-400">
            <div className="flex">
                <div className="text-center">
                    <h1 className="padding">
                    {statement.name}   
                    </h1>
                </div>
            </div>


        </article>
        <article className="testimonial grid-col-span-2 flow">
            <div className="flex">
                <div>
                <img
            className="object-none"
            src={statement.url3}
          />   

                </div>
            </div>
        </article>
    </main>
    </div >
  )
}

export default App
