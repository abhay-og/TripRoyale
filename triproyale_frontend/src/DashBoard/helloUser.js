import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';


const hello = (props) => {
//   const handleLogout = () => {
//     dispatch(unsetUserInfo({ name: "", email: "",id:"" }))
//     dispatch(unSetUserToken({ access_token: null }))
//     removeToken()
//     navigate('/login')
//   }
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { access_token } = getToken()
//   const { data, isSuccess } = useGetLoggedUserQuery(access_token)

//   const [userData, setUserData] = useState({
//     email: "",
//     name: "",
//     id:""
//   })
//   useEffect(() => {
//     if (data && isSuccess) {
//       setUserData({
//         email: data.email,
//         name: data.name,
//         id:data.id,
//       })
//     }
//   }, [data, isSuccess])
//   useEffect(() => {
//     if (data && isSuccess) {
//       dispatch(setUserInfo({
//         email: data.email,
//         name: data.name,
//         id:data.id
//       }))
//     }
//   }, [data, isSuccess, dispatch])
//   console.log(userData.id,props.ID )
const location = useLocation();
const {user} = location.state;
  return <>
    <h1>HELLO BHAIMYA {user}</h1>
    {/* <Typography variant='h5'>id: {data.id}</Typography> */}
  </>;
};

export default hello;
