import { AppShell, AppShellMain, Container } from '@mantine/core'

import Form from './_components/Form'
import classes from './styles.module.css'

const Home = () => {
  return (
    <AppShell classNames={{ main: classes.main }}>
      <AppShellMain>
        <Container classNames={{ root: classes.container }}>
          <Form />
        </Container>
      </AppShellMain>
    </AppShell>
  )
}

export default Home
