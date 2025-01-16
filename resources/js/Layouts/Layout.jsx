import Modal from "@/Components/Modal";
import { useState } from "react";
import { cloneElement } from "react";
const Layout = ({children}) => {
    const [modal, setModal] = useState('hidden');
    const [id, setId] = useState({'id':''});
    return(
        <>
            <Modal modal={modal} setModal={setModal} id={id}/>
            <main>
                <div className="home-card">
                    {cloneElement(children, {setModal:setModal, setId:setId})}
                </div>
            </main>
        </>
        
    )
}

export default Layout;