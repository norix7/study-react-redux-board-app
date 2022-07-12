// Redux Toolkitを使って簡単にReducerを作成する
import { createSlice } from "@reduxjs/toolkit";

// ダミーデータをインポート
import { PostsData } from "../DummyData";

// createSliceを使うと、State, Reducer, Action Creatorを作成できる

export const postSlice = createSlice({
  // Sliceの名前？
  name: "posts",
  // 初期値
  initialState: { value: PostsData },
  // Reducer
  reducers: {
    // addPostは同時にAction Creatorにもなる
    addPost: (state, action) => {
      state.value.unshift(action.payload)
    },
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id );
    }
  }
})

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
