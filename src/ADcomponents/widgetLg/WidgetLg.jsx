import './widgetLg.css';
import McLaren from './wp9073852-sports-car-4k-pc-wallpapers.jpg';

const WidgetLg = (props) => {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Last Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={McLaren} alt="user" className="widgetLgImg" />
                    <span className="widgetLgName">Jackson Henderson</span>
                    </td>
                    <td className="widgetLgDate">2 Apr 2022</td>
                    <td className="widgetLgAmount">$150.55</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={McLaren} alt="user" className="widgetLgImg" />
                    <span className="widgetLgName">Jackson Henderson</span>
                    </td>
                    <td className="widgetLgDate">2 Apr 2022</td>
                    <td className="widgetLgAmount">$150.55</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={McLaren} alt="user" className="widgetLgImg" />
                    <span className="widgetLgName">Jackson Henderson</span>
                    </td>
                    <td className="widgetLgDate">2 Apr 2022</td>
                    <td className="widgetLgAmount">$150.55</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={McLaren} alt="user" className="widgetLgImg" />
                    <span className="widgetLgName">Jackson Henderson</span>
                    </td>
                    <td className="widgetLgDate">2 Apr 2022</td>
                    <td className="widgetLgAmount">$150.55</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default WidgetLg;