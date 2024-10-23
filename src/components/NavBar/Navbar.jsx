import { DownOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Space, theme, Tooltip } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";

import logo from "../../assets/image/catslogo.png"
import Whitelogo from "../../assets/image/CatsWhiteLogo.png"
import { FcBusinessman } from "react-icons/fc";
import './Navbar.css';

export default function NavBar() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      useEffect(() => {
        // Add event listener to handle window resize
        window.addEventListener("resize", handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []); // Empty dependency array ensures that the effect runs only once on mount    


      const menuUser = [
        {
          key: "1",
          label: "Profile",
          icon: <FcBusinessman />,
        //   onClick: handleProflie,
        },
        {
          key: "2",
          label: "Login",
          icon: <LoginOutlined />,
        //   onClick: onChangePassword,
        },
        {
          key: "3",
          label: "Logout",
          icon: <LogoutOutlined />,
        //   onClick: handleLogout,
        },
      ];

    return (
        <>
            <div className={theme === "light" ? "header" : "headerDark"}>
                <div
                    className={
                        theme === "light"
                            ? "billingManagementSystem"
                            : "billingManagementSystemDark"
                    }
                >
                    ROUTING TABLE
                </div>
                <img
                    className="logo "
                    alt=""
                    src={theme === "light" ? logo : Whitelogo}
                />
                <div className="profile">
                    <Space size={25}>
                        <div
                            className={
                                theme === "light" ? "profile-name" : "profile-name-dark"
                            }
                        >
                            Window Width: {windowSize.width}
                        </div>
                        {/* <CustomizedSwitches onChange={onChangeSwitch} checked={checked} /> */}
                        <Tooltip title="Notification" arrow>
                            <Badge
                                badgecontent={100}
                                sx={{
                                    "& .MuiBadge-badge": {
                                        color: "white",
                                        backgroundColor: "red",
                                    },
                                }}
                            >
                                <MdOutlineNotificationsActive
                                    style={theme === "light" ? "" : { color: "#fff" }}
                                />
                            </Badge>
                        </Tooltip>

                        <Dropdown
                            style={{ width: 150 }}
                            menu={{
                                items: menuUser,
                            }}
                            placement="bottomLeft"
                        >
                            <div
                                className={
                                    theme === "light" ? "profile-name" : "profile-name-dark"
                                }
                            >
                                <Space>
                                    <Avatar
                                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`}
                                    />
                                    <DownOutlined />
                                </Space>
                            </div>
                        </Dropdown>
                    </Space>
                </div>
            </div>

        </>
    );
}