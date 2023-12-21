import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className=''>
            <div className=' relative'>
                <img className=' w-full lg:h-[400px] h-96' src={banner} alt="" />
                <div className='absolute flex flex-col left-5 top-1/4 h-full bottom-0'>
                    <h2 className=' text-6xl text-blue-600 mb-5 font-styls'>Creat your <br /> task</h2>
                    <Link to="/dashbord/profile">
                        <button className='btn btn-secondary'>Let’s Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;