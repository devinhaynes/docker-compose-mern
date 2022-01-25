import { FC, FormEvent, useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "./CreateUserForm.scss";
import { IHobby } from "../../types/IHobby";
import { getHobbies } from "../../service/Hobbies/GetAllHobbies";

export const CreateUserForm: FC = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [hobbies, setHobbies] = useState<string[]>();
  const [availableHobbies, setAvailableHobbies] = useState<IHobby[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      hobbies,
    };
    axios.post("http://localhost:3001/users", formData).then((response) => {
      console.log(response.data);
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

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setHobbies([]);

    // Unselect any items from the select menu
    Array.from(document.getElementsByTagName("select")[0].selectedOptions).map(
      (option) => (option.selected = false)
    );
  };

  useEffect(() => {
    getHobbies()
      .then((response) => setAvailableHobbies(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="CreateUserForm">
      <div className="CreateUserForm__wrapper">
        <span className="CreateUserForm__header">Create User</span>
        <form onSubmit={handleSubmit} className="CreateUserForm__form">
          <div className="CreateUserForm__form__group">
            <label htmlFor="">First Name</label>
            <input
              onChange={handleInputChange}
              name="firstName"
              type="text"
              value={firstName}
            />
          </div>
          <div className="CreateUserForm__form__group">
            <label htmlFor="">Last Name</label>
            <input
              name="lastName"
              onChange={handleInputChange}
              type="text"
              value={lastName}
            />
          </div>
          <div className="CreateUserForm__form__group">
            <label htmlFor="">Hobbies</label>
            <select onChange={handleSelectChange} name="hobbies" multiple>
              <option value="">None</option>
              {availableHobbies &&
                availableHobbies.map((hobby) => {
                  return (
                    <option value={hobby.hobby.toLowerCase()}>
                      {hobby.hobby
                        .split("")
                        .map((char, i) => (i === 0 ? char.toUpperCase() : char))
                        .join("")}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="CreateUserForm__btn_group">
            <input type="submit" value="Create User" />
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
