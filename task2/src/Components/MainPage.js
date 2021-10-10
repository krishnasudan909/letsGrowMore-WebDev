import React, { useState} from 'react'
import DataItems from './DataItems'
import Loader from './Loader'

function Data() {
    const [users, setUsers] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isButtonClick, setIsButtonClick] = useState(false);
    const [totalPages, setTotalPages] = useState(0);


    const fetchTheData = async (pageNo)=>{
        users && setUsers([]);
        setIsButtonClick(true);
        setLoading(true);
        let url =`https://reqres.in/api/users?page=${pageNo}`
        let data = await fetch(url);
        let parsedData = await data.json()
        setTimeout(() => {
        setUsers(parsedData.data);
        setTotalPages(parsedData.total_pages);
        console.log(parsedData);
        setIsButtonClick(false);
        setLoading(false);
        }, 2000);
    }


    const handlePrevClick = async ()=>{
        users && setUsers([]);
        let changedPageNo = pageNo-1;
        setPageNo(changedPageNo);
        fetchTheData(changedPageNo);
    }
    
     const handleNextClick = async ()=>{
        if (!(pageNo + 1 > totalPages)){
            users && setUsers([]);
            let changedPageNo = pageNo+1;
            setPageNo(changedPageNo);
            fetchTheData(changedPageNo);
        }
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
            <a className="navbar-brand" href="/" style={{marginLeft:"10px"}}>Let's Grow More</a>
            <button className="navbar-toggler" style={{marginRight:"10px"}} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" style={{marginRight:"10px"}} id="navbarTogglerDemo02" >
                <div className="d-flex justify-content-around">
                    <button disabled={pageNo<=1} type="button" className="btn btn-sm btn-dark my-2 my-sm-0" onClick={handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn  btn-outline-danger my-2 my-sm-0" onClick={fetchTheData}>Get Users</button>
                    <button disabled={pageNo + 1 >totalPages}type="button" className="btn btn-sm btn-dark my-2 my-sm-0" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="row" style={{textAlign:"center"}}>
                {loading &&  isButtonClick &&<Loader/> }
                {users.map((elements)=>{
                return <div className="col-md-4 " key={elements.id}>
                    <DataItems email={elements.email} firstName={elements.first_name} lastName={elements.last_name} imageUrl={elements.avatar}></DataItems>
                </div>
                })}
            </div>
        </div>
        </>
    )
}

export default Data


