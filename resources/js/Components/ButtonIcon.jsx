import { IconContext } from 'react-icons';
import { Link } from "@inertiajs/react";

export const LinkButtonIcon = ({ href, className, children }) => {
    return (
        <Link href={href} className={className}>
            <IconContext.Provider value={{ color: 'white', size: '1rem' }}>
                {children}
            </IconContext.Provider>
        </Link>
    )
}

export const ButtonIconDanger = ({ children }) => {
    return (
        <IconContext.Provider value={{ color: 'white', size: '1rem' }}>
            {children}
        </IconContext.Provider>
    )
}