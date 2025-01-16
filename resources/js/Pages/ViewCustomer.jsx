import { Head } from "@inertiajs/react";
import { FaArrowLeft } from "react-icons/fa";
import { LinkButtonIcon } from "@/Components/Button";
import { useState } from "react";
import { useForm } from '@inertiajs/react'

const ButtonFooter = ({ disabled, setDisabled, submit }) => {


    if (disabled) {
        return (
            <div className="flex justify-end">
                <button className="button-basic text-white m-3 hover:bg-[#2f8286]" onClick={() => setDisabled(false)}>Edit</button>
            </div>
        )
    }

    return (
        <div className="flex justify-end">
            <button className="button-danger text-white m-3" onClick={() => setDisabled(true)}>Cancel</button>
            <button className="button-basic text-white m-3 hover:bg-[#2f8286]" onClick={submit}>Save</button>
        </div>
    )
}

const ViewCustomer = ({ customer }) => {
    const [disabled, setDisabled] = useState(true);
    const { data, setData, post, processing } = useForm(customer)

    const submit = () => {
        post('/edit',
            {
                onFinish: () => {
                    setDisabled(true);
                }
            })
    }

    return (
        <>
            <Head title={`View Customer`} />
            <div className="card-fit">
                <div className="flex-row">
                    <div className="flex">
                        <LinkButtonIcon href={'/'} onClick={() => setDisabled(true)} className={'button-basic hover:bg-[#2f8286]'}>
                            <FaArrowLeft />
                        </LinkButtonIcon>
                    </div>
                    <div className="flex-col justify-center m-2">
                        <div className="inline-block w-1/2 text-center p-1">
                            <label htmlFor="first-name" className="input-label">First Name</label>
                            <input type="text"
                                id="first-name"
                                className="input-box"
                                value={data.first_name}
                                disabled={disabled}
                                onChange={e => setData('first_name', e.target.value)} />
                        </div>
                        <div className="inline-block w-1/2 text-center p-1">
                            <label htmlFor="last-name" className="input-label">Last Name</label>
                            <input type="text"
                                id="last-name"
                                className="input-box"
                                value={data.last_name}
                                disabled={disabled}
                                onChange={e => setData('last_name', e.target.value)} />
                        </div>
                    </div>
                    <div className="flex-row justify-center m-2 text-center">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="text"
                            id="email"
                            className="input-box"
                            value={data.email}
                            disabled={disabled}
                            onChange={e => setData('email', e.target.value)} />
                    </div>
                    <div className="flex-row justify-center m-2 text-center">
                        <label htmlFor="contact" className="input-label">Contact No.</label>
                        <input type="text"
                            id="Contact"
                            className="input-box"
                            value={data.contact_no}
                            disabled={disabled}
                            onChange={e => setData('contact_no', e.target.value)} />
                    </div>
                    <ButtonFooter disabled={disabled} setDisabled={setDisabled} submit={submit} />
                </div>
            </div>
        </>
    )
}

export default ViewCustomer;