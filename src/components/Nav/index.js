import React from 'react'
import { Link } from 'gatsby'
import './Nav.less'
import logo from '../../img/trLogo.svg'

function Nav() {

    return (
        <header className='header'>

			<Link to='/' className='logoContainer'>
				
				<img src={logo} alt='Teen Ranch' />
			
			</Link>

			<nav
				className="nav"
				role="navigation"
				aria-label="main-navigation"
			>
			
				<Link to='/hockey'>Programs</Link>
				<Link to='/schools'>Schools</Link>
				<Link to='/retreats'>Retreats</Link>
				<Link to='/events'>Events</Link>
				<Link className='signUp' to='/sign-up'>Sign Up</Link>

			</nav>			

        	
        </header>
    )
}

export default Nav
