'use client'

import { Group, Stack } from '@mantine/core'

import TextInput from '@/components/TextInput'
import Result from '../Result'
import Separator from '../Separator'

const Form = () => {
  return (
    <Stack gap='xl'>
      <Group wrap='nowrap'>
        <TextInput label='DAY' placeholder='DD' />
        <TextInput label='MONTH' placeholder='MM' />
        <TextInput label='YEAR' placeholder='YYYY' />
      </Group>
      <Separator />
      <Result />
    </Stack>
  )
}

export default Form
