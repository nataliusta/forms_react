import { useEffect, useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    hasError: mailInputHasError,
    valueChangeHandler: mailInputChangeHandler,
    inputBlurHandler: mailInputBlurHandler,
    reset: resetMailInput
  } = useInput(value => value.includes('@'));

  //const [enteredMail, setEnteredMail] = useState('');
  //const [enteredMailTouched, setEnteredMailTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  //const enteredMailIsValid = enteredMail.includes('@');
  //const mailInputIsInvalid = !enteredMailIsValid && enteredMailTouched;

  useEffect(() => {
    if (enteredNameIsValid && enteredMailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredMailIsValid]);

  /*let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }*/

  /*const mailInputChangeHandler = (event) => { // mail
    setEnteredMail(event.target.value);
  };

  const mailInputBlurHandler = (event) => { // mail blur
    setEnteredMailTouched(true);
  };*/

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredMailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredMail);

    resetNameInput();
    resetMailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid' 
    : 'form-control';

  const mailInputClasses = mailInputHasError
  ? 'form-control invalid' 
  : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your name</label>
        <input
               type='text' 
               id='name' 
               onChange={nameChangedHandler} 
               onBlur={nameBlurHandler}
               value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Field must not be empty</p>}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor='email'>Your e-mail</label>
        <input
               type='email' 
               id='e-mail' 
               onChange={mailInputChangeHandler} 
               onBlur={mailInputBlurHandler}
               value={enteredMail}
        />
        {mailInputHasError && <p className='error-text'>Please, enter a valid e-mail</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button> 
      </div>
    </form>
  );
};

export default SimpleInput;
