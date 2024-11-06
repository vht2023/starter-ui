'use client'

import './showcases.scss'

import {Card} from '@starter-ui/core'
import React from 'react'

const page = () => {
  return (
    <div className='showcases grid auto-cols-max grid-flow-col gap-6'>
      <Card>
        <Card.Body>
          <div className='mastery'>
            <div className='text'>
              <strong>YOU WIN</strong>
              <strong>CONGRATULATIONS</strong>
            </div>

            <div className='crystal-border'>
              <div className='crystal' />
            </div>

            <div className='progress-ring-m7' />
            <div className='progress-ring-m7-inner' />

            <svg height='100' width='100' className='progress-ring'>
              <circle cy='50' cx='50' r='38' fill='transparent' strokeWidth='7' />
            </svg>

            <svg height='100' width='104' className='progress-ring-two'>
              <circle cy='50' cx='50' r='45' fill='transparent' strokeWidth='13' />
            </svg>
            <svg height='100' width='100' className='progress-ring-two'>
              <circle cy='50' cx='50' r='37' fill='transparent' strokeWidth='10' />
            </svg>

            <div className='wings' />

            <div className='shield'>
              <div className='shield-up'>
                <div className='shield-top-right'>
                  <div className='shield-top-right-inside' />
                </div>
                <div className='shield-top-left'>
                  <div className='shield-top-left-inside' />
                </div>
              </div>

              <div className='shield-down'>
                <div className='shield-bottom-right'>
                  <div className='shield-bottom-right-inside' />
                </div>
                <div className='shield-bottom-left'>
                  <div className='shield-bottom-left-inside' />
                </div>
              </div>
            </div>

            <div className='line-center-border'>
              <div className='line-center' />
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className='flex-center relative h-full w-[300px] justify-end rounded-lg bg-black px-10'>
          <button className='planet'>
            <div className='blackhole'>
              <span className='rocket-path'>
                <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='rocket'>
                  <g>
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' />
                  </g>
                </svg>
              </span>
              <span className='ring'>
                <span className='block' />
              </span>
            </div>
            <span className='text'>Start</span>
          </button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default page
