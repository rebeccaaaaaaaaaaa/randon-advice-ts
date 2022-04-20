import React from 'react'
import { useAdvice } from '../../hooks/useAdvice'
import {CardWrapper} from './style'

export function Card() {

  const {advice} = useAdvice()

  return (
    <CardWrapper>
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <h1>{advice.advice}</h1>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

