import { AppShell, AppShellMain, Container } from '@mantine/core'

import classes from './styles.module.css'
import Form from './_components/Form'

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
