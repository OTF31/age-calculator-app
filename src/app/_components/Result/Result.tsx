import { Stack, Text } from '@mantine/core'
import { FC } from 'react'

import classes from './Result.module.css'
import { ResultProps as Props } from './Result.types'

const Result: FC<Props> = props => {
  const { days, months, years } = props

  return (
    <Stack key={days + months + years} gap={0} classNames={{ root: classes.stack }}>
      <Text classNames={{ root: classes.result }} truncate>
        {years}{' '}
        <Text span inherit>
          years
        </Text>
      </Text>
      <Text classNames={{ root: classes.result }} truncate>
        {months}{' '}
        <Text span inherit>
          months
        </Text>
      </Text>
      <Text classNames={{ root: classes.result }} truncate>
        {days}{' '}
        <Text span inherit>
          days
        </Text>
      </Text>
    </Stack>
  )
}

export default Result
