import React, { Dispatch, SetStateAction } from "react";
import './paginate.css';

interface IResult {
    result: number,
    pageNo: number,
    maxPages: number,
    setPageNo: Dispatch<SetStateAction<number>>
}
const Pagination: React.FC<IResult> = ({result, pageNo, setPageNo, maxPages}) :JSX.Element => {
    const onNext = () => {
        pageNo < maxPages - 1 && setPageNo(pageNo + 1);

    };
    
    const onPrev = () => {
        pageNo > 0 && setPageNo(pageNo - 1)
    };

    return (
        < div className="container2">
            <div className="paginate">
                {result} <span className="result-found">Results found</span>
            </div>
            <div className="paginate-right">
                <div className="paginate-current">
                    <span className="pages">
                        Page {pageNo + 1} of {maxPages}
                    </span>
                </div>
                <div className="pagination-buttons">
                    <div className="pagination-button-wrapper" onClick={() => onPrev()}>
                        <svg width="44" height="44" className="img1"  viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="42" height="42" rx="1" stroke="white" stroke-width="2"/>
                        </svg>
                        <svg width="12" className="img2" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-1.31174e-07 10L11.25 19.5263L11.25 0.47372L-1.31174e-07 10Z" fill="white"/>
                        </svg>

                    </div>
                </div>
                <div className="pagination-buttons">
                    <div className="pagination-button-wrapper" onClick={() => onNext()} >
                   
                        <svg width="44" height="44" className="img1" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="42" height="42" rx="1" stroke="white" stroke-width="2"/>
                        </svg>
                        <svg width="12" height="20" className="img2" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10L0.75 19.5263L0.75 0.47372L12 10Z" fill="white"/>
                        </svg>

                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Pagination;