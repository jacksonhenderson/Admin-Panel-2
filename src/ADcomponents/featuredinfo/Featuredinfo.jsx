import './featuredinfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const Featuredinfo = (props) => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,254</span>
                    <span className="featuredMoneyRate">
                        -23,9 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Mounth</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sale</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$36,543</span>
                    <span className="featuredMoneyRate">
                        -11,6 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Mounth</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$6,867</span>
                    <span className="featuredMoneyRate">
                        18,3 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Mounth</span>
            </div>
        </div>
    );
};

export default Featuredinfo;