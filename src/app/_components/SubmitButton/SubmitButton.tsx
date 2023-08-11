import { ActionIcon } from '@mantine/core'
import Image from 'next/image'

import iconArrow from '@/assets/images/icon-arrow.svg'
import classes from './SubmitButton.module.css'

const SubmitButton = () => {
  return (
    <ActionIcon component={Image} classNames={classes} src={iconArrow} alt='icon arrow' />
  )
}

export default SubmitButton
