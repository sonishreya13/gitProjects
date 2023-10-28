import { Link } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
function Header() {
    return (
        <div className='header'>
            <Link className='link' to="/"> Home </Link>
            <Link className='link' to="/foods"> Foods </Link>
            <Link className='link' to="/about"> About </Link>
            <Link className='link' to="/contact"> Contact </Link>
            <Link className='logo' to="/login"> <PermIdentityOutlinedIcon sx={{ float: 'right' }} />
            </Link>
            <Link className='logo' to="/addtocart"><ShoppingBagOutlinedIcon sx={{ float: 'right' }} />
            </Link>
        </div>
    )
}
export default Header;