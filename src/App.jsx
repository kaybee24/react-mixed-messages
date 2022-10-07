import { useState } from 'react';
import { statementList } from './data';
import './App.css';
import './reset.css';
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
      <div class="navigation">
        <nav>
          <ul>
            <li>
              <button
                onClick={handlePrevClick}
                disabled={!hasPrev}>
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0712689 5.09276C0.0712689 4.94976 0.128228 4.81578 0.229228 4.71578L3.84227 1.10075C4.05127 0.889755 4.39315 0.889755 4.60215 1.10075C4.81115 1.30575 4.81515 1.64776 4.60215 1.86076L1.37022 5.09276L4.60215 8.32475C4.81315 8.53575 4.81315 8.87575 4.60215 9.08675C4.39315 9.29575 4.05126 9.29575 3.84226 9.08675L0.229228 5.47575C0.128228 5.37375 0.0712689 5.23476 0.0712689 5.09276Z" fill="black" />
                  <path d="M0.0692444 5.08874C0.0692444 4.79374 0.311307 4.55176 0.608307 4.55176L18.6763 4.55176C18.9733 4.55176 19.2152 4.79375 19.2152 5.08875C19.2152 5.38775 18.9733 5.62775 18.6763 5.62775L0.608307 5.62775C0.312307 5.62775 0.0692444 5.38774 0.0692444 5.08874Z" fill="black" />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={handleRandom}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.733 5.009H21.672L18.975 7.70401C18.766 7.91301 18.766 8.25502 18.975 8.46402C19.08 8.56902 19.217 8.62204 19.356 8.62204C19.493 8.62204 19.631 8.56902 19.737 8.46402L23.352 4.85306C23.368 4.83306 23.364 4.80803 23.379 4.78903C23.408 4.75003 23.449 4.72501 23.469 4.67801C23.489 4.63301 23.477 4.58402 23.481 4.53702C23.489 4.49802 23.497 4.46904 23.493 4.43204C23.481 4.30704 23.444 4.18401 23.352 4.09201L19.737 0.479034C19.526 0.268034 19.184 0.270034 18.975 0.479034C18.766 0.690034 18.766 1.03006 18.975 1.24106L21.672 3.93405H15.733C11.452 3.93405 7.96899 7.41804 7.96899 11.7C7.96899 11.716 7.96901 11.731 7.97101 11.745C7.95001 15.415 4.95697 18.391 1.28497 18.391C0.987973 18.391 0.745972 18.631 0.745972 18.93C0.745972 19.227 0.987973 19.467 1.28497 19.467C5.56397 19.467 9.047 15.985 9.047 11.701C9.047 11.687 9.04698 11.672 9.04498 11.656C9.06898 7.98604 12.06 5.009 15.733 5.009Z" fill="black" />
                  <path d="M23.481 18.865C23.477 18.818 23.489 18.769 23.469 18.722C23.449 18.675 23.4081 18.65 23.3791 18.613C23.3631 18.593 23.367 18.566 23.352 18.549L19.516 14.713C19.305 14.504 18.9651 14.504 18.7541 14.713C18.5451 14.924 18.5451 15.264 18.7541 15.475L21.672 18.391L15.733 18.393C13.909 18.393 12.2 17.663 10.924 16.332C10.717 16.119 10.375 16.111 10.164 16.318C9.94903 16.523 9.94102 16.863 10.146 17.078C11.628 18.619 13.611 19.469 15.732 19.469L21.671 19.467L18.974 22.162C18.765 22.371 18.765 22.711 18.974 22.922C19.079 23.027 19.216 23.08 19.355 23.08C19.492 23.08 19.6301 23.027 19.7361 22.922L23.351 19.309C23.443 19.217 23.48 19.096 23.492 18.969C23.497 18.931 23.489 18.902 23.481 18.865Z" fill="black" />
                  <path d="M1.28601 5.00897C3.11201 5.00897 4.82099 5.74298 6.10199 7.07898C6.20699 7.18798 6.35003 7.245 6.49103 7.245C6.62603 7.245 6.761 7.19397 6.862 7.09497C7.077 6.88997 7.085 6.54802 6.88 6.33502C5.396 4.78602 3.40701 3.93298 1.28601 3.93298C0.989011 3.93298 0.747009 4.17498 0.747009 4.47198C0.747009 4.76898 0.989011 5.00897 1.28601 5.00897Z" fill="black" />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={handleNextClick}
                disabled={!hasNext}>
                <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.2132 4.15077C19.2132 4.29377 19.1563 4.42775 19.0553 4.52775L15.4422 8.14278C15.2332 8.35378 14.8913 8.35378 14.6823 8.14277C14.4733 7.93777 14.4693 7.59577 14.6823 7.38277L17.9143 4.15077L14.6823 0.918776C14.4713 0.707776 14.4713 0.367783 14.6823 0.156783C14.8913 -0.0522173 15.2332 -0.0522173 15.4422 0.156783L19.0553 3.76778C19.1563 3.86978 19.2132 4.00877 19.2132 4.15077Z" fill="black" />
                  <path d="M19.2152 4.15479C19.2152 4.44979 18.9732 4.69177 18.6762 4.69177L0.608185 4.69177C0.311185 4.69177 0.0692447 4.44978 0.0692447 4.15478C0.0692448 3.85578 0.311185 3.61578 0.608185 3.61578L18.6762 3.61578C18.9722 3.61578 19.2152 3.85579 19.2152 4.15479Z" fill="black" />
                </svg>
              </button>
            </li>
          </ul>

        </nav>
      </div>
      <main className="testimonial-grid">
        <article className="testimonial grid-col-span-2 grid-row-span-4 flow">
          <div className="flex">
            <img
              src={statement.url1}
            />
          </div>

        </article>
        <article className="testimonial flow bg-secondary text-primary grid-50">
          <div className="flex">
            <p className="padding">
              {statement.quote}
            </p>
          </div>

        </article>
        <article className="testimonial flow grid-50">
          <div className="flex">
            <img
              src={statement.url2}
            />
          </div>
        </article>
        <article className="testimonial grid-col-span-2 flow bg-secondary text-primary">
          <div className="flex">
            <h1 className="padding text-center">
              {statement.name}
            </h1>
          </div>


        </article>
        <article className="testimonial grid-col-span-2 flow">
          <div className="flex">
            <img
              src={statement.url3}
            />
          </div>
        </article>
      </main>
    </div >
  )
}

export default App
