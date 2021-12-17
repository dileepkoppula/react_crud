import { FormControl, FormGroup, InputLabel,Input, Button,makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Services/crud";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%'
    }
})
const intialValues={
    name:'',
    username:'',
    email:'',
    mobile:''
}
const AddUser = () => {
    const [user,setUser] = useState(intialValues);
    const {name,username,email,mobile} = user;
    const classes = useStyle();
    const history = useHistory();
    const onValueChange = (e) =>{
setUser({...user,[e.target.name]:e.target.value})
    }

    const addUserDetails = async() =>{
       await addUser(user);
       history.push('./');
    }

    return (
<FormGroup className = {classes.container}>
    <Typography variant="h4">Add User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={name}/>
    </FormControl>
    <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name ="username" value={username}/>
    </FormControl>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name ="email" value={email}/>
    </FormControl>
    <FormControl>
        <InputLabel>Mobile</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name ="mobile" value={mobile}/>
    </FormControl>
    <Button variant="contained" onClick ={()=>addUserDetails()} color="primary">Add User</Button>
</FormGroup>
        )
    
}

export default AddUser; 