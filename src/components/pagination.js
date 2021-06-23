import React from "react";

const Pagination = ({NextPage, PrevPage}) => {
  return ( 
    <div>
      {NextPage && <button onClick={PrevPage}>Prev</button>}
      {PrevPage && <button onClick={NextPage}>Next</button>}
    </div>
   );
}
 
export default Pagination;