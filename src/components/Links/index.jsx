import { Link } from "react-router-dom"
import { navlinks } from "../../constants"

const Links = () => {
  return (
    <ul className="flex items-center gap-[20px] ">
        { navlinks.map(link => (
            <Link key={link.id} to={link.url} >
                <li className="font-semibold md:text-[18px] text-[16px] text-[#352929] "> {link.title} </li>
            </Link>
        )) }
    </ul>
  )
}

export default Links