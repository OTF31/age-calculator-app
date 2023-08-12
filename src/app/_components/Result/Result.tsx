import { Stack, Text } from '@mantine/core'

import classes from './Result.module.css'

const Result = () => {
  return (
    <Stack gap={0}>
      <Text classNames={{ root: classes.result }} truncate>
        - -{' '}
        <Text span inherit>
          years
        </Text>
      </Text>
      <Text classNames={{ root: classes.result }} truncate>
        - -{' '}
        <Text span inherit>
          months
        </Text>
      </Text>
      <Text classNames={{ root: classes.result }} truncate>
        - -{' '}
        <Text span inherit>
          days
        </Text>
      </Text>
    </Stack>
  )
}

export default Result
