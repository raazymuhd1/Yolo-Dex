import { Link } from "react-router-dom"
import { navlinks } from "../../constants"

const Links = () => {
  return (
    <ul className="flex items-center gap-[30px] main-theme rounded-[15px] overflow-hidden">
        { navlinks.map(link => (
            <Link key={link.id} to={link.url} >
                <li className="font-semibold md:text-[18px] text-[16px] rounded-[10px] py-[4px] px-[15px] text-secondary"> {link.title} </li>
            </Link>
        )) }
    </ul>
  )
}

export default Links