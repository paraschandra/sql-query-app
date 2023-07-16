import logo from "../images/atlan-blue.svg";
import { HiMenuAlt1 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

export const Header = ({toggle, setToggle}) => {
  return (
    <div className="relative w-full flex justify-between items-center h-20
                    border-b-2 border-gray-200 dark:border-darkBorder px-4 md:px-20 mx-auto my-0">
        <div className="text-xl md:text-3xl font-bold flex justify-center items-center">
          {(toggle === "closed")?
            (<HiMenuAlt1 className='md:hidden cursor-pointer' onClick={() => setToggle("open")}/>)
            :(<RxCross2 className='md:hidden cursor-pointer' onClick={() => setToggle("closed")}/>)
          }
          <span className='mx-2'>SQL Query App</span>
        </div>
        <img className='w-24 h-12' src={logo} alt="logo-atlan" />
    </div>
  )
};