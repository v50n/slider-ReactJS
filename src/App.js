import people from './data';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [currentVal, SetCurrentVal] = useState(0);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setNewVal = () =>{
    let val = currentVal;
    val === (people.length -1) ? val = 0 : val = val + 1;
    
    SetCurrentVal(val);
  }

  const handlePreviousBtn = () =>{
    let val = currentVal;
    val === 0 ? val = (people.length -1) : (val = val - 1);

    SetCurrentVal(val);
  }
  const handleNextBtn = () =>{
    let val = currentVal;
    val === (people.length -1) ? (val = 0) : (val = val + 1);
    SetCurrentVal(val);
  }

  useEffect(()=>{
    var interval = setInterval(setNewVal, 5000);
    return () =>{
      clearInterval(interval);
    }
  }, [currentVal, setNewVal]);

  
  return (
    <div className="App">
          <h1><span className="orange">/</span> Reviews</h1>

          {
            people.map((item,index) => {
              let isShow;
              index === currentVal ? (
                isShow = "show"
              ) : (
                currentVal === (people.length -1) && index === 0 ? (isShow = "nextSlide") : (
                  currentVal === 0 && index === (people.length -1) ? (isShow = "prevSlide") : (
                    index === currentVal - 1  ? (isShow = "prevSlide") : (
                      index === currentVal + 1  ? (isShow = "nextSlide") : (isShow = "notShow")
                    )
                  )
                )
              )
                return (
                    <div className={"review-section " + isShow} key={item.id}>
                      <img src={item.image} alt="people" />
                      <div className="people-info">
                        <div className="name orange"><h4>{item.name}</h4></div>
                        <div className="job">{item.title}</div>
                      </div>
                      <div className="description">
                        <p>{item.quote}</p>
                      </div>
                      <button className="btn-previous" onClick={handlePreviousBtn}>	&lt; </button>
                      <button className="btn-next" onClick={handleNextBtn}>	&gt;</button>
                    </div>
              
                );
            })
          }

    </div>
  );
}

export default App;
