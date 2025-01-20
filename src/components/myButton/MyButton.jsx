// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце, так и в начале объявления функции

import './myButton.css'

function MyButton({text, func, type}) {
  return <button type={type} onClick={func} className='myButton'>{text}</button>;
}

export default MyButton;

// * компонент MyButton должен принимать props: text - с текстом кнопки, func - с  функцией, которая сработает по нажатию на кнопку

// для того чтобы функция отработала на кнопке присвойте ей атрибут onClick внутри кнопки
// <button onClick={...}>Click me!</button>