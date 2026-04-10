import React from 'react'

function TodoForm({formSubmit, inputData, setInputText}) {
  return (
     <form action="GET" onSubmit={formSubmit}>
            <div>
              <input
                placeholder="Today's plan....."
                value={inputData}
                onChange={(e) => setInputText(e.target.value)}
                className='bg-amber-300 text-black h-10 rounded-3xl text-xl px-5 focus:outline-none'
                autoFocus
                type="text" />
    
              <button
                type='submit'
                className='m-4 bg-green-400 px-5 py-1 rounded-md hover:bg-green-500 text-black cursor-pointer'>
                Add
              </button>
            </div>
          </form>
  )
}

export default TodoForm