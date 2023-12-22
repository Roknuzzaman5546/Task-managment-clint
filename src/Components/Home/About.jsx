import { useEffect } from 'react';
import aboutimg from '../../assets/about.png'
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (
        <div>
            <div className=' w-11/12 mx-auto py-10'>
                <h2 data-aos="flip-down" className=" text-6xl font-bold text-center font-lobester text-orange-500">Our About</h2>
                <div className=' flex md:flex-row-reverse flex-col-reverse gap-10 justify-around items-center'>
                    <div data-aos="flip-down" className='w-full '>
                        <img className='h-72 w-80 rounded-md' src={aboutimg} alt="" />
                    </div>
                    <div data-aos="flip-up" className=' md:text-left text-center md:ml-20 ml-0'>
                        <h2 className=' text-2xl font-bold mb-2'></h2>
                        <p className=' text-xl my-2'>Creat task this</p>
                        <p>We are more than just a task management platform; we are your partner in success. Join [Your Task Management Site] today and embark on a journey towards enhanced productivity, efficiency, and achievement. Simplify your life, accomplish more, and make every moment count with [Your Task Management Site].
                        Ready to take control of your tasks? Sign up for free and experience the future of task management!</p>
                        <div className=' flex items-center md:flex-row flex-col gap-2'>
                            <h2><span className=' text-blue-700'>Email:</span> Taskmanegment@gmailtask.com</h2>
                            <h2><span className=' text-blue-700'>Place:</span>Rangpur, Bangladesh</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;