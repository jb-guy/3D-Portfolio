import { useState } from "react"
import {motion} from "motion/react"
function Navigation(){

    const scroll = (id:string) => {
        const element = document.getElementById(id);
        console.log(id,element)
        if(!element) return;
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    return <ul className="nav-ul">
        <li className="nav-li">
            <a className="nav-link" onClick={()=>{scroll("home")}}>Home</a>
        </li>
        <li className="nav-li">
            <a className="nav-link"onClick={()=>{scroll("about")}}>About</a>
        </li>
        <li className="nav-li">
            <a className="nav-link" onClick={()=>{scroll("work")}}>Work</a>
        </li>
        <li className="nav-li">
            <a className="nav-link" onClick={()=>{scroll("contact")}}>Contact</a>
        </li>
    </ul>
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">JB Guy</a>
                <button onClick={() => {setIsOpen(!isOpen)}}
                    className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle"/>
                </button>
                <nav className="hidden sm:flex">
                    <Navigation/>
                </nav>
            </div>
        </div>
        {isOpen && (
        <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} style={{maxHeight:"100vh"}} transition={{duration:0.8}}
        >
            <nav className="pb-5">
                <Navigation/>
            </nav>
        </motion.div>)}
    </div>
  )
}

export default Navbar