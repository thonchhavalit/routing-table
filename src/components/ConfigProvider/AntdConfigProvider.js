import React from "react";
//components form Antd Only
import { ConfigProvider } from 'antd';
const TableConfigProvider = (props) => {
    return (
        <>
            <ConfigProvider
            style
            theme={{
                token: {
                  // Seed Token
                 
                  colorBgContainer: '#F9F9F9',
                },
                components: {
                  Table:{
                    colorBgContainer:'#EBEBEB',
                    borderColor:'#d1d1d1',
                  }
                },
              }}
              
            >
                  {props.children}
            </ConfigProvider>
          
        </>
    )
}
export default TableConfigProvider;