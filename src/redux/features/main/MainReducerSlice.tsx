import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    id: string;
    fullName: string;
    email: string;
    coordinates: { long: number, lat: number };
    companyName: string
}

export interface Post {
    id: string;
    userId: string;
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
        deleteUser(state, action: PayloadAction<string>) {
            state.posts = state.posts.filter(p => p.userId === action.payload);
            state.users = state.users.filter(u => u.id === action.payload);
        },
        deletePost(state, action: PayloadAction<string>) {
            state.posts = state.posts.filter(p => p.id === action.payload);
        },
        addPost(state, action: PayloadAction<Post>) {
            state.posts.push(action.payload);
        },
        setPosts(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
        },
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        }
    }
})

export const { deleteUser, deletePost, addPost, setPosts, setUsers } = slice.actions

export default slice.reducer