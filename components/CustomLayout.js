import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      padding: '15vw',
      backgroundColor: '#111'
    }}>
    {children}
  </div>
)