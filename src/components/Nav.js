import React from 'react'


const divStyle = {
  height: "100px"
}

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" style = {divStyle}>
      <a className="navbar-brand" href="/">
        Employee Directory
      </a>
    </nav>
    )
}

export default Nav
