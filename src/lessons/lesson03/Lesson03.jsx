import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";


function Lesson03(){
    function printHello(){
        alert('Hello!');        
    }

    function printBye(){
        alert('Good Bye!');
    }


    return (
        <div>
            <h2>React Props 😋</h2>
            <MyButton text={'Print "Hello!"'} func={printHello} type={'button'}/>
            <MyButton text={'Print "Bye!"'} func={printBye} type={'button'}/>
            <UserCard name={'Peter'} age={35} hobby={'hiking'}/>
            <UserCard name={'Rosa'} age={40} hobby={'diving'}/>
            <UserCard name={'Anton'} age={28} />
        </div>
    );
};

export default Lesson03;