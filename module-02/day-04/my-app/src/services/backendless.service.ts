import axios from "axios";

interface ICreate {
  isComplete: boolean;
  taskName: string;
}

export async function getAll() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}`
    );

    return data;
  } catch (err: any) {
    throw err;
  }
}

export async function getById(id: string) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/${id}`
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function create(params: ICreate) {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKENDLESS_URL}`, params);
  } catch (err: any) {
    throw err;
  }
}
