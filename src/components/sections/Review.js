import React , {useEffect , useState} from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import useRating from "../../hooks/useRating";
import useUpdateLocalStoarge from "../../hooks/useUpdateLocalStoarge";
import Fade from 'react-reveal/Zoom';
import { Form } from 'react-bootstrap';
function Review({itemId}) {
    const reviewData = JSON.parse(window.localStorage.getItem('rate')) || []
    const [localStorageItems, setLocalStorage] = useState(
        JSON.parse(window.localStorage.getItem('rate')) || []
      );
      const customHookValue = useUpdateLocalStoarge(reviewData, setLocalStorage);
    const {addrate} = useRating();
    const [value, setValue] = useState(2);
    const date = new Date(); 
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
        };
    const formattedDate = date.toLocaleString('en-US', options);
    const [review, setreview] = useState({
        id:itemId,
        name: "",
        email: "",
        comments: "",
        rate:"",
        date : formattedDate
    });
    const handleChange = (e,newValue)=>{
        setreview({...review , [e.target.name] : e.target.value, rate: newValue})
        setValue(newValue)
    }
    const handleClick = (e)=>{
        e.preventDefault();
        addrate(review)
        customHookValue()
    }
    const data = reviewData.filter((rate) => rate.id == itemId);
    const numbering = (number)=>{
            return number < 10 ? '0' + number : number;
    }
  return (
    <>
     <div id="commentswrap" className="reviews-wrap fl-wrap">
        <h6 className="comments-title">Reviews ({data.length})</h6>
            <ul className="commentlist clearafix">
                {
                    data.length > 0 ? 
                    data.map((review,index)=>{
                        return(
                        <Fade>
                        <li className="comment w-100">
                        <div className="comment-body">
                            <div className="comment-author">
                                <img alt='' src='/images/user.png' width="50" height="50"/>
                            </div>
                            <cite className="fn"><a href="#">{review.name}</a><span className="star-rating" data-starrating="5"></span>
                            <Rating name="read-only" value={review.rate} readOnly size="small" />
                            </cite>
                            
                            <div className="comment-meta">
                                <h6>{review.date}</h6>
                            </div>
                            <p>{review.comments}</p>
                            <span className="comment-numder">.{numbering(index+1)}</span>
                        </div>
                        </li></Fade>
                    )}) : (<h6 className='text-white'>Be the first to review</h6>)
                }
               
            </ul>
        </div>
   
    <div id="respond" className="clearafix review-form">
    <h6 className="comments-title">Add Review</h6>
    <Form onSubmit={handleClick}   className="custom-form fl-wrap">
        <fieldset>
            <div className="leave-rating-wrap">
               
            </div>
            <div className="row">
                
            <Form.Group className="mb-3 col-sm-6" controlId="exampleForm.ControlInput1">
       
        <Form.Control onChange={handleChange} type="text" name="name" placeholder="name" />
      </Form.Group>
                    
      <Form.Group className="mb-3 col-sm-6" controlId="exampleForm.ControlInput1">
       
       <Form.Control onChange={handleChange} type="email" name="email" placeholder="email" />
        </Form.Group>

            </div>
            <textarea className='mb-5' name="comments" onChange={handleChange}  id="commentscom" cols="40" rows="3" placeholder="Your Message:"></textarea>
            <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                    >
                                              <span className="leave-rating-title"><h6>Your rating for this product:</h6> </span>
                    <Rating
                        name="rate"
                        value={value}
                        onChange={handleChange}
                        size="small"
                    />
       </Box>
            <div className="clearfix"></div>
            <button className="btn float-btn  color-bg" id="submitcom">Add Review <i className=""><FontAwesomeIcon icon={faArrowRight}/></i></button>
        </fieldset>

    </Form>
</div>
</>
  )
}

export default Review