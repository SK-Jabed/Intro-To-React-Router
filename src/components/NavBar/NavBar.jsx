
import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];


    return (
        <nav className="p-6 bg-gray-400">
            <div className="md:hidden " onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <IoCloseSharp className="text-2xl"></IoCloseSharp> : 
                    <HiMenuAlt1 className="text-2xl font-bold "></HiMenuAlt1>
                }
                
            </div>
            <ul className= {`md:flex absolute duration-1000 bg-gray-300 md:bg-gray-400 px-4 py-2 shadow-lg rounded-lg md:static md:shadow-none
                ${open ? "top-16" : "-top-60"}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;