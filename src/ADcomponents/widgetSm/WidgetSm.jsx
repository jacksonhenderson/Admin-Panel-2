import { Visibility } from '@mui/icons-material';
import './widgetSm.css';
import Jackson from './wp2840052-sports-car-4k-pc-wallpapers.jpg'

const WidgetSm = (props) => {
    return (
        <div className='widgetSm'>
            <span className="widgetTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={Jackson} alt="" className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className="widgetSmUsername">Jackson Henderson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Jackson} alt="" className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className="widgetSmUsername">Jackson Henderson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Jackson} alt="" className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className="widgetSmUsername">Jackson Henderson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Jackson} alt="" className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className="widgetSmUsername">Jackson Henderson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Jackson} alt="" className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className="widgetSmUsername">Jackson Henderson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Jackson} alt="" className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className="widgetSmUsername">Jackson Henderson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;