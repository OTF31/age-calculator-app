'use client'

import { TextInput as MTextInput } from '@mantine/core'
import { FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'

import classes from './TextInput.module.css'
import { TextInputProps as Props } from './TextInput.types'

const TextInput: FC<Props> = props => {
  const { control } = useFormContext()
  const { name } = props
  const { field, fieldState } = useController({ name, control })
  const { error: fieldError } = fieldState
  const { value, onChange } = field
  const {
    size = 'xl',
    labelProps = { 'data-error': fieldError },
    error = fieldError?.message,
    ...rest
  } = props

  return (
    <MTextInput
      {...{ value, onChange }}
      {...{ size, labelProps, error }}
      {...rest}
      classNames={{ input: classes.input, label: classes.label, error: classes.error }}
    />
  )
}

export default TextInput
