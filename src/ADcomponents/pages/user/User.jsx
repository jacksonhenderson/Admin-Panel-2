import './user.css';
import John from './wp9401742-sports-car-4k-pc-wallpapers.jpg';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link } from '@mui/material';

const User = (props) => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newuser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={John} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Jackson Henderson</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowButton">
                        <span className="userShowTopTitleAccount">- Account Detail</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">Jackson2023</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">10.6.2002</span>
                        </div>
                        <span className="userShowTopTitleAccount">- Contact Detail</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+1 246 549 00</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">Jackson2023@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">Tehran | Mirdamad</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='Jackson2023' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Fullname</label>
                            <input type="text" placeholder='Jackson Henderson' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='Jackson2023@gmail.com' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+1 246 549 00' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Tehran | Mirdamad' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={John} alt="John" className='userUpdateImg' />
                            <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                            <input type="file" />
                            </div>
                            <button className="userUpdateButton">Update</button>
                    </div>
                    </form>
                    </div>
            </div>
        </div>
    );
};

export default User;