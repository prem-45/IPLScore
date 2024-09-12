import { Link, Outlet } from "react-router-dom"
import InPageNavigation from "./InPageNavigation"

function Navbar() {
  return (
    <div className="w-full lg:w-[60%] bg-gray-800 text-white mx-auto min-h-screen  ">
    <InPageNavigation teams={[{title:"MATCHES",path:"/"},{title:"NEWS",path:"/news"},{title:"TABLE",path:"/PointTable"}]}></InPageNavigation>
      {/* <Link to={"/"}><h1>Matches</h1></Link>
      <Link to={"/PointTable"}><h1>Point Table</h1></Link> */}
    
    <Outlet/>
    </div>
  )
}

export default Navbar
