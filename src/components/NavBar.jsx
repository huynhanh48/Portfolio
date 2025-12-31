import logo from "/Logo.svg"
import { nav } from "../constants/root"
import { CiUser } from "react-icons/ci";
export default function NavBar() {
    return (
        <header className="h-16 py-2 bg-primary box-border px-6">
            <nav className="flex  justify-between  items-center">
                <img src={logo} alt="Logo" />
                <ul className="flex gap-10 ">
                    {nav.map(child => (<li key={child.label} className='text-white hover:cursor-pointer  font-semibold hover:font-bold'>{child.label}</li>))}
                </ul>
                <button className="cursor-pointer">
                    <CiUser className="text-white font-bold text-2xl" />
                </button>
            </nav>
        </header>
    )
}
