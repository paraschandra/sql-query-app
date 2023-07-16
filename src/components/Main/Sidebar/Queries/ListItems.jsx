import {BiCode} from "react-icons/bi";

export const ListItems = ({ query, setCurrentQuery, toggle, setToggle}) => {
  return (
    <>
        <div className="flex justify-start items-center border-b-2 w-full h-18 p-4 cursor-pointer hover:scale-105 hover:shadow-lg"
            onClick={() => {
                setCurrentQuery(query);
                if(toggle == "open") {
                    setToggle("closed");
                }
            }}>
            <div className="flex gap-2 items-center px-2">
                <div className="text-blue-800">
                    <BiCode size={"1.5rem"}/>
                </div>
                <p className="text-base leading-4 font-medium">
                    <code>{query}</code>
                </p>
            </div>
        </div>
    </>
  )
}
