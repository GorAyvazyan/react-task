import React from "react";
import { Menu } from "antd";
import Items from "./components/Items";

const MenuWrapper = () => {
  return (
    <>
      <Menu
        defaultSelectedKeys={["users"]}
        defaultOpenKeys={["learn"]}
        mode="inline"
        theme="dark"
        items={Items}
      />
    </>
  );
};

export default MenuWrapper;
