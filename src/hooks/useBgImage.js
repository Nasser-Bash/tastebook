import React , {useEffect} from 'react'

const useBgImage = () => {
        useEffect(() => {
                let images = document.querySelectorAll(".bg");
                images.forEach(image => {
                    let url =image.getAttribute("data-bg");
                    image.style.backgroundImage=`url(${url})`;
                });   
        }, []);
}

export default useBgImage