import React from 'react'

function ClearAllBtn({handelClearAll}) {
    return (
        <button
            className='p-2 bg-red-800 rounded-xl cursor-pointer'
            type='submit'
            onClick={handelClearAll}>
            Clear All
        </button>
    )
}

export default ClearAllBtn