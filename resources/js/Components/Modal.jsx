import { useForm } from "@inertiajs/react"
export default ({ modal, setModal, id }) => {
    const { data, post, } = useForm({'id':id});
    const submit = (e) => {
        console.log(data);
        
        post('/delete', {
            onFinish: () => {
                setModal('hidden')
            }
        });
    }
    return (
        <div className={`${modal} modal`}>
            <div className="block modal-foreground"></div>
            <div className='modal-content'>
                <div className="flex p-3 m-3"> Are you sure you want to delete?</div>
                <hr />
                <div className="flex justify-end">
                    <button className="button-basic m-3 hover:bg-[#2f8286] text-white" onClick={() => setModal('hidden')}>Cancel</button>
                    <button className="button-danger m-3 text-white" onClick={() => submit()}>Ok</button>
                </div>
            </div>
        </div>
    )
}