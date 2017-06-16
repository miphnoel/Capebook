# MaskNook

[Heroku link][heroku] Eventually

[Trello link][trello] Eventually

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/

## Minimum Viable Product

MaskNook is a web application inspired by Facebook built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
baller CSS styling:

- [ ] Hosting on Heroku
- [ ] Production README
- [ ] New account creation, login, and guest/demo login
- [ ] Profiles
- [ ] Friending
- [ ] Comments/posting on walls
- [ ] News Feed

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Profiles (2 days)

**Objective:** Users can create, read, edit and destroy profiles.

### Phase 3: Friending (2 days)

**Objective:** Users can create, cancel, view, and respond to (confirm/deny) friend requests through the API. When confirmed, these requests establish friend relationships between users which allow for variable accessibility of information.

### Phase 4: Comments/posting on walls (1 day)

**Objective:** Users can comment and post on other users' walls. May be limited to friends, and include external links and media.

### Phase 5: News Feed (1 day)

**Objective:** Users have a home page (index) consisting of a list of the activities of friends. These activities should be default sorted by recency, and, time permitting, alternatively by relevance (# of likes, comments on post and in friendship).

### Bonus Features (TBD)
- [ ] Messaging
- [ ] Notifications
- [ ] Likes
- [ ] Nested Comments
- [ ] Pictures/albums
- [ ] Search
- [ ] Tagging
- [ ] Continuous Scroll
- [ ] Privacy Settings
- [ ] Continuous Scroll (news feed)
