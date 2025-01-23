import LotrCard from '../../components/lotrCard/LotrCard';
import { fellowship } from '../../lessons/lesson05_react_map/fellowship';
import './homework05.css'

function Homework05() {
  return (
    <>
      <LotrCard array={fellowship}/>
    </>
  );
}

export default Homework05;
