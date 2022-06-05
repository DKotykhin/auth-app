import { SignUp } from "components/SignUp";
import { Link } from "react-router-dom";


const RegisterPage = () => {
    return(
        <>
            <div>
                <h2>Register Page</h2>
                <h2>Already have an account?</h2>
                <Link to='/login'>Sign in</Link>
            </div>
            <SignUp/>
        </>
    )
}
export default RegisterPage;