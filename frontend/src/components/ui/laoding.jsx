import React from 'react'
import { Card } from './card'

const Loading = () => {
  return (
    <Card className="w-full p-5 mx-auto max-w-2xl text-center rounded-xl">
      <div className="mb-4 w-full flex items-center space-x-2">
        <div className="animate-pulse rounded-full bg-gray-500 h-5 w-5" />
        <div className="animate-pulse rounded-md bg-gray-500 h-7 w-[200px]" />
        <div className="space-y-2">
          <div className="animate-pulse rounded-full bg-gray-500 h-1 w-1" />
          <div className="animate-pulse rounded-full bg-gray-500 h-1 w-1" />
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-4 animate-pulse rounded-md bg-gray-500 h-3 w-[200px]" />
        <div className="mb-3 animate-pulse rounded-full bg-gray-500 h-3 w-full" />
        <div className="w-full flex justify-end">
          <div className="animate-pulse rounded-md bg-gray-500 h-3 w-[200px]" />
        </div>
      </div>
      <div>
        <div className='mb-3 w-full flex items-center space-x-2'>
          <div className="animate-pulse rounded-sm bg-gray-500 h-5 w-5" />
          <div className="animate-pulse rounded-md bg-gray-500 h-10 w-full" />
        </div>
        <div className='mb-3 w-full flex items-center space-x-2'>
          <div className="animate-pulse rounded-sm bg-gray-500 h-5 w-5" />
          <div className="animate-pulse rounded-md bg-gray-500 h-10 w-full" />
        </div>
        <div className='mb-3 w-full flex items-center space-x-2'>
          <div className="animate-pulse rounded-sm bg-gray-500 h-5 w-5" />
          <div className="animate-pulse rounded-md bg-gray-500 h-10 w-full" />
        </div>
      </div>
    </Card>
  )
}

export default Loading
