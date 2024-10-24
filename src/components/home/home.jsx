import { InputAdornment, TextField } from '@mui/material';
import { Input, Table } from 'antd';
import { createStyles } from 'antd-style';
import { DatePicker } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import ModalComponent from '../modal/Modal'; // Adjust the path as necessary

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [search, setSearch] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const columns = [
    {
      title: 'CallSign',
      width: 100,
      dataIndex: 'name',
      fixed: 'left',
    },
    {
      title: 'AeroDep',
      width: 100,
      dataIndex: 'name',
    },
    {
      title: 'AeroDes',
      dataIndex: 'name',
      key: '1',
      fixed: 'left',
    },
    {
      title: 'DOF',
      dataIndex: 'age',
      key: '2',
    },
    {
      title: 'Est.Time',
      dataIndex: 'age',
      key: '3',
    },
    {
      title: 'Aircraft',
      dataIndex: 'address',
      key: '4',
    },
    {
      title: 'REG',
      dataIndex: 'address',
      key: '5',
    },
    {
      title: 'Type',
      dataIndex: 'address',
      key: '6',
    },
    {
      title: 'FlightType',
      dataIndex: 'address',
      key: '7', // Make sure keys are unique
    },
    {
      title: 'Action 1',
      fixed: 'right',
      width: 90,
      render: () => (
        <a
          onClick={() => setOpen(true)} // Open modal on click
          style={{ backgroundColor: "lightgreen", padding: '0 5px', borderRadius: '5px' }}
        >
          decoded
        </a>
      ),
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Olivia',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Ethan',
      age: 40,
      address: 'London Park',
    }, {
      key: '2',
      name: 'Ethan',
      age: 40,
      address: 'London Park',
    }, {
      key: '2',
      name: 'Ethan',
      age: 40,
      address: 'London Park',
    }, {
      key: '2',
      name: 'Ethan',
      age: 40,
      address: 'London Park',
    }, {
      key: '2',
      name: 'Ethan',
      age: 40,
      address: 'London Park',
    }, {
      key: '2',
      name: 'Ethan',
      age: 40,
      address: 'London Park',
    }, {
      key: '2',
      name: 'Ethan',
      age: 40,
      address: 'London Park',
    },
    // Add more data as needed...
  ];

  const { styles } = useStyle();
  
  return (
    <>
      <section style={{ margin: '10px', backgroundColor: 'white', borderRadius: '8px', padding: '5px' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          style={{ marginTop: '15px', width: '100%' }}
          InputProps={{
            readOnly:true,
            startAdornment: (
              <InputAdornment position="start" style={{ display: 'flex', gap: '10px' }}>
                <DatePicker
                  style={{ width: '500px' }}
                  label="DOF"
                  value={date}
                  onChange={handleDateChange}
                />
                <Input onChange={() => {}} placeholder="AeroDep" style={{ marginLeft: '10px' }} />
                <Input onChange={() => {}} placeholder="AeroDes" style={{ marginLeft: '10px' }} />
                <Input onChange={() => {}} placeholder="Aircraft" style={{ marginLeft: '10px' }} />
              </InputAdornment>
            ),
          }}
        />
      </section>
      
      <main style={{ padding: '5px', backgroundColor: 'white', borderRadius: '8px', margin: '10px' }}>
        <div style={{ paddingLeft: '15px', fontWeight: 'bold' }}>FPL Table</div>
        <Table
          style={{
            margin: '10px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.19)',
            borderRadius: '8px',
          }}
          className={styles.customTable}
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: 'max-content' }}
          pagination={false}
        />
      </main>
      
      <ModalComponent open={open} setOpen={setOpen} />
    </>
  );
};

export default HomePage;
