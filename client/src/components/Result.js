import React from "react";

function Result(props){
    return(
        <div className="border bg-light" style={{marginTop:"5px", marginBottom:"5px"}}>
        <div className="pt-3 px-3">
            <div className="row ">
                <div className="col-5">
                    <p><strong>{props.title}</strong></p>
                    <p>Written By: <span style={{color: "orange"}}>{props.author}</span></p>
                </div>
                <div className="col-7">
                    <a href={props.bookLink} target="_blank" rel="noopener noreferrer" className="btn btn-info mr-2" style={{backgroundColor:"orange", borderColor:"orange", cursor:"pointer"}}>View</a>
                    <a className="btn btn-secondary" style={{backgroundColor:"#cccc00", borderColor:"#cccc00", color:"white", cursor:"pointer"}} onClick={props.handleSave}
                    data-title={props.title}
                    data-author={props.author}
                    data-imagelink={props.imageLink} 
                    data-description={props.description}
                    data-booklink={props.bookLink}
                    data-bookid={props.bookId}>Save</a>
                </div>
            </div>

            <div className="row">

                <div className="col-md-3 col-sm-12">
                    <img src={props.imageLink} alt="bookimage" ></img>

                </div>
                <div className="col-md-9 col-sm-12">
                    <p>{props.description}</p>
                    
                    
                </div>
                
            </div>

        </div>
        </div>
    )
}

export default Result;