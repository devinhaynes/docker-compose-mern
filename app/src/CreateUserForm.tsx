import { FC, FormEvent, useState, ChangeEvent } from "react";
import axios from "axios";

export const CreateUserForm: FC = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [hobbies, setHobbies] = useState<string[]>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      hobbies,
    };
    axios.post("http://localhost:3001/users", formData).then((response) => {
      console.log(response);
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let selectedOptions = Array.from(e.target.selectedOptions)
      .map((option) => option.value)
      .filter((option) => option !== "");
    setHobbies(selectedOptions);
  };

  return (
    <div className="CreateUserForm">
      <div className="CreateUserForm__wrapper">
        <form onSubmit={handleSubmit} className="CreateUserForm__form">
          <div className="CreateUserForm__form_group">
            <label htmlFor="">First Name</label>
            <input
              onChange={handleInputChange}
              name="firstName"
              type="text"
              value={firstName}
            />
          </div>
          <div className="CreateUserForm__form_group">
            <label htmlFor="">Last Name</label>
            <input
              name="lastName"
              onChange={handleInputChange}
              type="text"
              value={lastName}
            />
          </div>
          <div className="CreateUserForm__form_group">
            <label htmlFor="">Hobbies</label>
            <select onChange={handleSelectChange} name="hobbies" multiple>
              <option value=""></option>
              <option value="chess">Chess</option>
              <option value="coding">Coding</option>
              <option value="archery">Archery</option>
              <option value="juggling">Juggling</option>
            </select>
          </div>
          <div className="CreateUserForm__btn_group">
            <input type="submit" value="Submit" />
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
