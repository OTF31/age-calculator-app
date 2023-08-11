'use client'

import { TextInput as MTextInput } from '@mantine/core'
import { FC } from 'react'

import classes from './TextInput.module.css'
import { TextInputProps as Props } from './TextInput.types'

const TextInput: FC<Props> = props => {
  const { size = 'xl', labelProps = { 'data-error': undefined }, ...rest } = props

  return (
    <MTextInput
      {...{ size, labelProps }}
      {...rest}
      classNames={{ input: classes.input, label: classes.label, error: classes.error }}
    />
  )
}

export default TextInput
