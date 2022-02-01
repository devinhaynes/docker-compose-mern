import { FC, FormEvent, ChangeEvent } from "react";
import { IHobby } from "../../types/IHobby";
import "./CreateUserForm.scss";

interface ICreateUserFormProps {
  firstName: string | undefined;
  lastName: string | undefined;
  hobbies: string[];
  availableHobbies: IHobby[];
  handleSubmit: (e: FormEvent) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleCancel: () => void;
}

export const CreateUserForm: FC<ICreateUserFormProps> = ({
  firstName,
  lastName,
  availableHobbies,
  handleSubmit,
  handleInputChange,
  handleSelectChange,
  handleCancel,
}) => {
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
