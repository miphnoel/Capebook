## Component Hierarchy

**LoginPage**
 - LoginHeader
  + FullLogo (Link)
  + LoginContainer
   + LoginForm
 - SignupContainer
  + SignupForm
 - ValueProposition (Replaceable with new 'RecentLogin' feature)
 - Footer

**HomePage**
 - NavBar*
 - SideNav*
 - Feed*
 - FluffColumn*
 - ChatIndexContainer*

**NavBar**
 - Logo (Link)
 - SearchContainer
  + SearchBar
  + SearchResultsIndex (drop-down from SearchBar)
   - SearchResult
 - RightNav
  + Profile (Link)
  + Home (Link)
  + FriendRequestsIndex (drop-down)
   - FriendRequest
  + MessagesIndex (drop-down)
   - Message
  + NotificationsIndex (drop-down)
   - Notification

**Feed**
 - CreatePostContainer
  + CreatePostForm
 - PostsContainer
  + PostsIndex
   - Post
    + LikesBar
    + CommentsContainer
     - CommentsIndex (default max 2)
      - Comment
     - CommentForm

**ProfilePage**
 - ProfileHeader
  - CoverPhoto
  - ProfilePhoto
  - ProfileNavBar
  - Edit (button)
 - Timeline
  + SideInfo
   - Intro
   - SidePhotos
   - SideFriends
  + Feed*
 - About (BONUS)
  + Overview
  + Friends
  + Photos
  + Details
 - Friends
 - Photos

**ChatBox** (BONUS Pop-up)
 - ChatMessages
 - ChatForm

**ChatIndexContainer** (BONUS)
 - ChatIndex
  + ChatIndexItem
 - SearchBar

**FluffColumn** (BONUS)
 - AdContainer
  + AdItem (Links to my info/classmates' projects)
 - TrendingContainer
  + TrendingItem
 - NotificationsBox

**SideNav** (BONUS)
 - Profile (Link)
 - Home (Link)
 - Professional Links

## Routes

|Path   | Component   |
|-------|-------------|
| "/login" | "LoginPage" |
| "/" | "HomePage" |
| "/profile/:userId/" | "ProfilePage::TimeLine" |
| "/profile/:userId/friends" | "ProfilePage::Friends" |
| "/profile/:userId/photos" | "ProfilePage::Photos" |
