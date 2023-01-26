import { useState } from "react";
import FormInput from "./FormInput";

function Form() {
  const [data, setData] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
    gender: "",
    city: "",
    termsandcondition: false,
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Name",
      label: "Name",
    },
    {
      id: 2,
      name: "address",
      type: "textarea",
      placeholder: "Enter Address",
      label: "Address",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      label: "E-mail",
    },
    {
      id: 4,
      name: "number",
      type: "number",
      placeholder: "Enter Mobile Number",
      label: "Mobile Number",
    },
  ];

  const handleChange = (event) => {
    if (event.target.name === "termsandcondition") {
     return setData({ ...data, [event.target.name]: event.target.checked });
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const field = inputs.map((input) => {
    if (input.name === "address") {
      return (
        <div key={input.id} className="formInput">
          <label>{input.label}</label>
          <textarea
            onChange={handleChange}
            value={data[input.name]}
            {...input}
          />
        </div>
      );
    }
    return (
      <FormInput
        key={input.id}
        onChange={handleChange}
        value={data[input.name]}
        {...input}
      />
    );
  });

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        {field}
        <div className="gender">
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          <label>Female</label>
        </div>
        <div className="select">
          <label>
            City:
            <select name="city" value={data.city} onChange={handleChange}>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </select>
          </label>
        </div>
        <div className="check">
          <label>
            <input
              name="termsandcondition"
              type="checkbox"
              defaultChecked={false}
              onChange={handleChange}
            />
            Check Me!
          </label>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
