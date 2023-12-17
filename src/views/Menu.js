import React ,{useEffect,useMemo,useState}from 'react'
import HeroSection2 from "../components/sections/HeroSection2";
import { useDispatch , useSelector } from "react-redux";
import {getAllCategories,getItems,addToCart} from "../Redux/action/actions";
import Tab from "@material-ui/core/Tab";
import {TabContext, TabPanel ,TabList} from "@mui/lab";
import { Box, makeStyles } from '@material-ui/core';
import { Col,Row } from 'react-bootstrap';

import Pagintaion from "../components/widgets/Pagintaion";
import Cards3 from "../components/widgets/card3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical  ,faList  } from "@fortawesome/free-solid-svg-icons";
const useStyles = makeStyles((theme) => ({
    activeTab: {
      color: '#C19D60 !important', // Change the color to your desired color
      borderBottom:'red !important' // Change the background color to your desired color
    },
    
  }));
function Menu() {
    const [categories, setcategories] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = useState('Beef');
    const handleChange = (event, newValue) => {
        setValue(newValue);
       
      };
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


      const classes = useStyles();
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
                                      TabIndicatorProps={{ style: { backgroundColor: "#C19D60" } }}
                                    className='  p-2 '
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                    sx={{
                                        '&:not(.Mui-selected)': {
                                          color: '#C19D60', // Change the color to your desired color for non-active tabs
                                        },
                                      }}
                                    >
                                        {
                                            categories.map((category)=>{
                                                return(
                                                    <Tab 
                                             
                                                    classes={{ selected: classes.activeTab }} value={category.strCategory} label={category.strCategory}
                                                    
                                                    />   
                                                )
                                            })
                                        }
                          
                                </TabList>
                           
                                
                             
                                {
                                            categories.map((category)=>{
                                                return(
                                                    
            <TabPanel className={` mt-2 hero-menu_content_gird`}  value={category.strCategory}>
                
                 <Row >
                 {currentitem.map((item) => {
                    return (
                         <Col md={6} lg={4}>
                         <Cards3 title={item.strMeal} id={item.idMeal} image={item.strMealThumb} />
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
