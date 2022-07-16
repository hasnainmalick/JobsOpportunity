import {styled,Link} from '@mui/material';
import {theme} from './Styletheme'
export const LinkRouter = styled(Link)({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    fontFamily : 'Inter',
    fontWeight : '600',
    padding    : '0.5rem',
    margin     : '0 1rem'
})