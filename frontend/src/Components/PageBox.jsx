import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../Styles/PageBox.css"


const PageBox = ({ setPage }) => {
  const totalPages = useSelector(store => store.AppReducer.totalPages);
  const totalCount = useSelector(store => store.AppReducer.totalCount);
  const currentPage = useSelector(store => store.AppReducer.currentPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const showButtons = 5; // Number of buttons to display at a time
  const halfButtons = Math.floor(showButtons / 2);
  const skipPages = 4 * (showButtons - 1);

  let startPage = currentPage - halfButtons - skipPages;
  let endPage = currentPage + halfButtons - skipPages;

  if (startPage < 1) {
    startPage = 1;
    endPage = showButtons;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = totalPages - showButtons + 1;
    if (startPage < 1) {
      startPage = 1;
    }
  }
  const handlePageChange = (pageNumber) => {
    console.log("check", pageNumber);
    setPage(pageNumber)
  }



return (
  <div className="pagination">

    {pageNumbers.map((pageNumber) => {
      if (pageNumber >= startPage && pageNumber <= endPage) {
        return (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? 'pagebtn-active' : 'pagebtn-passive'}
            onClick={() =>handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      } else {
        return null; // Skip rendering the button
      }
    })}
  </div>
)

    }
export default PageBox