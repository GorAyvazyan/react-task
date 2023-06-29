import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Divider, Row, Col, message, Upload } from "antd";
import type { UploadProps } from "antd";
import { RcFile } from "antd/es/upload";
import { config } from "Constants";
import { UsersSelectors, UsersStore, useUsersActions } from "@redux";
import image from "assets/images/image.svg";
import {
  StyledContentWrapper,
  StyledUser,
  StyledUserWrapper,
  StyledInput,
  StyledTypography,
  StyledUploadButton,
  StyledSaveButton
} from "./styles";

const baseUrl = config.url.BASE_URL;

const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { updateUser } = useUsersActions();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const id = Number(userId);
  const user = useSelector((state) =>
    UsersSelectors.getUserById(state as { users: UsersStore }, id)
  );
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };
  const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        getBase64(info.file.originFileObj as RcFile, (url) => {
          setPhoto(url);
        });
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  const handleSave = async () => {
    if (userId) {
      updateUser({ id, user: { name: userName, email, location } });
      try {
        await fetch(`${baseUrl}/users/${userId}`, {
          method: "PATCH",
          body: JSON.stringify({ name: userName, email, location }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error:", error);
      }
    } else {
      try {
        await fetch(`${baseUrl}/users`, {
          method: "POST",
          body: JSON.stringify({ id: Date.now(), name: userName, photo, email, location }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error:", error);
      }
      navigate("/users", { replace: true });
    }
  };

  return (
    <>
      <StyledContentWrapper>
        <Divider orientation="left" orientationMargin={0}>
          <StyledUser>{userId ? "Edit user" : "New user"}</StyledUser>
        </Divider>
        <Row>
          <Col span={17}>
            <StyledUserWrapper>
              <Col span={10}>
                <StyledInput
                  placeholder="User name"
                  value={userName || user?.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                />
                <StyledInput
                  placeholder="Email"
                  value={email || user?.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                <Upload style={{ width: "100%" }} {...props}>
                  <StyledUploadButton>
                    <img src={image} alt="" />
                    <StyledTypography>Photo</StyledTypography>
                  </StyledUploadButton>
                </Upload>
                <StyledInput
                  placeholder="Location"
                  value={location || user?.location}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                />
                <StyledSaveButton type="primary" onClick={handleSave}>
                  Save
                </StyledSaveButton>
              </Col>
            </StyledUserWrapper>
          </Col>
        </Row>
      </StyledContentWrapper>
    </>
  );
};

export default User;
