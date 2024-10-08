import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementbyAmmount } from './Features/Redux/AllSlice/slice';

const App = () => {
  const { Mern2307 } = useSelector((state) => state)

  const dicpatch = useDispatch();
  const handleIncrement = () => {
    dicpatch(increment());
  }
  const handledecrement = () => {
    dicpatch(decrement());
  }
  const handleReset = () => {
    dicpatch(reset());
  }

  const handleIncre4 = () => {
    dicpatch(incrementbyAmmount(4))
  }

  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen gap-y-10'>
        <p className='text-3xl font-bold'>{Mern2307.value}</p>

        <div className='flex items-center gap-x-2'>
          <button className='bg-blue-500 text-white px-10 py-3 text-2xl rounded-xl' onClick={handleIncrement}>Increment</button>
          <button className='bg-red-500 text-white px-10 py-3 text-2xl rounded-xl' onClick={handledecrement}>Decrement</button>
          <button className='bg-green-500 text-white px-10 py-3 text-2xl rounded-xl' onClick={handleReset}>Reset</button>

          <button className='bg-sky-500 text-white px-10 py-3 text-2xl rounded-xl' onClick={handleIncre4}>Incre4</button>
        </div>
      </div>

    </>
  )
}

export default App