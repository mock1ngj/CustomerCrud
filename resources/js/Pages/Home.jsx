import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { ButtonIconDanger, LinkButtonIcon } from '@/Components/ButtonIcon';
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Pagination from '@/Components/Pagination';
import { useState } from 'react';

const Home = (props) => {
    const { customers, setModal, setId } = props;
    console.log(customers);
    
    const { data, links } = customers;
    const deleteCustomer = (id) => {
        setModal('block');
        setId((old)=>{
            return old.id = id;
        })
    }
    return (
        <>
            <Head title='Home' />

            <div className='flex-row'>
                <div className='flex justify-end'>
                    <LinkButtonIcon href={'/add'} className={'button-basic hover:bg-[#2f8286]'}>
                        <FaPlus />
                    </LinkButtonIcon>
                </div>
                <div className='flex-row m-3'>
                    {data.map((customer) => (
                        <div className='customer-card' key={customer.id}>
                            <div className='inline-flex w-3/4 justify-center items-center'>{customer.first_name} {customer.last_name}</div>
                            <div className='inline-flex w-1/4 justify-end'>
                                <button className='button-danger m-3' onClick={() => deleteCustomer(customer.id)}>
                                    <ButtonIconDanger className={'button-danger m-3'}>
                                        <FaRegTrashCan />
                                    </ButtonIconDanger>
                                </button>

                                <LinkButtonIcon href={`/view/${customer.id}`} className={'button-basic bg-[#393E46] m-3'}>
                                    <FaArrowRight />
                                </LinkButtonIcon>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex m-4 justify-center'>
                    <Pagination links={links} />
                </div>
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page}></Layout>

export default Home;