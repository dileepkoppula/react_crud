import {AppBar,Toolbar,makeStyles} from '@material-ui/core'
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
    header :{
        background:'#111111'
    },
    tabs :{
color:'#FFFFFF',
textDecoration:'none',
marginRight:20,
fontSize:20
    }
})

const Navbar = () => {
    const classes = useStyle();
    return (
        <AppBar className = {classes.header} position='static'>
            <Toolbar>
                    <NavLink className={classes.tabs} to='/' exact>Home</NavLink>
                    <NavLink className={classes.tabs} to='adduser' exact >AddUser</NavLink>
                    <NavLink className={classes.tabs} to='contact' exact >Contact</NavLink>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;