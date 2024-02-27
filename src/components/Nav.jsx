const Nav     = () =>{
    const content =
    <div className="">
        <ul>
            <link  to="Home">   
            <li> Home</li>
            </link>
            <link to="About">  
            <li> About </li>
            </link>
            <link to="Servicios">  
            <li> Servicios </li>
            </link>
            <link to="Projects">  
            <li> Projects </li>
            </link>
            <link to="Contacto">  
            <li> Contacto </li>
            </link>
          
        </ul>

    </div>
    return(
        <nav>  
            <div className="h-10vh flex justify-between z-50  text-white lg:py-5 px -20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-3x1 font-bold">Logo</span>
                </div>
            </div>
            <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal -hidden">
                <div className="flex.10">
                <ul className="flex gap-8 mr-16 text-[18px]">
            <link  to="Home">   
            <li> Home</li>
            </link>
            <link to="About">  
            <li> About </li>
            </link>
            <link to="Servicios">  
            <li> Servicios </li>
            </link>
            <link to="Projects">  
            <li> Projects </li>
            </link>
            <link to="Contacto">  
            <li> Contacto </li>
            </link>
          
        </ul>
                </div>
            </div>

        </nav>
    );
};
export default Nav;