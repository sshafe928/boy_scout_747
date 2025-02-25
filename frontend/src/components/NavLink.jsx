import { Link } from 'react-router-dom'

const NavLink = ({ title, href='/'}) => {
  return (
    <div className="relative group">
      <Link to={href}>{title}</Link>
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
    </div>
  )
}

export default NavLink