import { useState } from 'react';

const NewCardForm = ({ handleSubmit }) => {
  const kDefaultFormState = {
    message: '',
    preview: '',
  };

  const [formData, setFormData] = useState({kDefaultFormState});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, preview: name === 'message' ? value : formData.preview });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <form onSubmit = {onHandleSubmit}>
      <div>
        <label htmlFor="message"> Message </label>
        <input
          type='text'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange} />
      </div>
      <div style={{ display: 'inline' }}>
        <label htmlFor="preview"> Preview </label>
        <p id="preview" style={{ display: 'inline'}}>{formData.preview}</p>
      </div>
      <div>
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default NewCardForm;