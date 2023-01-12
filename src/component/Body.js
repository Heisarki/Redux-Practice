import { useRef } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import body from './body.module.css'
import Person from './person/Person';

import { deposit, withdraw } from '../redux/actions/counter_actions'
import { add, remove } from '../redux/actions/person_actions';

export default function Body() {
    const person = useSelector(person => person.person);
    const counter = useSelector(counter => counter.counter);
    const name_ref = useRef();
    const age_ref = useRef();
    console.log(person);

    const dispatch = useDispatch();

    function handleAdd() {
        const name = name_ref.current.value;
        const age = age_ref.current.value;
        const data = {
            name: name,
            age: age
        }
        dispatch(add(data));
    }
    function handleRemove() {
        dispatch(remove());
    }

    const per = person.map(person => 
        <div className={body.per} key = {person.name}>
            <img src='http://gvb.qyg.mybluehost.me/images/car-header1.JPG'></img>
            <ul>
                <li> Name: {person.name}</li>
                <li> Age: {person.age}</li>
            </ul>
        </div>
    )
        
        

  return (
      <div className={body.container}>
          <div className={body.counter}>
              <button onClick={() => dispatch(deposit(100))}> + </button>
              <span> {counter} </span>
              <button onClick={() => dispatch(withdraw(100))}> - </button>
          </div>
          <div className={body.add_person}>
              <div className={body.inner}>
                    <input ref = {name_ref} placeholder='enter your name' type='text'></input>
                    <input ref = {age_ref} placeholder='enter your age' type='text'></input>
                    <div>
                        <button onClick={handleAdd}>Add</button>
                        <button onClick={handleRemove}>Remove</button>
                    
                    </div>  
              </div>
          </div>
          <div className={body.person}>              
              {per}
          </div>
    </div>
  )
}
