import React from 'react';


const FilterBar = ({keyword, setKeyword, searchHandler, clearSearch}) => {


    return (
        <li className="bg-warning rounded m-2 p-2 text-center list-group">
            <div className="row">
                <div className="col-12">
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="form-control w-50 m-auto"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>

                <div className="col-6">
                    <button
                        className="btn btn-danger m-2 text-warning"
                        onClick={searchHandler}
                    >Search
                    </button>
                </div>
                <div className="col-6">
                    <button
                        className="btn btn-danger m-2 text-warning"
                        onClick={clearSearch}
                    >Clear
                    </button>
                </div>
            </div>
        </li>

    );
};

export default FilterBar;