import { Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { productData } from '../../../data/Data';
import Chart from '../../chart/Chart';
import './product.css';
import airpods from './wp9401697-sports-car-4k-pc-wallpapers.jpg';

const Product = (props) => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey='Sales' title='Sales Performance' />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={airpods} alt="airpods" className="airpods" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productinfoItem">
                        <span className="productInfoKey">id: </span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productinfoItem">
                        <span className="productInfoKey">Sales: </span>
                        <span className="productInfoValue">1623</span>
                    </div>
                    <div className="productinfoItem">
                        <span className="productInfoKey">Active: </span>
                        <span className="productInfoValue">Yes</span>
                    </div>
                    <div className="productinfoItem">
                        <span className="productInfoKey">Stock: </span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
            </div>
            <hr />
            <div className="poroductBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Airpods' />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={airpods} alt="airpods" className='productUploadImg' />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{display: 'none'}} />
                        </div>
                        <div className="productButton">Update</div>
                    </div>
                </form>
                </div>
        </div>
    );
};

export default Product; 