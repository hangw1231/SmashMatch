import icoMenu from '../assets/ico_menu.png'
import icoNofi from '../assets/ico_bell.png'
import icoHome from '../assets/ico_home.png'
import icoSchedule from '../assets/ico_ schedule.png'
import icoFitness from '../assets/ico_fitness.png'
import icoMypage from '../assets/ico_mypage.png'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <header>
      <button className="menu">
        <Link to="/sideMenu"><img src={icoMenu} alt="menu" /></Link>
      </button>
      <h1 className="logo"><Link to="/">SmashMatch</Link></h1>
      <button className="nofi"><img src={icoNofi} alt="nofi" /></button>
    </header>
    <nav className="gnb">
      <NavLink to="/"><img src={icoHome} alt="home"/></NavLink>
      <NavLink to="/schedule"><img className="schedule" src={icoSchedule} alt="schedule"/></NavLink>
      <NavLink to="/fitness"><img className="fitness" src={icoFitness} alt="fitness"/></NavLink>
      <NavLink to="/mypage"><img src={icoMypage} alt="mypage"/></NavLink>
    </nav>
    </>
  )
}

export default NavBar