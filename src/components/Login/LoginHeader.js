import img1 from '../Images/luhnara 1.jpg';
import SupportIcon from '@mui/icons-material/Support';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
export default function LoginHeader() {
    return (
        <div className="flex justify-between m-2">
            <img src={img1} alt="img1" className="w-1/5" />
            <div className="flex p-2">
                <div>
                    <span className='p-4'> <SupportIcon /></span><span>Help</span>
                </div>
                <div>
                    <span className="p-4"> <LiveHelpIcon /></span><span>FAQ</span>
                </div>
               
            </div>
            
        </div>
    )
}