{
  session: {
    currentUser: {
      id: 1,
      first_name: 'Michael',
      last_name: 'Noel',
      email: 'michaelthegreat@example.com'
    },
    errors: []
  }


  form: {
    signUp: {
      errors: []
    },
    signIn: {
      errors: []
    },
    post: {
      errors: []
    },
    comment: {
      errors: []
    },
    profileInfo: {
      errors: []
    }
  }

  user: {
    id: 2,
    first_name: 'Matthew',
    last_name: 'Haws',
    email: 'circleta@example.com',
    prof_pic: 'catinahat.png',
    cover_pic: 'catinpajamas.jpg',
    details: {
      dob: '12/25/00',
      gender: 'Male',
      phone: "555-867-5309",
      education: "App Academy",
      relationship: "It's Complicated",
      location: "New York, NY",
      job: "App Academy TA"
    },
    photoIds: [19, 85]
    photos: {
      19: {
        id: 19,
        location: 'bowlingforsoup.png'
      },
      { ... }
    },
    friendIds: [19, 84]
    friends: {
      19: {
        id: 19,
        name: 'George Orwell',
        profile_pic: 'doublethink.jpg'
      },
      { ... }
    },

    postIds: [2, 4, 6, 8]
    posts: {
      2: {
        id: 2,
        author_id: 3,
        receiver_id: 2,
        author_name: "Clark Kent",
        author_pic: 'meandlois.jpg',
        createdAt: "7 years ago",
        body: "Have you heard about Vue?",
        numLikes: 1,
        currentUserLiked: true,
        comments: {
          99: {
            id: 99,
            author_id: 2,
            author_name: "Matthew Haws",
            author_pic: "catinhat.png",
            currentUserLiked: false,
            body: "I heard it looks great!",
            createdAt: "1 minute ago",
            numLikes: 1,
            parent_id: 59,
          }
        }
      },
      { ... }
    },
  friendRequests: {
    incoming: {
      17: {
        id: 17,
        name: "Tony Stark",
        profile_pic: "iamironman.jpg",
        friendIds: [5, 6, 7, 19],
        mutualFriends: [19]
      }
    },
    outgoingRequests: {
      22: { ... }
    },
    notificationCount: 2
  },

  notifications: {
    count: 8,
    list: []
  },

  messages: {
    3: {
      id: 3,
      author_id: 9,
      author_name: "Bruce Wayne",
      body: "RACHELLL!",
      read: false
  },
  notificationCount: 1
}
