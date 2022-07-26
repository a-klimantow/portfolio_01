import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`

interface Props {
  titlePage: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => (
  <Container>
    <title>{props.titlePage}</title>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1>{props.titlePage}</h1>
      {props.children}
    </main>
  </Container>
)

export default Layout
