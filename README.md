# Capebook

[Capebook live][heroku]

[heroku]:https://capebook.herokuapp.com

Capebook is a Facebook-inspired social networking application for superheroes (and villains!). A Redux structure with React.js views offers a dynamic and responsive frontend to complement the trusty backend pairing of Ruby on Rails with a PostgreSQL database.

## Features

![Synchronous client-side field validation](/app/assets/gifs/sign-in.gif)


### User Profiles

Upon account creation, Capebook automatically generates a `profile` for the new user, populating default information such as a `profile picture` and `cover photo` (attached to the `user` with the `paperclip` gem and accessed through an Amazon Web Services bucket). Users can then edit their profile information and upload new photos through a nested modal form utilizing the flexibility of a `ModalReducer` to track multiple modals' status in the Redux store.

![Nested modals](/app/assets/gifs/nested-modal.gif)

### Friending

Capebook tracks user relationships through `friendships`, which can have a `status` of `pending`, `approved`, or `denied`. The database stores these friendship `status`es as integer values, while the `friendship` model translates into recognizable strings for optimal balance between storage efficiency and legibility. The friendship status between the two users is then translated into six different possible action button components on a given user's `profile` page.

1. Edit profile
  - Visible only when the current user is on their own `profile` page
2. Cancel request
  - Allows the `sender` of a friend request to delete a `pending` friendship before receiving a response from the `receiver`.
3. Respond to request
  - The `receiver` of a `pending` request has the option to either 'confirm' or 'delete request' through a hover-dropdown menu, changing the friendship status to `approved` or `denied`, respectively.
4. Unfriend
  - Either user in an `approved` friendship can delete the friendship.
5. Blocked notification
  - The `sender` of a friend request that has been `denied` can no longer send friend requests to the same `receiver`.
6. Unblock
  - The `receiver` of a friend request who initially blocked the `sender` can unblock, deleting the friendship and allowing for a new attempt at establishing friendship.

```Ruby
# translate ['pending', 'approved', 'denied'] status of friendship
# between current_user and currently displayed user into
# [ self, no_connection, sent_request, received_request, friends, blocked, blocker]
def status
  return -1 if @user.id == current_user.id
  return 0 unless @current_friendship
  case @current_friendship.status
  when "pending"
    return 1 if current_user.id == @current_friendship.sender_id
    return 2
  when "approved"
    return 3
  when "denied"
    return 4 if @user.id == @current_friendship.receiver_id
    return 5
  end
end

```

Users can also respond to incoming friend requests through a dropdown menu in the global nav bar, with similar options to 'confirm' or 'delete request', or navigate to the `sender`'s profile for recon before deciding.

### Posts and Comments

![Post modals](/app/assets/gifs/post-comment.gif)

Users can post and comment on other user's `timeline`s, or post statuses on their own `profile` page or `news feed`. The `timeline` will only display posts for which the corresponding user is the `recipient`, whereas the `news feed` will show any posts whose `author` is either the current user, or among the current user's `approved` friends.

### Moving Forward

Features planned for future implementation include:

+ Likes
+ Notifications
+ Direct Messaging
+ Nested Comments
+ Search
+ Photo Albums
+ Privacy Filters
  - Users who are not `approved` friends will see only the costumed character, and not the civilian identity.
