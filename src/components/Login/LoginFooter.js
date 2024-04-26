import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function LoginFooter() {
    return (
        <div className="flex justify-center justify-between">
            <div></div>
            <ul className='list-disc flex '>
                <li className="pr-12">Privacy policy</li>
                <li>Terms & Conditions</li>
            </ul>
            <div className='flex'>
                <FacebookIcon className="m-1" />
                <LinkedInIcon className="m-1" />
                <InstagramIcon className="m-1" />
            </div>

        </div>
    )
}