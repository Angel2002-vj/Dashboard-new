import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar-main'>
       <div className="nav-info"> 
            <h1 className='dashboard-heading'>DASHBOARD</h1>
            <div><Link href='/'><div>crm</div></Link></div>
            <div><Link href='/ecommerce'><div>ecommerce</div></Link></div>
        </div>
    </div>
  )
}

export default NavBar
