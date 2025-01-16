import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { LinkButtonIcon } from '@/Components/Button';
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Pagination from '@/Components/Pagination';

const Home = ({customers}) => {
    const {data, links} = customers;
    return(
        <>
            <Head title='Home'/>
            <div className='flex-row'>
                <div className='flex justify-end'>
                    <LinkButtonIcon href={'/add'} className={'button-basic hover:bg-[#2f8286]'}>
                        <FaPlus />
                    </LinkButtonIcon>
                </div>
                <div className='flex-row m-3'>
                    {data.map((customer)=>(
                        <div className='customer-card' key={customer.id}>
                            <div className='inline-flex w-3/4 justify-center items-center'>{customer.first_name} {customer.last_name}</div>
                            <div className='inline-flex w-1/4 justify-end'>
                                <LinkButtonIcon href={`/view/${customer.id}`} className={'button-basic bg-[#393E46]'}>
                                    <FaArrowRight />
                                </LinkButtonIcon>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex m-4 justify-center'>
                    <Pagination links={links}/>
                </div>
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page}></Layout>

export default Home;