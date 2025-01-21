import { useState } from "react";
import MyButton from "../myButton/MyButton";
import './feedback.css'


function Feedback(){
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    
    const handleLike = () => {
        setLike(prev => prev + 1)
    };

    const handleDislike = () => {
        setDislike(prev => prev + 1)
    };

    const handleReset = () => {
        setLike(prev => 0)
        setDislike(prev => 0)
    };
    
    return (
        
        <div className="containerHmwrk04">
            <h1>Rating counter</h1>
            <div className="divHmwrk04">
            <h2>{like}</h2>
            <MyButton text={'Like'} type={'button'} func={handleLike} backgroundColor={'red'} color={'green'}/>
            </div>
            <div className="divHmwrk04">
            <MyButton text={'Dislike'} type={'button'} func={handleDislike}/>
            <h2>{dislike}</h2>
            </div>
            <MyButton text={'Reset Results'} type={'button'} func={handleReset}/>
        </div>
    );
};

export default Feedback;