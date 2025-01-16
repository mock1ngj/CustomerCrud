import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import AddButton from '@/Components/AddButton';
import Pagination from '@/Components/Pagination';

const Home = ({customers}) => {
    const {data, links} = customers;
    return(
        <>
            <Head title='Home'/>
            <div className='flex-row'>
                <div className='flex justify-end'>
                    <AddButton/>
                </div>
                <div className='flex-row p-3 m-3'>
                    {data.map((customer)=>(
                        <div className='customer-card'>
                            <div className='inline-flex w-3/4 justify-center'>{customer.first_name} {customer.last_name}</div>
                            <div className='inline-flex w-1/4 justify-center'>Button</div>
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