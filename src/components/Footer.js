import React from 'react'

function Footer() {
    const date=new Date();
    const currdate=date.getFullYear();
  return (
    <div className="footer">Spider Ⓒ {currdate}</div>
  )
}

export default Footer