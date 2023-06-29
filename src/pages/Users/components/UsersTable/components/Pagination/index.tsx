import React, { useEffect } from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import { USER_CURRENT_PAGE, USER_PAGE_SIZE } from "../../types";
import {
  StyledPaginationWrapper,
  StyledChangerWrapper,
  StyledTypography,
  StyledTotalNumber,
  StyledNumber
} from "./styles";

interface PaginationType {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  current: number;
  setCurrent: (current: number) => void;
  total: number;
  getUsers: (page: number, pageSize: number) => void;
}

const PaginationWrapper = ({
  pageSize,
  setPageSize,
  current,
  setCurrent,
  total,
  getUsers
}: PaginationType) => {
  const onChange: PaginationProps["onChange"] = (page, pageSize) => {
    const currentPage = page || USER_CURRENT_PAGE;
    const size = pageSize || USER_PAGE_SIZE;
    setCurrent(currentPage);
    setPageSize(size);
    getUsers(currentPage, size);
  };

  useEffect(() => {
    setCurrent(USER_CURRENT_PAGE);
    setPageSize(USER_PAGE_SIZE);
  }, []);
  return (
    <>
      <StyledPaginationWrapper>
        <StyledChangerWrapper>
          <StyledTypography>Changer</StyledTypography>
          <Pagination
            current={current}
            pageSize={pageSize}
            showSizeChanger
            onChange={onChange}
            total={total}
          />
        </StyledChangerWrapper>
        <StyledTotalNumber>
          Total number of users <StyledNumber>{total}</StyledNumber>
        </StyledTotalNumber>
      </StyledPaginationWrapper>
    </>
  );
};

export default PaginationWrapper;
