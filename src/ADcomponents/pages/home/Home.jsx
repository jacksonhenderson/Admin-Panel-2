import Featuredinfo from '../../featuredinfo/Featuredinfo';
import Chart from '../../chart/Chart';
import './home.css';
import { userData } from '../../../data/Data';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';

const Home = (props) => {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart title="User Analitic" data={userData} dataKey="User" grid />
            <div className="widjets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
};

export default Home;