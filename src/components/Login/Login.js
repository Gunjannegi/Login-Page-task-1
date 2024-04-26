import img from '../Images/login.jpeg';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
export default function Login() {
    return (
        <div className='m-3 font-sans'>
            <LoginHeader />
            <div className="container w-full xl:w-1/3 xl:h-60 lg:w-1/2 lg:h-80 md:w-1/2 md:h-80 sm:w-full sm:h-100 h-100 mx-auto mt-72 mb-72  lg:mb-60 xl:mb-72 md:mb-60 flex flex-row">
                <div ><img src={img} alt='img' className='w-full h-60' />
                </div>
                <form className='m-4 bg-black-400'>
                    <label>User Name</label><br />
                    <input type='text' className="rounded w-max border-2 border-blue-400 mb-2" required /><br />
                    <label>Password</label><br />
                    <input type='password' className="rounded border-2 border-blue-400 " required /><br />
                    <small>Forgot Password?</small><br />
                    <button className="bg-blue-500 w-full rounded p-1 text-white mt-3">LOGIN</button>
                </form>
            </div>
            <LoginFooter />
        </div>
       
    )
}