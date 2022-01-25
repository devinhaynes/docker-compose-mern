import axios from "axios";

export const getUser = async (id: string) => {
  return await axios.get(`http://localhost:3001/user/${id}`);
};
