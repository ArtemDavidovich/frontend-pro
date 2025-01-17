import "./homework01.css";
import artemImg from "../../assets/artem.png";

export default function Homework01() {
    return (
        <div className="artemContainer">
            <div className='artem'>
                <img src={artemImg} width={300} alt="artem-img" />
                <h2>Artem Davidovich</h2>
                <h3>Hobbies:</h3>
                <p>• Football</p> 
                <p>• Movies</p> 
                <p>• Videogames</p> 
                <p>• Travelling</p>         
            </div>
        </div>
    )
}
