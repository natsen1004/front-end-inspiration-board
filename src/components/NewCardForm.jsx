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
      <h2 className="form-container-h2">Create a New Card</h2>
        <label htmlFor="message"> Message </label>
        <input
          type='text'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange} />
                <div style={{ display: 'inline' }}>
        <label htmlFor="preview"> Preview: </label>
        <p id="preview" style={{ display: 'inline'}}>{formData.preview}</p>
      </div>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewCardForm;