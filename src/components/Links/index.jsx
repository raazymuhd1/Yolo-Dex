import { NavLink } from "react-router-dom"
import { navlinks } from "../../constants"

const Links = () => {
  return (
    <ul className="w-max flex items-center md:gap-[30px] bg-secondary rounded-[15px] md:p-[10px] p-[4px] overflow-hidden">
        { navlinks.map(link => (
            <NavLink 
              key={link.id} to={link.url} className={({isActive}) =>
                  isActive ? "active_link bg-[var(--orange-bg)] text-[var(--white)]" : "active_link text-textWhite px-[10px] py-[2px]"}> {link.title}
            </NavLink>
        )) }
    </ul>
  )
}

export default Links