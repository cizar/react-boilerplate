import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-family: sans-serif;
  color: DodgerBlue;
`

class Main extends React.Component {
  render () {
    const { name } = this.props
    return (
      <div>
        <Header>Funciona!</Header>
      </div>
    )
  }
}


export default Main
