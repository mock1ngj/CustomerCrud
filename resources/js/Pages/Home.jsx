import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import AddButton from '@/Components/AddButton';

const Home = ({ }) => {
    return(
        <>
            <Head title='Home'/>
            <div className='flex-row'>
                <div className='flex justify-end'>
                    <AddButton/>
                </div>
                <div className='flex-row p-3 m-3'>
                    {[1,2,3,4,5].map((value)=>(
                        <div className='customer-card'>
                            <div className='inline-flex w-3/4 justify-center'>{value}</div>
                            <div className='inline-flex w-1/4 justify-center'>Button</div>
                        </div>
                    ))}
                    
                </div>
            </div>
            
        </>
    )
}

Home.layout = page => <Layout children={page}></Layout>

export default Home;