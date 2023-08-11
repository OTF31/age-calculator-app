import { Divider } from '@mantine/core'

import classes from './Separator.module.css'
import SubmitButton from '../SubmitButton'

const Separator = () => {
  return (
    <>
      <Divider
        classNames={classes}
        label={<SubmitButton />}
        labelPosition='right'
        visibleFrom='xl'
      />
      <Divider
        classNames={classes}
        label={<SubmitButton />}
        labelPosition='center'
        hiddenFrom='xl'
      />
    </>
  )
}

export default Separator
