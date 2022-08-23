import React from 'react';

function Pagination({totalRepos, repoPerPage, paginate}) {
const pageNumber = [];

for(let i = 1; i <= Math.ceil(totalRepos / repoPerPage); i++){
    pageNumber.push(i);
}


  return ( 
    <nav>
        <ul className="pagination d-flex justify-content-center mt-5">
        
            {pageNumber.map(number => {
                return <li key={number} className="page-item">
                    
                    <a href="!#" className="page-link" onClick={()=>{paginate(number)}}>
                        {number}
                    </a>
                </li>
            })}
        </ul>
    </nav>
  )
}

export default Pagination