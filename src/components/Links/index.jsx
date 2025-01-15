import { Link } from "react-router-dom"
import { navlinks } from "../../constants"

const Links = () => {
  return (
    <ul className="flex items-center gap-[30px] bg-main rounded-[15px] overflow-hidden">
        { navlinks.map(link => (
            <Link key={link.id} to={link.url} >
                <li className="font-semibold md:text-[18px] text-[16px] text-[#352929] hover:bg-[#cd85af] hover:text-[#eb0e8f] rounded-[10px] py-[6px] px-[10px]"> {link.title} </li>
            </Link>
        )) }
    </ul>
  )
}

export default Links