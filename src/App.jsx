// * импорты
import "./App.css";
import Homework01 from "./homeworks/homework01/Homework01";
import Homework02 from "./homeworks/homework02/Homework02";
import Homework03 from "./homeworks/homework03/Homework03";
import Homework04 from "./homeworks/homework04/Homework04";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from './lessons/lesson02/Lesson02'
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";

// * объявление функции из компонента App
// функция называется по названию компонента
// компонент называется с большой буквы и имеет расширение jsx
function App() {
  // * тело функции
  // здесь происходит логика работы с данными
  // запросы к серверу, работа с изменяемыми элементами на странице

  return (
    // * возвращенное значение
    // jsx компоненты возвращают xml верстку
    // динамические данные из тела функции мы можем вставлять в теги и использовать на странице
    <>
      <Homework04 />
    </>
  );
}

// * экспорт функции
// без него мы не сможем использовать этот компонент в других частях react приложения
export default App;
