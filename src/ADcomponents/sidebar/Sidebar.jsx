import './sidebar.css';
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, Equalizer, MailOutline, DynamicFeed, ChatBubbleOutline, Report, WorkOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/' className='link'>
                            <li className='sidebarListItem active'>
                            <LineStyle className='sidebarIcon' />
                               Home
                            </li>
                      </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/user' className='link'>
                        <li className='sidebarListItem'>
                            <PermIdentity className='sidebarIcon' />
                            Users
                        </li>
                      </Link>
                        <Link to='/productList' className='link'>
                        <li className='sidebarListItem'>
                            <Storefront className='sidebarIcon' />
                            Products
                        </li>
                     </Link>
                        <li className='sidebarListItem'>
                            <AttachMoney className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <Equalizer className='sidebarIcon' />
                            reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutline className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className="sidebarTitle">Stuff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <Report className='sidebarIcon' />
                            Report
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    );
};

export default Sidebar;