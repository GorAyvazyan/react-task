import styled from "styled-components";
import { Button, Switch } from "antd";
import { ReactComponent as DeleteIcon } from "assets/images/delete.svg";
import { ReactComponent as MailIcon } from "assets/images/mail.svg";

export const StyledActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMailIcon = styled(MailIcon)`
  && {
    path {
      fill: #788195;
    }
  }
`;

export const StyledSwitch = styled(Switch)<{ $checked: boolean }>`
  &&& {
    background-color: ${(props) => (props.$checked ? "#72B59B" : "#F54745")};
    border-color: ${(props) => (props.$checked ? "#72B59B" : "#F54745")};
    &:focus {
      outline: none;
      box-shadow: none;
    }
    &:hover {
      background-color: ${(props) => (props.$checked ? "#72B59B" : "#F54745")};
    }
  }
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  svg {
    margin-left: 24px;
  }
  path {
    fill: #f54745;
  }
`;

export const StyledDeleteButton = styled(Button)`
  background: none;
  border: none;
  box-shadow: none;
  &:hover {
    border: none;
    box-shadow: none;
  }
`;
