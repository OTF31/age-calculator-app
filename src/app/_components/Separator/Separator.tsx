import { Divider } from '@mantine/core'
import { FC } from 'react'

import SubmitButton from '../SubmitButton'
import classes from './Separator.module.css'
import { SeparatorProps as Props } from './Separator.types'

const Separator: FC<Props> = props => {
  const { onSubmit } = props

  return (
    <>
      <Divider
        classNames={classes}
        label={<SubmitButton onSubmit={onSubmit} />}
        labelPosition='right'
        visibleFrom='xl'
      />
      <Divider
        classNames={classes}
        label={<SubmitButton onSubmit={onSubmit} />}
        labelPosition='center'
        hiddenFrom='xl'
      />
    </>
  )
}

export default Separator
