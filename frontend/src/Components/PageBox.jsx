import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../Styles/PageBox.css"
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const PageBox = ({page, setPage }) => {
  const totalPages = useSelector(store => store.AppReducer.totalPages);
  const totalCount = useSelector(store => store.AppReducer.totalCount);
  const currentPage = useSelector(store => store.AppReducer.currentPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const showButtons = 10; // Number of buttons to display at a time
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
const handleNextpage=()=>{
setPage(page+1)
}
const handlePrevpage=()=>{
  setPage(page-1)
}


return (
  <div className="pagination">
    <button disabled={currentPage==1?true:false}  onClick={handlePrevpage}><ArrowLeftIcon boxSize={"3"}/></button>

    {pageNumbers.map((pageNumber) => {
      if (pageNumber >= startPage && pageNumber <= endPage) {
        return (
          <button
            key={pageNumber}
            className={pageNumber == currentPage ? 'pagebtn-active' : 'pagebtn-passive'}
            onClick={() =>handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      } else {
        return null; // Skip rendering the button
      }
    })}

<button disabled={currentPage==totalPages?true:false}  onClick={handleNextpage} style={{marginLeft:"10px"}}><ArrowRightIcon boxSize={"3"}/></button>
  </div>
)

    }
export default PageBox