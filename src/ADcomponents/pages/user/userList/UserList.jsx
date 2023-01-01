import './userList.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material';
import { userRows } from '../../../../data/Data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = (props) => {
  const [data, setData] = useState(userRows);

  const userDeleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id))
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
        </div>
      )
    } },
    {
      field: 'email',
      headerName: 'Email',
      width: 230,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}><button className='userListEdit'>Edit</button></Link>
            <DeleteOutlined className='userListDelete' onClick={() => userDeleteHandler(params.row.id)} />
            
          </>
        )
      }
    }
  ];
    
    return (
        <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        checkboxSelection
      />
        </div>
    )
};

export default UserList;