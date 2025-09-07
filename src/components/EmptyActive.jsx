import React from 'react'

const EmptyActive = () => {
  return (
    <>
        <div id="empty-state" className="text-center p-8 bg-black/20 rounded-lg mt-6 ">
            <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-xl font-medium text-white">All caught up!</h3>
            <p className="mt-1 text-sm text-gray-400">You have no pending tasks. Add one above to get started.</p>
          </div>
    </>
  )
}

export default EmptyActive