import React from 'react'

const NewTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[370px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">16 Mar 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          quidem sunt corrupti illum incidunt odio.
        </p>
        <div className='mt-4'>
            <button>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask