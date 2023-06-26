import React , {useState , useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,  faArrowLeft} from "@fortawesome/free-solid-svg-icons";
function Pagintaion({perpage,totalitem,paginate,currentpage}) {
    const pagenumber = [];
   for (let index = 1; index <= totalitem/perpage; index++){
    pagenumber.push(index);
   }
   const [isActive, setActive] = useState(null);
   const [next, setnext] = useState(true);
   const [perv, seperv] = useState(false);
    const activebutton = (active)=>{
            setActive(active)
        }
       
        const handleclick = (number,active)=>{
            paginate(number)
            activebutton(active)
        }
        const nextpage = ()=>{
            paginate(currentpage +=1)
          
        }
        const prevpage = ()=>{
            paginate(currentpage -=1)
        }
       useEffect(() => {
        if(currentpage === pagenumber.length){
            setnext(false)
           }else{
            setnext(true)
           }
        if(currentpage == 1){
            seperv(true)
           }else{
            seperv(false)
          
           }
       }, [currentpage]);
  return (
   
    <div className="pagination fl-wrap">
    <a disabled onClick={prevpage} style={{pointerEvents : perv===true ? "none" : ""}} className="prevposts-link"><i className=""><FontAwesomeIcon icon={faArrowLeft}/></i></a>
   { 
        pagenumber.map((number)=>{
            return(
                <a  className={`text-white ${currentpage == number?"current-page":""}`} onClick={()=>handleclick(number,number) } >0{number}.</a>
            )
        })
    }
    <a  onClick={nextpage} style={{pointerEvents : next===false ? "none" : ""}}  className="nextposts-link"><i className=""><FontAwesomeIcon icon={faArrowRight}/></i></a>
  
    
</div>
  )
}

export default Pagintaion