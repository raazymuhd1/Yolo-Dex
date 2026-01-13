import { NavLink } from "react-router-dom"
import { navlinks } from "../../constants"

const Links = () => {
  return (
    <ul className="flex items-center gap-[30px] bg-secondary rounded-[15px] p-[10px] overflow-hidden">
        { navlinks.map(link => (
            <NavLink 
              key={link.id} to={link.url} className={({isActive}) =>
                  isActive ? "active_link bg-[var(--orange-bg)] text-[var(--white)]" : "active_link text-textWhite"}> {link.title}
            </NavLink>
        )) }
    </ul>
  )
}

export default Links