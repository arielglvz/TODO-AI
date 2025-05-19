import React from 'react'

const Loading = () => {
  return (
    <div className="w-full p-3 mx-auto max-w-2xl text-center rounded-xl">
      <div class="mb-2 flex items-center space-x-2">
        <div class="animate-pulse rounded-full bg-gray-500 h-5 w-5" />
        <div class="animate-pulse rounded-md bg-gray-500 h-5 w-[200px]" />
        <div class="space-y-2">
          <div class="animate-pulse rounded-full bg-gray-500 h-1 w-1" />
          <div class="animate-pulse rounded-full bg-gray-500 h-1 w-1" />
        </div>
      </div>
      <div class="mt-2 mb-4 space-y-2">
        <div class="animate-pulse rounded-md bg-gray-500 h-3 w-[200px]" />
        <div class="animate-pulse rounded-full bg-gray-500 h-2 w-full" />
        <div className="w-full flex justify-end">
          <div class="animate-pulse rounded-md bg-gray-500 h-3 w-[200px]" />
        </div>
      </div>
      <div class="space-y-2">
        <div className='w-full flex space-x-2'>
          <div class="animate-pulse rounded-sm bg-gray-500 h-5 w-5" />
          <div class="animate-pulse rounded-md bg-gray-500 h-5 w-full" />
        </div>
        <div className='w-full flex space-x-2'>
          <div class="animate-pulse rounded-sm bg-gray-500 h-5 w-5" />
          <div class="animate-pulse rounded-md bg-gray-500 h-5 w-full" />
        </div>
        <div className='w-full flex space-x-2'>
          <div class="animate-pulse rounded-sm bg-gray-500 h-5 w-5" />
          <div class="animate-pulse rounded-md bg-gray-500 h-5 w-full" />
        </div>
      </div>
    </div>
  )
}

export default Loading
