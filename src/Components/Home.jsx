import {TableHead,TableRow,TableBody,TableCell,Table, Button} from '@material-ui/core'
import { useEffect, useState } from 'react';
import { getUsers,deleteUser } from '../Services/crud';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  table :{
    width:'90%'
  },
  thead:{
    '& > *':{
      background : '#000000',
      color:'#FFFFFF'
    }
  }
})
const Home = () => {

  useEffect(()=>{
    getAllUsers();
  },[]
  )
  const classes=useStyle();
  const [users,setUsers]=useState([]);
const getAllUsers = async() =>{
  const response = await getUsers();
  console.log(response);
  setUsers(response.data);
}
const deleteUserData = async(id) =>{
await deleteUser(id);
getAllUsers();
}

    return (
        <Table className = {classes.table}>
        <TableHead>
          <TableRow className = {classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map( user =>(
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.mobile}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" style={{marginRight:5}} component={Link}
                   to={`/edit/${user.id}`}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick ={()=>deleteUserData(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>
    ))
          }
        </TableBody>
      </Table>
    )
    
}

export default Home; 