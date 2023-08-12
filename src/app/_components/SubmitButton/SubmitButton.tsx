'use client'

import { ActionIcon } from '@mantine/core'
import Image from 'next/image'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import iconArrow from '@/assets/images/icon-arrow.svg'
import classes from './SubmitButton.module.css'
import { SubmitButtonProps } from './SubmitButton.types'

const SubmitButton: FC<SubmitButtonProps> = props => {
  const { onSubmit } = props
  const { handleSubmit } = useFormContext()

  return (
    <ActionIcon
      component={Image}
      classNames={classes}
      src={iconArrow}
      alt='icon arrow'
      onClick={handleSubmit(onSubmit)}
    />
  )
}

export default SubmitButton
