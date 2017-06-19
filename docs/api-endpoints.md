# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users` - Sign up
- `GET /api/users/:id` - Get user information
- `PATCH /api/users/:id` - Update user information
- `GET /api/users/` - Collection of users for search

### Session
- `POST /api/session` - Login
- `DELETE /api/session` - Logout

### Friendships
- `GET /api/friendships/` - Get all current friend requests
- `POST /api/friendships` - Create a new friend request
- `PATCH /api/friendships/:id` - Accept/Reject a friend request
- `DELETE /api/friendships/:id` - Delete a friend

### Posts
- `POST /api/posts` - Create post
- `PATCH /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Comments
- `POST /api/comments` - Create comment
- `PATCH /api/comments/:id` - Edit comment
- `DELETE /api/comments/:id` - Delete comment

### Newsfeed
- `GET /api/newsfeed` - Posts and comment data for user and their friends

### Timeline
- `GET /api/timeline` - Posts and comment data for user's own page

# Bonuses

### Notifications
- `GET /api/notifications` - Get notifications
- `PATCH /api/notifications/:id` - Mark notification as read

### Likes
- `POST /api/likes` - Like
- `DELETE /api/likes/:id` - Unlike

### Messaging
- `GET /api/conversations` - Get all conversations user is involved in
- `POST /api/conversations` - Create new conversation
- `GET /api/conversations/:id` - Read one conversation
- `POST /api/messages` - Send new message

### Photos
- `POST /api/photos` - Upload photo
- `GET /api/photos/:id` - Get a single photos data
- `DELETE /api/photos/:id` - Delete photo
