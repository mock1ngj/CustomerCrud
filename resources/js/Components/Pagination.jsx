import { Link } from "@inertiajs/react"
import { Fragment } from "react"
import { last, first } from "lodash"

const Links = ({ value }) => {
    //check for label if empty
    if (isNaN(parseInt(value.label))) {
        return (
            <></>
        )
    }

    //check for active
    if (value.active) {
        return (
            <Link href={value.url}
                className="link-number bg-[#00ADB5] "
                aria-current="page">
                {value.label}
            </Link>
        )
    }

    return (
        <Link href={value.url}
            className="link-number">
            {value.label}
        </Link>
    )
}

export default ({ links }) => {
    const prev = first(links).url;
    const next = last(links).url;

    if (links.length == 3) {
        return (
            <></>
        )
    }

    return (
        <nav className="flex justify-center items-center gap-x-1">
            <Link href={prev}
                className="link-arrow">
                <svg className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                </svg>
                <span aria-hidden="true" className="sr-only">Previous</span>
            </Link>
            {links.map((value) => (
                <Fragment key={value.label}>
                    <Links value={value} />
                </Fragment>
            ))}
            <Link href={next}
                className="link-arrow">
                <svg className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
                <span aria-hidden="true" className="sr-only">Next</span>
            </Link>
        </nav>

    )
}