
const useUpdateLocalStoarge = (cart,setLocalStorage) => {
    const intervalId = setInterval(() => {
        setLocalStorage(cart);
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
}

export default useUpdateLocalStoarge