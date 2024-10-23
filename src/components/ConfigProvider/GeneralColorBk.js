import React from "react";
//components form Antd Only
import { ConfigProvider } from 'antd';
const GeneralColorBk = (props) => {
    return (
        <>
            <ConfigProvider
            style
            theme={{
                token: {
                  // Seed Token
                  // Alias Token
                  colorBgContainer: '#EBEBEB',
                 
                },
                components: {
                  modal:{
                    colorBgContainer:'#EBEBEB',
                  }
                },
              }}
              
            >
                  {props.children}
            </ConfigProvider>
          
        </>
    )
}
export default GeneralColorBk;