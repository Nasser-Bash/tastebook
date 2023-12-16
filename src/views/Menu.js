import React ,{useEffect,useMemo,useState}from 'react'
import HeroSection2 from "../components/sections/HeroSection2";
import { useDispatch , useSelector } from "react-redux";
import {getAllCategories,getItems,addToCart} from "../Redux/action/actions";
import Tab from "@material-ui/core/Tab";
import {TabContext, TabPanel ,TabList} from "@mui/lab";
import { Box } from '@material-ui/core';
import { Col,Row } from 'react-bootstrap';
import Cards  from "../components/widgets/cards";
import Pagintaion from "../components/widgets/Pagintaion";
import Cards3 from "../components/widgets/card3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight  ,faList  } from "@fortawesome/free-solid-svg-icons";

function Menu() {
    const [categories, setcategories] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = useState('Beef');
    const handleChange = (event, newValue) => {
        setValue(newValue);
       
      };
    const [gridStyle, setgirdStyle] = useState(false);
   const dispatch = useDispatch();
   const categories_List = useSelector((state=>state.categories.categories));
   const items_List = useSelector((state=>state.items.items));
   const [perpage] = useState(8);
   const [currentpage, setcurrentpage] = useState(1);
   const currentitem =  items_List.slice(perpage * (currentpage - 1), perpage * currentpage);
   const paginate = (pageNumber) =>setcurrentpage(pageNumber)
   useEffect(() => {
    dispatch(getAllCategories(setLoading));
    
  }, []);
    useMemo(() => {
      setcategories(categories_List);
    }, [categories_List]);

    useEffect(() => {
        dispatch(getItems(value,setLoading));
      
      }, [value]);

 
  return (
    <div id='wrapper'>
             <HeroSection2 title="Discover Our menu"/>
             <div className="content">
             {isLoading ? (
                <section className="small-top-padding">
                <div className="loader"></div>
                </section>
             ) : ( 
              <section className="small-top-padding">
                        <div className="brush-dec2 brush-dec_bottom"></div>
                        <div className="container">
                            <div className="  ">   
                            <div className="bold-separator bold-separator_dark"><span></span>
                            </div>
                             <Box className="">
                             <TabContext  value={value}>
                                <TabList
                                   
                                    className='  p-2 '
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                    >
                                        {
                                            categories.map((category)=>{
                                                return(
                                                    <Tab className='current ' value={category.strCategory} label={category.strCategory} />   
                                                )
                                            })
                                        }
                          
                                </TabList>
                                <ul className='d-flex mt-2  mb-1  display-list'>
                                    <li className={`me-2 p-1  list ${gridStyle===false ? "active" : ""}`} onClick={()=>setgirdStyle(false)}><i className=''><FontAwesomeIcon icon={faList}/></i></li>

                                    <li className={`me-2 p-1 list ${gridStyle===true ? "active" : ""}`} onClick={()=>setgirdStyle(true)}><i className=''><FontAwesomeIcon icon={faArrowRight}/></i></li>
                                </ul>
                                
                             
                                {
                                            categories.map((category)=>{
                                                return(
                                                    
            <TabPanel className={`hero-menu_content mt-2 ${gridStyle===true ? 'hero-menu_content_gird':"" }`}  value={category.strCategory}>
                
                 <Row >
                 {currentitem.map((item) => {
                    return (
                        <Col md={gridStyle ? 4 : 6}>
                        {gridStyle ? (
                    <Cards3 title={item.strMeal} id={item.idMeal} image={item.strMealThumb} />
                    ) : (
                    <Cards title={item.strMeal} id={item.idMeal} image={item.strMealThumb} />
                    )}
                        </Col>
                    );
                    })}
        </Row>
        
         </TabPanel>
                                                )
                                            })
                                        }
                                        <Pagintaion  perpage={perpage} totalitem={items_List.length} paginate={paginate} currentpage={currentpage}/>
                                </TabContext>
                             </Box>                   
                            </div>
                                                         
                            <div className="clearfix"></div>                          
                        </div>
                        <div className="section-bg">
                            <div className="bg"  data-bg="images/bg/dec/section-bg.png"></div>
                        </div>
                    </section>
            )}
            </div>
 </div>
  )
}

export default Menu