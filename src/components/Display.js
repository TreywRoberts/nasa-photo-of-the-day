import React, {useState, useEffect} from "react";
import axios from 'axios'
import styled from 'styled-components'

const StyledApp = styled.div`
  /* *{
    background-color: black;
    color:white;
  } */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: white;

  .display-box{
    display: flex;
    flex-direction:column ;
    align-items: center;
    /* justify-content: center; */
    background-color: black;
    color: white;
    width: 49%;
    
  }                                                                                                                   
  img{
    width:50%;
  }
  .search{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 4%;
  }
  `

function Display(){
    const[photo, setPhoto] = useState({})
    const[temp, setTemp] = useState('')
    const[inputValue, setInputValue] = useState('')
    // const[rover, setRover] = useState({})

  useEffect(() =>{
    const fetchImage = () =>{
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${inputValue}`)
      .then(res=>{
        setPhoto(res.data)
      })
      .catch(err=>{

      })
    }
    fetchImage()
  },[inputValue] )

  // useEffect(()=>{
  //   axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
  //   .then(res=>{
  //     setRover(res.data)
  //     console.log(res.data)
  //   })
  // },[])
  // console.log(rover)

  
  const changeInput = evt => {
    const { value } = evt.target;
    // setInputValue(value)
    setTemp(value)
  }

  const reset = () => {
    /* STEP 5 */
    setInputValue(' ')
  };
  const onClickInput = (e) =>{
      e.preventDefault();
      console.log('helllooo')
      setInputValue(temp)
      
  }
  console.log(inputValue)

  const API_KEY = 'DXUUGOwFmoJZyyyeWI355njm4JXCa4licvy0cZNu'

  return (
    <StyledApp>
      <div className='display-box'>

        <h2>{photo.title}</h2>
        <img src={photo.url} alt='photo of the day'/>
    {/* <div className='display-box'> */}
          <h3>Date: {photo.date}</h3>
        <p>
          {photo.explanation}
        </p>
        <p>by {photo.copyright}</p>
    {/* </div> */}
    </div>
  

      <div className='search'>
          <h4>Check out some photos from different days!</h4>
          <form onSubmit={onClickInput}>
            <input id='input' type='text' onChange={changeInput} value={temp} />
            <button type='submit'>Submit</button>
          </form>
      </div>
  </StyledApp>
);
}

export default Display;
