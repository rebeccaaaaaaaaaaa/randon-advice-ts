import React from 'react'
import { useAdvice } from '../../hooks/useAdvice'
import {ButtonStyle} from "./style"

export function NewAdviceButton() {

  const {handleNewAdvice} = useAdvice()

  return (
    <div>
      <ButtonStyle onClick={handleNewAdvice}>New Advice</ButtonStyle>
    </div>
  )
}
