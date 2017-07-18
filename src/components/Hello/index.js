import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.h1`
  font-family: sans-serif;
  color: DodgerBlue;
`

class Hello extends React.Component {
  render () {
    const { name } = this.props
    return (
      <div>
        <Header>Hello {name}!</Header>
      </div>
    )
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
}

export default Hello
