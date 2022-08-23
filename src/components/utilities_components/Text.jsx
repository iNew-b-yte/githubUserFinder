import React from 'react'

function Text({_class, children}) {
  return (
    <p className={_class}>{children}</p>
  )
}

export default Text;