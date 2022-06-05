import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Form } from './Form';
import { setUser } from './userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {                
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/')
            })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorCode, errorMessage)
            // });
            .catch((error) => alert(error.code));
    }

    return (
        <Form
            title='register'
            handleClick={handleRegister}
        />
    )
}

export { SignUp };