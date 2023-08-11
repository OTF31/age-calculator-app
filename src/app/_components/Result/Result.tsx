import { Stack, Text } from '@mantine/core'

import classes from './Result.module.css'

const Result = () => {
  return (
    <Stack gap={0}>
      <Text classNames={{ root: classes.result }} truncate>
        99{' '}
        <Text span inherit>
          years
        </Text>
      </Text>
      <Text classNames={{ root: classes.result }} truncate>
        12{' '}
        <Text span inherit>
          months
        </Text>
      </Text>
      <Text classNames={{ root: classes.result }} truncate>
        31{' '}
        <Text span inherit>
          days
        </Text>
      </Text>
    </Stack>
  )
}

export default Result
