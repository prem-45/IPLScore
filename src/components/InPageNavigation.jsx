import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

useState;
const InPageNavigation = ({ teams, children }) => {
  //   console.log(teams);
  //   console.log(children);
  const [index, setIndex] = useState(0);
  let tabLineRef = useRef();
  let btnRef = useRef();
  const toggleBtn = (btn, i) => {
    let { offsetWidth, offsetLeft } = btn;
    tabLineRef.current.style.width = offsetWidth + "px";
    tabLineRef.current.style.left = offsetLeft + "px";
    setIndex(i);
  };
  useEffect(() => {
    toggleBtn(btnRef.current, 0);
  }, []);
  return (
    <div className="w-full">
      <div className={"bg-blue-600 w-full flex justify-between items-end" + (teams.length>2?" h-[100px]":" h-[50px]")}>
      {teams.length > 2
        ? teams.map(({title,path}, i) => (
          <Link to={path}>
            <button
              key={i == 0}
              ref={i == 0 ? btnRef : null}
              className={
                "hover:bg-gray-200/20  font-bold px-7 py-5 text-sm md:px-20 md:py-3.5 md:text-xl " +
                (index == i ? "text-white bg-gray-200/20"  : "text-gray-200")
              }
              onClick={(e) => toggleBtn(e.target, i)}
            >
              {title}
            </button>
            </Link>
          ))
        : teams.map((team, i) => (
          
            <button
              key={i == 0}
              ref={i == 0 ? btnRef : null}
              className={
                "bg-slate-500 border-[1px] border-gray-700/20 w-[50%] h-full px-10 py-3 " +
                (index == i ? "text-white" : "text-gray-100")
              }
              onClick={(e) => toggleBtn(e.target, i)}
            >
              {team}
            </button>
          ))}
          
      <hr
        className="border-white border-[1.5px] absolute duration-300"
        ref={tabLineRef}
      />
      </div>
      { teams.length>2?"":children[index]} 
       
    </div>
  );
};

export default InPageNavigation;
