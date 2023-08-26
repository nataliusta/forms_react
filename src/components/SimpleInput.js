import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredMail, setEnteredMail] = useState('');
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredMailIsValid = enteredMail.trim() !== '';
  const mailInputIsInvalid = !enteredMailIsValid && enteredMailTouched;

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

  const nameInputChangeHandler = (event) => { // name
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => { // name blur
    setEnteredNameTouched(true);
  };

  const mailInputChangeHandler = (event) => { // mail
    setEnteredMail(event.target.value);
  };

  const mailInputBlurHandler = (event) => { // mail blur
    setEnteredMailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid && mailInputIsInvalid
    ? 'form-control invalid' 
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
               type='text' 
               id='name' 
               onChange={nameInputChangeHandler} 
               onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Field must not be empty</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='name'>E-mail</label>
        <input
               type='text' 
               id='e-mail' 
               onChange={mailInputChangeHandler} 
               onBlur={mailInputBlurHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Field must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button> 
      </div>
    </form>
  );
};

export default SimpleInput;
