import { Head } from "@inertiajs/react";
import { FaArrowLeft } from "react-icons/fa";
import { LinkButtonIcon } from "@/Components/Button";

const AddCustomer = () => {
    return (
        <>
            <Head title="Add Customer" />
            <div className="card-fit">
                <div className="flex-row">
                    <div className="flex">
                        <LinkButtonIcon href={'/'} className={'button-basic hover:bg-[#2f8286]'}>
                            <FaArrowLeft/>
                        </LinkButtonIcon>
                    </div>
                    <div className="flex-col justify-center m-2">
                        <div className="inline-block w-1/2 text-center p-1">
                            <label htmlFor="first-name" className="input-label">First Name</label>
                            <input type="text" id="first-name" className="input-box" />
                        </div>
                        <div className="inline-block w-1/2 text-center p-1">
                            <label htmlFor="last-name" className="input-label">Last Name</label>
                            <input type="text" id="last-name" className="input-box" />
                        </div>
                    </div>
                    <div className="flex-row justify-center m-2 text-center">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="text" id="email" className="input-box" />
                    </div>
                    <div className="flex-row justify-center m-2 text-center">
                        <label htmlFor="contact" className="input-label">Contact No.</label>
                        <input type="text" id="Contact" className="input-box" />
                    </div>
                    <div className="flex justify-end">
                        <button className="button-danger text-white">Cancel</button>
                        <button className="button-basic text-white">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddCustomer;