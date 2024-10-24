// ModalComponent.js
// import React from 'react';
import { Checkbox, Input, Modal } from 'antd';
import './Modal.css'
import TextArea from 'antd/es/input/TextArea';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Popconfirm, Table } from 'antd';
import { InputAdornment, TextField } from '@mui/material';


const ModalComponent = ({ open, setOpen }) => {

    const EditableContext = React.createContext(null);
    const EditableRow = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };
    const EditableCell = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);
        const inputRef = useRef(null);
        const form = useContext(EditableContext);
        useEffect(() => {
            if (editing) {
                inputRef.current?.focus();
            }
        }, [editing]);
        const toggleEdit = () => {
            setEditing(!editing);
            form.setFieldsValue({
                [dataIndex]: record[dataIndex],
            });
        };
        const save = async () => {
            try {
                const values = await form.validateFields();
                toggleEdit();
                handleSave({
                    ...record,
                    ...values,
                });
            } catch (errInfo) {
                console.log('Save failed:', errInfo);
            }
        };
        let childNode = children;
        if (editable) {
            childNode = editing ? (
                <Form.Item
                    style={{
                        margin: 0,
                    }}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingInlineEnd: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
        }
        return <td {...restProps}>{childNode}</td>;
    };
    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
        },
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
        },
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
        },
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
        },
    ]);
    // const [count, setCount] = useState(2);
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const defaultColumns = [
        {
            title: 'ORDER',
            dataIndex: 'name',
            // width: '20%',
            editable: true,
        },
        {
            title: 'ENTRY',
            dataIndex: 'age',
            editable: true,
        },
        {
            title: 'EXIT',
            dataIndex: 'address',
            editable: true,
        },
        {
            title: 'SPEED',
            dataIndex: 'address',
            editable: true,
        },
        {
            title: 'LEVEL',
            dataIndex: 'address',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];
    // const handleAdd = () => {
    //     const newData = {
    //         key: count,
    //         name: `Edward King ${count}`,
    //         age: '32',
    //         address: `London, Park Lane no. ${count}`,
    //     };
    //     setDataSource([...dataSource, newData]);
    //     setCount(count + 1);
    // };
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });


    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <Modal className='modal'
            title="Routing Info"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
        >
            <div className='container'>
                <main className='mainClass'>
                    <section className='condition'>
                        <article className='inputRow'>
                            <label>
                                ID
                                <Input readOnly onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>CallSign</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>Aircraft</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>AeroDep</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>AeroDes</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>REG</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>SSR</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                        </article>
                        <article className='inputRow'>
                            <label>
                                REC.Date
                                <Input readOnly onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>Type</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>FlightType</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>FlightType</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>FlightLevel</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>WakeTube</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                            <label>
                                <Checkbox onChange={onChange}>Trancs.Code</Checkbox>
                                <Input onChange={() => { }} />
                            </label>
                        </article>
                    </section>

                    <section className='messageDetail'>
                        <div>message</div>
                        <TextArea className='messageArea'>

                        </TextArea>
                    </section>
                    <section className='wayPointTable' style={{ marginTop: '5px' }}>
                        <div>Way point</div>
                        <Table
                            components={components}
                            size='small'
                            rowClassName={() => 'editable-row'}
                            bordered
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}
                        />
                    </section>
                </main>
                <aside className='asideClass'>
                    <TextField
                        label="ROUTE ITEM CRITERIA"
                        variant="outlined"
                        // value={search}
                        // onChange={handleSearchChange}
                        // style={{ marginTop: '15px' }}
                        InputProps={{
                            readOnly: true,
                            style: { height: '500px', top:'0' },
                            startAdornment: (
                                <InputAdornment className='inputAdornment'>
                                    <label>
                                        <div>Route Contain</div>
                                        <Input readOnly onChange={() => { }} placeholder='' />
                                    </label>
                                    <label>
                                        <div>And also Contain</div>
                                        <Input readOnly onChange={() => { }} placeholder='' />
                                    </label>
                                    <label>
                                        <div>And also Contain</div>
                                        <Input readOnly onChange={() => { }} placeholder='' />
                                    </label>
                                    <label>
                                        <div>And also Contain</div>
                                        <Input readOnly onChange={() => { }} placeholder='' />
                                    </label>
                                    <label>
                                        <div>And also Contain</div>
                                        <Input readOnly onChange={() => { }} placeholder='' />
                                    </label>
                                    <label>
                                        <div>And also Contain</div>
                                        <Input readOnly onChange={() => { }} placeholder='' />
                                    </label>
                                    <label>
                                        <div>And also Contain</div>
                                        <Input readOnly onChange={() => { }} placeholder='' />
                                    </label>
                                    <label>
                                        <div>And also Contain</div>
                                        <Input readOnly onChange={() => { }} placeholder='' />
                                    </label>
                                </InputAdornment>
                            ),
                             // You can set the height here
                        }}
                    />
                </aside>
            </div>

        </Modal>
    );
};

export default ModalComponent;
