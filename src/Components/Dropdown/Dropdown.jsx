import React from 'react';

function Dropdown({ display, results }) {
  return (
    <div className="px-5 position-relative">
      <div className={`search-dropdown p-2 dropdown-menu w-100 text-left overflow-auto ${display && 'd-block'}`}>
        {
                    (!results)
                      ? <p className="text-secondary">Try searching for people, topics, or keywords</p>
                      : (results.length === 0) ? <p className="text-secondary">No Result Found</p>
                        : results.map(item => <p key={item.id} className="text-secondary">{item.text}</p>)
                }
      </div>
    </div>
  );
}

export default Dropdown;
