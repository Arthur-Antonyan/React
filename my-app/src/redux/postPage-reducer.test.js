import postPageReducer, { addPOstActionCreator } from './postPage-reducer';
import React from 'react';

// test('adds post to  array', () => {
//   let action = addPOstActionCreator('newText');
//   let state = {
//     post: [
//       { id: 1, text: 'Post1', like: 'Like3' },
//       { id: 2, text: 'Post2', like: 'Like4' },
//     ],
//     newPost: '',
//     profile: null,
//     status: '',
//   };
//   let newState = postPageReducer(state, action);
//   expect(newState.post.length).toBe(3);
// });
test('return right array length', () => {
  let action = addPOstActionCreator('wbhfbwef');
  let state = {
    post: [
      { id: 1, text: 'Post1', like: 'Like3' },
      { id: 2, text: 'Post2', like: 'Like4' },
    ],
    newPost: '',
    profile: null,
    status: '',
  };
  let newstate = postPageReducer(state, action);
  expect(newstate.post[2].like).toBe('Like 5');
});
