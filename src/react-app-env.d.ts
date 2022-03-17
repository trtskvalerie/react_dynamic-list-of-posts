/// <reference types="react-scripts" />

interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
}

interface Comment {
  id: number,
  postId: number,
  body: string,
}

interface CommentToPost {
  postId: number,
  name: string,
  email: string,
  body: string,
}
