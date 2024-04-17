
import { Outlet } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;