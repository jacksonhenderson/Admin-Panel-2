import './productList.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material';
import { productRows } from '../../../../data/Data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = (props) => {
    const [data, setData] = useState(productRows);

    const userDeleteHandler = (id) => {
      setData(data.filter((item) => item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        {
          field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
              <div className="productListItem">
                <img src={params.row.img} alt="avatar" className="productListImg" />
                {params.row.name}
            </div>
          )
        } },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 230,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 200,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={`/products/${params.row.id}`}><button className='productListEdit'>Edit</button></Link>
                <DeleteOutlined className='productListDelete' onClick={() => userDeleteHandler(params.row.id)} />
              </>
            )
          }
        }
    ];
    
    return (
        <div className="productList">
                 <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        checkboxSelection
      />
        </div>
    );
};

export default ProductList;