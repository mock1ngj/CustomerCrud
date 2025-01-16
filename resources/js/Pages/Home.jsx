import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { FaPlus } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Home = ({ }) => {
    return(
        <>
            <Head title='Home'/>
            <div className='button-add'>
                <IconContext.Provider value={{color:'white', size:'1rem'}}>
                    <FaPlus />
                </IconContext.Provider>
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page}></Layout>

export default Home;