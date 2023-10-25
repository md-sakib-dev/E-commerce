import React from "react";
import { Pagination } from "@mui/material";

import { PageSetUp } from "../redux/features/home";

import { useDispatch } from "react-redux";

export default function CustomPagination({ totalPages }) {
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(PageSetUp(page));
    window.scroll(0,0)
  };
  return (
    <div >
      <Pagination shape="rounded" color="primary"  className="text-white"
        count={totalPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
}
