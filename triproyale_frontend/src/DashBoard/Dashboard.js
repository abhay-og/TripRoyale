import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { Link } from 'react-router-dom';


const Dashboard = (props) => {
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "",id:"" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    // navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const gotohello = () => {
    console.log("ibdsefee");
    navigate("/hello",{
      state:{
        user:props.id
      }
    })
  }
  
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    id:""
  })
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
        id:data.id,
      })
    }
  }, [data, isSuccess])
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name,
        id:data.id
      }))
    }
  }, [data, isSuccess, dispatch])
  // console.log(userData.id,props.ID )
  return <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Email: {userData.email}</Typography>
        <Typography variant='h6'>Name: {userData.name}</Typography>
        <Typography variant='h6'>Id: {props.id}</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
        <Button variant='contained' color='warning' size='large' onClick={gotohello}  sx={{ mt: 8 }}>Hello</Button>
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
    </Grid>
    {/* <hello id={props.ID }></hello> */}
  </>;
};

export default Dashboard;
