import axios from "axios";

export const getHobbies = async () => {
  return await axios.get("http://localhost:3001/hobbies");
};
