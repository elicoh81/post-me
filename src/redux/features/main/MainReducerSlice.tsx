import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    id: number;
    fullName: string;
    email: string;
    coordinates: { long: number, lat: number };
    companyName: string
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export const INITIAL_STATE: { users: User[], posts: Post[] } = {
    users: [],
    posts: []
}

const slice = createSlice({
    name: 'main',
    initialState: INITIAL_STATE,
    reducers: {
        deleteUser(state, action: PayloadAction<number>) {
            state.posts = state.posts.filter(p => p.userId !== action.payload);
            state.users = state.users.filter(u => u.id !== action.payload);
        },
        deletePost(state, action: PayloadAction<number>) {
            state.posts = state.posts.filter(p => p.id !== action.payload);
        },
        editPost(state, action: PayloadAction<Post>) {
            const index = state.posts.findIndex(p => p.id === action.payload.id);
            if (index >= 0) {
                state.posts[index] = action.payload;
            }
        },
        setPosts(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
        },
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        }
    }
})

export const { deleteUser, deletePost, editPost, setPosts, setUsers } = slice.actions

export default slice.reducer