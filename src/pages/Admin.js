// import { signOut as authSignOut } from 'firebase/auth';
// import { auth } from '../firebase/firebase';
// import { useAuth } from '../firebase/auth';
// import { Button } from '@mui/material';
import './Admin.scss';

const Admin = () => {
    // const { authUser, signOut } = useAuth();

    return (
        <div className="admin">
            {/* <button id='logoutBtn' onClick={() => authSignOut(auth)}>LOGOUT</button> */}
            {/* <Button id="logoutButton" variant="text" onClick={signOut}>LOGOUT</Button> */}
            <h1>ADMIN</h1>
            <div></div>
        </div>
    );
};

export default Admin;