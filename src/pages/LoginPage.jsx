import { Login } from "components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return(
        <>
            <div>
                <h2>Login Page</h2>            
                <h2>Please Login or</h2>
                <Link to='/register'>Register</Link>                
            </div>
            <Login/>
        </>
    )
}
export default LoginPage;