import { useState } from 'react';

const NewCardForm = ({ handleSubmit }) => {
  const newCard = {
    message: '',
  };

  const [formData, setFormData] = useState({newCard});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, preview: name === 'message' ? value : formData.preview });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ message: formData.message });
    setFormData(newCard);
  };

  return (
    <form onSubmit = {onHandleSubmit}>
      <div className="form-container">
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
        <input id="submit-button" type="submit" value="submit" />
      </div>
    </form>
  );
};

export default NewCardForm;