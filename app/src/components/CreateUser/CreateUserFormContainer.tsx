import {
  FC,
  FormEvent,
  useState,
  useEffect,
  ChangeEvent,
  useContext,
} from "react";
import axios from "axios";
import { CreateUserForm } from "./CreateUserForm";
import { IHobby } from "../../types/IHobby";
import { getHobbies } from "../../service/Hobbies/GetAllHobbies";
import { ErrorContext } from "../../state/context/ErrorContext";

export const CreateUserFormContainer: FC = () => {
  // Local state
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [availableHobbies, setAvailableHobbies] = useState<IHobby[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Context state
  const { error, dispatchError } = useContext(ErrorContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      hobbies,
    };
    axios
      .post("http://localhost:3001/users", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        dispatchError({
          type: "SET_ERROR",
          payload: { type: "http", message: "Unable to create user" },
        });
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
      .catch(() =>
        dispatchError({
          type: "SET_ERROR",
          payload: { type: "http", message: "Unable to load hobbies" },
        })
      )
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Fetching hobbies</p>;
  }

  return (
    <CreateUserForm
      firstName={firstName}
      lastName={lastName}
      hobbies={hobbies}
      availableHobbies={availableHobbies}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      handleSelectChange={handleSelectChange}
      handleCancel={handleCancel}
    />
  );
};
