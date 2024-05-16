const Nav=()=>{
    return(
        <div className="w-full h-[50px] bg-gray-300 flex items-center justify-between px-2">
            <div>
                <h1 className="text-2xl uppercase">Saadia Design</h1>
                </div>
                <div >
                    <ul className="flex text-2xl ">
                        <li className="px-3 hover:text-gray-800">Home</li>
                        <li className="px-3 hover:text-gray-600">Protfolio</li>
                        <li className="px-3 hover:text-gray-600">Contact</li>
                        
                    </ul>
                </div>
                <div>
                    <button className="text-[20px] hover:bg-purple-950 hover:text-white px-4" >Download CV</button>
                </div>
        </div>
    )
}
export default Nav