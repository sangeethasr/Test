import React, {useReducer} from 'react';
import Design from "../styles/Form.module.css"

export default function Form() {

    function reducer(state, action){
        switch (action.type) {
            case "setField":
                return{ ...state, [action.fieldName]: action.value };
            case "reset":
                return {name: '', email: '', password: ''}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {name: '', email: '', password: ''});

    const handleChange = (e) =>{
        dispatch({type: "setField", fieldName: e.target.name, value: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.password.length >= 6 && state.email.includes('@')) {
          alert('Form submitted successfully!');
          dispatch({ type: 'reset' });
        } else {
          alert('Invalid input');
        }
      };

  return (
    <div className={Design.formContainer}>
    <form className={Design.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={state.name} onChange={handleChange} />
        <label htmlFor="email" >Email</label>
        <input type="email" name='email' value={state.email} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' value={state.password}  onChange={handleChange} />
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
