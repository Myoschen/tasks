import { createSlice } from '@reduxjs/toolkit';

const initialState: TaskState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {

  },
});

export default taskSlice;
