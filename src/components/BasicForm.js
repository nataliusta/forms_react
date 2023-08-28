import { useEffect, useState } from 'react';

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredLasName, setEnteredLastName] = useState('');
  const [enteredMail, setEnteredMail] = useState('');

  const nameChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const lastNameChangedHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const mailChangedHandler = (event) => {
    setEnteredMail();
  };

  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text'
                 id='name'
                 onChange={nameChangedHandler} />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text'
                 id='name'
                 onChange={lastNameChangedHandler} />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text'
               id='name'
               onChange={mailChangedHandler} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
