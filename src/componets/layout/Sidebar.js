import React, { useEffect, useState } from 'react'
import { searchItem ,getAllCategories} from "../../Redux/action/actions";
import { useDispatch , useSelector} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Sidebar({setsearch_view}) {
    const dispatch = useDispatch();
    const categories_List = useSelector((state=>state.categories.categories));
    const search = (word)=>{
        if(word ===""){
            setsearch_view(false)
        }else{  
          dispatch(searchItem(word));
          setsearch_view(true);
      }
    }
    useEffect(() => {
        dispatch(getAllCategories());
      }, []);
  return (
         <div className="col-md-4">
          
                <div className="main-sidebar fixed-bar fl-wrap">
                    
                    <div className="main-sidebar-widget fl-wrap">
                        <div className="search-widget fl-wrap">
                            <form action="#"  >
                                <input onChange={(e)=>search(e.target.value)} name="se" id="se" type="text" className="search-inpt-item" placeholder="Search.." />
                                <button className="search-submit color-bg" id="submit_btn"><i className=""><FontAwesomeIcon icon={faSearch}/></i> </button>
                            </form>
                        </div>
                    </div> 
                    <div className="main-sidebar-widget fl-wrap">
                        <h3>Categories</h3>
                        <div className="tags-widget">
                            <div className="tagcloud">
                                {
                                    categories_List.map((category)=>{
                                        return(
                                            <a href="#">{category.strCategory}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                                         
                </div>
                                                   
            </div>
  )
}

export default Sidebar