'use client'

import { joiResolver } from '@hookform/resolvers/joi'
import { Group, Stack } from '@mantine/core'
import Joi from 'joi'
import moment from 'moment'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import TextInput from '@/components/TextInput'
import Result from '../Result'
import Separator from '../Separator'

const Form = () => {
  const [days, setDays] = useState('- -')
  const [months, setMonths] = useState('- -')
  const [years, setYears] = useState('- -')
  const schema = Joi.object({
    day: Joi.number().integer().min(1).max(31).required().messages({
      'number.base': 'Must be a number',
      'number.min': 'Must be a valid day',
      'number.max': 'Must be a valid day',
      'any.required': 'This field is required',
    }),
    month: Joi.number().integer().min(1).max(12).required().messages({
      'number.base': 'Must be a number',
      'number.min': 'Must be a valid month',
      'number.max': 'Must be a valid month',
      'any.required': 'This field is required',
    }),
    year: Joi.number().integer().min(1900).max(moment().year()).required().messages({
      'number.base': 'Must be a number',
      'number.min': 'Must be a valid year',
      'number.max': 'Must be in the past',
      'any.required': 'This field is required',
    }),
  })

  const formMethods = useForm({
    resolver: joiResolver(schema),
  })

  const onSubmit = (data: any) => {
    const birthDate = moment(`${data.year}-${data.month}-${data.day}`, 'YYYY-MM-DD')

    if (birthDate.isValid()) {
      if (birthDate.isAfter(moment())) {
        formMethods.setError('day', { type: 'validate', message: 'Must be in the past' })

        formMethods.setError('month', { type: 'validate', message: ' ' })

        formMethods.setError('year', { type: 'validate', message: ' ' })
      } else {
        const today = moment()

        const years = today.diff(birthDate, 'years')
        const months = today.diff(birthDate, 'months') % 12
        const days = today.diff(birthDate, 'days') % 30

        setDays(days.toString())
        setMonths(months.toString())
        setYears(years.toString())
      }
    } else {
      formMethods.setError('day', { type: 'validate', message: 'Must be a valid date' })

      formMethods.setError('month', { type: 'validate', message: ' ' })

      formMethods.setError('year', { type: 'validate', message: ' ' })
    }
  }

  return (
    <Stack gap='xl'>
      <FormProvider {...formMethods}>
        <Group wrap='nowrap'>
          <TextInput name='day' label='DAY' placeholder='DD' />
          <TextInput name='month' label='MONTH' placeholder='MM' />
          <TextInput name='year' label='YEAR' placeholder='YYYY' />
        </Group>
        <Separator onSubmit={onSubmit} />
        <Result days={days} months={months} years={years} />
      </FormProvider>
    </Stack>
  )
}

export default Form
