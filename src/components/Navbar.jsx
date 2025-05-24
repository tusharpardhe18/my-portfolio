import { useEffect, useState } from "react";
import { cn } from "../lib/utils"


const navItems = [
    {
        name: "home", href: "#hero"
    },
    {
        name: "about", href: "#about"
    },
    {
        name: "skills", href: "#skills"
    },
    {
        name: "projects", href: "#project"
    },
    {
        name: "contact", href: "#contact"
    },
];

export const Navbar = () => {

    const { isScrolled, setIsScrolled } = useState(false);

    useEffect(() => {
         const handleScrolled = () => {
            setIsScrolled(window.screenY > 10)
         }

         window.addEventListener("scroll", handleScrolled);
         return () => window.removeEventListener("scroll", handleScrolled); 
    }, []);
    return (  
        <nav 
            className={cn( 
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )} 
        >
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> tushar's </span> portfolio
                     </span>
                </a>

                {/* desktop version */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-l font-bold text-foreground/80 hover:text-primary transition-colors duration-300" >
                            {item.name}
                        </a>
                    ))}
                </div>


                {/* mobile version */}
            </div>
        </nav>
    );
};