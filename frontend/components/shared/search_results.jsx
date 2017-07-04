import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {
  const resultsList = Object.values(results);

  let resultItems = (<li>No capes found...</li>);

  if (resultsList.length > 0) {
    resultItems = resultsList.map(result => (
      <li key={result.id}>
        <Link to={`/profile/${result.id}`}>
          <img src={result.prof_pic} />
          <span>{`${result.first_name} ${result.last_name}`}</span>
        </Link>
      </li>
    ));
  }

  return (
    <div className="search-results-box"
      onClick={(e) => e.stopPropagation()}>
      <ul className="search-results">
        {resultItems}
      </ul>
    </div>
  );
}

export default SearchResults;
