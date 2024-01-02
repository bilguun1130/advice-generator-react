import mobileDivider from './assets/pattern-divider-mobile.svg';
import desktopDivider from './assets/pattern-divider-desktop.svg';
import dice from './assets/icon-dice.svg'
import { useState } from 'react';


const firstAdvice = await fetch('https://api.adviceslip.com/advice')
.then(response => response.json());
// async function generateAdvice() {
//   advice = await fetch('https://api.adviceslip.com/advice').then(response => response.json());
//   console.log(advice);
// }
function App() {
  const [advice, setAdvice] = useState({ slip: { id: firstAdvice.slip.id, advice: firstAdvice.slip.advice } });
  function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data));
  }
  return (
    <main className='flex h-screen bg-dark-blue justify-center items-center px-3 max-container'>
      <article className='flex flex-col py-5  px-3 justify-center items-center bg-dark-grayish-blue rounded-md relative pb-16 max-w-sm lg:max-w-md'>
        <p className='text-neon-green font-manRope text-[10px] tracking-widest font-medium mb-6 uppercase'>Advice # {advice.slip.id}</p>
        <h2 className='text-light-cyan font-manRope text-center text-lg mx-3 mb-5'>"{advice.slip.advice}"</h2>
        <img src={mobileDivider} alt="divider" className='lg:hidden' />
        <img src={desktopDivider} alt="divider" className='hidden lg:block' />
        <button className='p-3 rounded-full bg-neon-green absolute -bottom-5' onClick={getAdvice}>
          <img src= {dice} alt="dice button to generate new advice" />
        </button>
      </article>
    </main>
  );
}

export default App;
