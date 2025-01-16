import { FaPlus } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Link } from "@inertiajs/react";
export default () =>{
    return(
        <Link href="/add" className="button-basic">
            <IconContext.Provider value={{ color: 'white', size: '1rem' }}>
                <FaPlus />
            </IconContext.Provider>
        </Link>
    )
}