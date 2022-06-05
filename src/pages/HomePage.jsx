import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'components/userSlice';
import { Button } from '@mui/material';

const HomePage = () => {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();

    return isAuth ? (
        <div>
            <h2>Welcome to the Home Page</h2>
            <Button 
                onClick={() => dispatch(removeUser())}
                >Log out from {email}</Button>
        </div>
    ) : (
        <Navigate to='/login'/>
    )
}
export default HomePage;