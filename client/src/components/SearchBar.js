import React from "react";

function SearchBar(props){
    return(
        <form className="border" style={{padding:"1%",backgroundColor:"brown"}}>
            <div className="form-group" >
                <label htmlFor="searchInput">Search for a book</label>
                <input 
                    value={props.search}
                    onChange={props.onChange}
                    type="text" 
                    className="form-control" 
                    id="searchInput" 
                    placeholder="Enter book name">
                </input>
            </div>
            <button 
            onClick={props.onClick}
            type="submit" 
            className="btn btn-primary" 
            style={{backgroundColor:"orange", borderColor:"orange"}}>Search</button>
        </form>
    )
}

export default SearchBar;