import { Head } from "@inertiajs/react";
import { FaArrowLeft } from "react-icons/fa";
import { LinkButtonIcon } from "@/Components/ButtonIcon";
import { useForm } from "@inertiajs/react";

const Cancel = ({ processing, onClick }) => {
    if (processing) {
        return (
            <button className="button-danger text-white m-3" onClick={()=>onClick()}>Cancel</button>
        )
    }
    return (
        <></>
    )
}

const SubmitFooter = ({ processing, isDirty, submit, reset }) => {
    if (!processing) {
        return (
            <>
                {isDirty && (<button className="button-danger m-3 text-white" onClick={() => reset()}>Clear</button>)}
                <button className="button-basic text-white m-3" onClick={() => submit()}>Save</button>
            </>
        )
    }
    return (
        <>
        </>
    )
}

const AddCustomer = () => {
    const { data, setData, post, processing, cancel, isDirty, reset } = useForm({
        'first_name': '',
        'last_name': '',
        'email': '',
        'contact_no': '',
    });

    const submit = () => {
        post('/add')
    }
    return (
        <>
            <Head title="Add Customer" />
            <div className="card-fit">
                <div className="flex-row">
                    <div className="flex">
                        <LinkButtonIcon href={'/'} className={'button-basic hover:bg-[#2f8286]'}>
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
                                onChange={e => setData('first_name', e.target.value)} />
                        </div>
                        <div className="inline-block w-1/2 text-center p-1">
                            <label htmlFor="last-name" className="input-label">Last Name</label>
                            <input type="text"
                                id="last-name"
                                className="input-box"
                                value={data.last_name}
                                onChange={e => setData('last_name', e.target.value)} />
                        </div>
                    </div>
                    <div className="flex-row justify-center m-2 text-center">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="text"
                            id="email"
                            className="input-box"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)} />
                    </div>
                    <div className="flex-row justify-center m-2 text-center">
                        <label htmlFor="contact" className="input-label">Contact No.</label>
                        <input type="text"
                            id="Contact"
                            className="input-box"
                            value={data.contact_no}
                            onChange={e => setData('contact_no', e.target.value)} />
                    </div>
                    <div className="flex justify-end">
                        <Cancel processing={processing} onClick={cancel}></Cancel>
                        <SubmitFooter processing={processing} submit={submit} isDirty={isDirty} reset={reset} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddCustomer;