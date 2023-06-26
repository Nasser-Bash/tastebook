import React , {useEffect,useState} from 'react'

const useRating = (id) => {

const [reviewData, setreviewData] = useState(JSON.parse(localStorage.getItem('rate')) || []);


const addrate = (updatedReview) => {
      const updatedreviewData = [...reviewData, updatedReview];
      window.localStorage.setItem('rate', JSON.stringify(updatedreviewData));

             return addrate;
}
return {  addrate  };
}


export default useRating