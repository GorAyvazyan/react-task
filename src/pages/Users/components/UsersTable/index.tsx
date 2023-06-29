import React, { useEffect, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Popover, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { UserOutlined } from "@ant-design/icons";
import { config } from "Constants";
import { useUsersActions } from "@redux";
import { USER_CURRENT_PAGE, USER_PAGE_SIZE, UserType } from "./types";

import PaginationWrapper from "./components/Pagination";
import {
  StyledActionsWrapper,
  StyledDeleteButton,
  StyledDeleteIcon,
  StyledMailIcon,
  StyledSwitch
} from "./styles";

const baseUrl = config.url.BASE_URL;
const UsersTable = () => {
  const navigate = useNavigate();
  const { setUsers, updateUser, deleteUser } = useUsersActions();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [pageSize, setPageSize] = useState(USER_PAGE_SIZE);
  const [current, setCurrent] = useState(USER_CURRENT_PAGE);
  const [total, setTotal] = useState(0);

  //TODO have separate component
  const Columns: ColumnsType<UserType> = [
    {
      title: "Photo",
      dataIndex: "photo",
      sorter: false,
      render: (_, user) => {
        return {
          children: user.photo ? (
            <Avatar size={40} src={<img src={user.photo} alt="avatar" />} />
          ) : (
            <Avatar size={40} icon={<UserOutlined />} />
          )
        };
      }
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Location",
      dataIndex: "location"
    },
    {
      title: "Registered date",
      dataIndex: "registeredDate"
    },
    {
      title: "Last active date",
      dataIndex: "lastActiveDate"
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (_, user) => {
        return {
          children: (
            <div>
              <Popover content={user.email}>
                <StyledMailIcon />
              </Popover>
            </div>
          )
        };
      }
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, user) => {
        return {
          children: (
            <StyledActionsWrapper>
              <StyledSwitch
                size="small"
                checked={user.disabled}
                $checked={user.disabled}
                defaultChecked
                onChange={(checked: boolean, event: MouseEvent<HTMLButtonElement>) =>
                  handleSwitch(checked, event, user.id)
                }
              />
              <StyledDeleteButton onClick={(event: MouseEvent) => handleDelete(event, user.id)}>
                <StyledDeleteIcon />
              </StyledDeleteButton>
            </StyledActionsWrapper>
          )
        };
      }
    }
  ];

  //TODO have separate logic for requests
  const fetchData = async (page: number, pageSize: number) => {
    try {
      const response = await fetch(`${baseUrl}/users?_page=${page}&_limit=${pageSize}`);
      if (response.ok) {
        const data = await response.json();
        setAllUsers(data);
        setUsers(data);
        const totalCountHeader = response.headers.get("X-Total-Count");
        const totalCount = Number(totalCountHeader) || 0;
        setTotal(totalCount);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSwitch = async (
    checked: boolean,
    event: MouseEvent<HTMLButtonElement>,
    userId: number
  ) => {
    event.stopPropagation();
    const newUsers = allUsers.map((user) => {
      if (user.id === userId) {
        updateUser({ id: userId, user: { disabled: checked } });
        return { ...user, disabled: checked };
      }
      return user;
    });
    setAllUsers(newUsers);
    try {
      const response = await fetch(`${baseUrl}/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          disabled: checked
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      if (response.ok) {
        await response.json();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleDelete = async (event: MouseEvent, userId: number) => {
    event.stopPropagation();
    try {
      const response = await fetch(`${baseUrl}/users/${userId}`, {
        method: "DELETE"
      });
      if (response.ok) {
        deleteUser({ id: userId });
        fetchData(current, pageSize);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchData(USER_CURRENT_PAGE, USER_PAGE_SIZE);
  }, []);

  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  return (
    <>
      <Table
        onRow={(user) => {
          return {
            onClick: () => navigate(`/user/${user.id}`, { replace: true })
          };
        }}
        columns={Columns}
        dataSource={allUsers}
        onChange={onSelectChange}
        pagination={false}
        rowSelection={rowSelection}
        scroll={{ y: 450 }}
      />
      <PaginationWrapper
        pageSize={pageSize}
        setPageSize={setPageSize}
        current={current}
        setCurrent={setCurrent}
        total={total}
        getUsers={fetchData}
      />
    </>
  );
};

export default UsersTable;
