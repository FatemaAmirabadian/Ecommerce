"use client";
import FormInput from "../elements/FormInput";

function EditForm({ editForm, setEditForm}) {

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };
  
  return (
    <div>
      <form>
        <FormInput
          name="name"
          label="Name"
          type="text"
          value={editForm?.name}
          onChange={changeHandler}
        />
        <FormInput
          name="price"
          label="Price"
          type="number"
          value={editForm?.price}
          onChange={changeHandler}
        />
        <FormInput
          name="url1"
          label="First Image Url"
          type="text"
          value={editForm?.url1}
          onChange={changeHandler}
        />
        <FormInput
          name="url2"
          label="Second Image Url"
          type="text"
          value={editForm?.url2}
          onChange={changeHandler}
        />
        <FormInput
          name="url3"
          label="Third Image Url"
          type="text"
          value={editForm?.url3}
          onChange={changeHandler}
        />
        <FormInput
          name="url4"
          label="Fourth Image Url"
          type="text"
          value={editForm?.url4}
          onChange={changeHandler}
        />
        <div className="select_container">
          <p className="select_label">Choose a category:</p>
          <select
            className="select_input"
            name="category"
            id="category"
            onChange={changeHandler}
            value={editForm?.category}
          >
            <option value="Electronic">Electronic</option>
            <option value="Camera">Camera</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessories">Accessories</option>
            <option value="Headphone">Headphone</option>
            <option value="Food">Food</option>
            <option value="Book">Book</option>
            <option value="Cloth">Cloth</option>
            <option value="Shoe">Shoe</option>
            <option value="Beauty/Health">Beauty/Health</option>
            <option value="Sports">Sports</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <FormInput
          name="stock"
          label="Stock"
          type="number"
          value={editForm?.stock}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default EditForm;
