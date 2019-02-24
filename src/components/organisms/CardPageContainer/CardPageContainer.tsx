import React, { useState } from 'react'
import styled from 'styled-components';

import TogglePageTarget, { TogglePageTargetProps } from './TogglePageTarget';
import TogglePage, { Origin } from 'components/atoms/TogglePage/TogglePage';
import { CardProps } from 'components/atoms/Card';

interface CardPageContainerProps {
  children: MultiElement<CardProps>
}

const CardPageContainer = ({ children }: CardPageContainerProps) => {
  const [open, setOpen] = useState(false)
  const [targetOrigin, setTargetOrigin] = useState<Origin>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })

  const onClick = (ref: React.RefObject<HTMLDivElement>) => {
    setOpen(true)
    if (ref.current) {
      const { width, height, left, top } = ref.current.getBoundingClientRect()

      setTargetOrigin({
        x: left,
        y: top,
        width,
        height
      })
    }
  }

  const cardTargets = useCardTargets(children, onClick)

  const close = () => {
    setOpen(false)
  }

  return (
    <>
      <CardsContainer>
        {cardTargets}
      </CardsContainer>
      <TogglePage toggle={open} origin={targetOrigin}>
        <span onClick={close}>close</span>
        hallo
      </TogglePage>
    </>
  )
}

// Hooks
const useCardTargets = (children: MultiElement<CardProps>, onClick: (ref: React.RefObject<HTMLDivElement>) => void) => {
  // TODO: improve key
  if (children) {
    if (children instanceof Array) {
      return children.map((card, index) => (
        <CardTarget onClickRef={onClick} key={index}>{card}</CardTarget>
      ))
    } else {
      return (
        <CardTarget onClickRef={onClick}>{children}</CardTarget>
      )
    }
  } else {
    return null
  }
}

const CardTarget = ({ onClickRef, children }: TogglePageTargetProps) => {
  return (
    <TPTContainer>
      <TogglePageTarget onClickRef={onClickRef}>
        {children}
      </TogglePageTarget>
    </TPTContainer>
  );
}

// Styled-components
const TPTContainer = styled.div`
  margin: 8px;
`

const CardsContainer = styled.section`
  display: flex;
`

export default CardPageContainer
