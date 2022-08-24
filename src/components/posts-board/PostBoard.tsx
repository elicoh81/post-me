import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '../../common-hooks/UseQuery';
import { RootState } from '../../redux/app/RootReducer';
import { deletePost, Post, User } from '../../redux/features/main/MainReducerSlice';
import Card from '../card/card';
import './PostBoard.css';

export default function PostsBoard() {
  let query = useQuery();
  let userId = query.get('userId');
  const posts: Post[] = useSelector((state: RootState) => state.mainReducer.posts.filter(p => userId && p.userId === +userId));
  const user: User | undefined = useSelector((state: RootState) => state.mainReducer.users.find(u => userId && u.id === +userId));

  const dispatch = useDispatch();


  return (
    <div className='posts-board'>
      <div className='board-title'>User {user?.fullName} Posts</div>
      <div className='posts'>
        {userId && posts.map((p: Post) => (
          <Card width={300} height={200} handleDelete={() => dispatch(deletePost(p.id))}>
            <div className='post-body'>
              <div>{p.title}</div>
              <div>---</div>
              <div>{p.body}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}