import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className=' relative'>
                <img className=' w-full h-[400px] opacity-50' src={banner} alt="" />
                <div className='absolute flex flex-col items-center left-1/3 top-40 h-full bottom-0'>
                    <h2 className=' text-6xl text-blue-600 mb-5'>Creat your task</h2>
                    <button className='btn btn-secondary'>Let’s Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;