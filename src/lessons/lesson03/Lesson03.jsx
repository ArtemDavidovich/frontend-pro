import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";


function Lesson03(){
    function close(){
        window.close();
    }

    function open(){
        window.open('https://github.com/ArtemDavidovich/frontend_pro/tree/gh-pages');
    }


    return (
        <div>
            <h2>React Props 😋</h2>
            <UserCard name={'Peter'} age={35} hobby={'hiking'}/>
            <UserCard name={'Rosa'} age={40} hobby={'diving'}/>
            <UserCard name={'Anton'} age={28} />
            <MyButton text={'Close page'} func={close}/>
            <MyButton text={'Open new page'} func={open}/>
        </div>
    );
};

export default Lesson03;