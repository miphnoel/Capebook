
User.destroy_all

bat = User.create!(
  first_name: 'Bruce',
  last_name: 'Wayne',
  email: 'brucewayne@gotham.bat',
  password: 'alfred',
  dob: DateTime.new(1939, 2, 19),
  alignment: 'Hero',
  prof_pic: File.open("app/assets/images/bat_prof.jpg"),
  cover_pic: File.open("app/assets/images/batman_cover.jpg")
)

bat.profile.update!(
  job: 'CEO',
  workplace: 'Wayne Enterprises',
  location: 'Gotham',
  hometown: 'Gotham'
)

joker = User.create!(
  first_name: 'Jack',
  last_name: 'Napier',
  email: 'whysoserious@prince.pain',
  password: 'harley',
  dob: DateTime.new(1940, 4, 25),
  alignment: 'Villain',
  prof_pic: File.open("app/assets/images/joker_prof.jpg"),
  cover_pic: File.open("app/assets/images/joker_cover.jpg")
)

joker.profile.update!(
  job: 'Murder Clown',
  education: 'Barnum & Bailey Clown College',
  location: 'Gotham',
)

spider = User.create!(
  first_name: 'Peter',
  last_name: 'Parker',
  email: 'webslinger@ny.web',
  password: 'maryjane',
  dob: DateTime.new(1962, 8, 1),
  alignment: 'Hero',
  prof_pic: File.open("app/assets/images/spider_prof.jpg"),
  cover_pic: File.open("app/assets/images/spider_cover.jpg")
)

spider.profile.update!(
  job: 'Photographer',
  workplace: 'Daily Bugle',
  education: 'Midtown High School',
  location: 'New York',
  hometown: 'Forest Hills'
)

goblin = User.create!(
  first_name: 'Norman',
  last_name: 'Osborn',
  email: 'unclebens@quick.rice',
  password: 'harryyoudolt',
  dob: DateTime.new(1962, 8, 1),
  alignment: 'Villain',
  prof_pic: File.open("app/assets/images/goblin_prof.jpg"),
  cover_pic: File.open("app/assets/images/goblin_cover.jpg")
)

goblin.profile.update!(
  job: 'Biochemist/Founder',
  workplace: 'Oscorp',
  location: 'New York',
  hometown: 'New York'
)

superman = User.create!(
  first_name: 'Clark',
  last_name: 'Kent',
  email: 'krypton@kal.el',
  password: 'loislane',
  dob: DateTime.new(1938, 5, 1),
  alignment: 'Hero',
  prof_pic: File.open('app/assets/images/superman_prof.jpg'),
  cover_pic: File.open('app/assets/images/superman_cover.jpg')
)

superman.profile.update!(
  job: 'Reporter',
  workplace: 'Daily Planet',
  location: 'Metropolis',
  hometown: 'Kryton'
)

lex = User.create!(
  first_name: 'Lex',
  last_name: 'Luthor',
  email: 'rogaine@bald.man',
  password: 'krytonite',
  dob: DateTime.new(1940, 4, 1),
  alignment: 'Villain',
  prof_pic: File.open('app/assets/images/lex_prof.jpg'),
  cover_pic: File.open('app/assets/images/lex_cover.jpg')
)

lex.profile.update!(
  job: 'CEO',
  workplace: 'Luthorcorp',
  location: 'Metropolis',
  hometown: 'Metropolis'
)

iron = User.create!(
  first_name: 'Tony',
  last_name: 'Stark',
  email: 'iam@iron.man',
  password: 'pepper',
  dob: DateTime.new(1963, 3, 1),
  alignment: 'Hero',
  prof_pic: File.open('app/assets/images/iron_prof.png'),
  cover_pic: File.open('app/assets/images/iron_cover.jpg')
)

iron.profile.update!(
  job: 'CEO',
  workplace: 'Stark Industries',
  location: 'Stark Tower, NYC',
  hometown: 'New York'
)

obadiah = User.create!(
  first_name: 'Obadiah',
  last_name: 'Stane',
  email: 'iamnot@iron.man',
  password: 'ironmonger',
  dob: DateTime.new(1982, 10, 1),
  alignment: 'Villain',
  prof_pic: File.open('app/assets/images/obadiah_prof.jpg'),
  cover_pic: File.open('app/assets/images/obadiah_cover.jpg')
)

obadiah.profile.update!(
  job: 'Vice Chairman',
  workplace: 'Stark Industries',
  location: 'NYC',
)

wonder = User.create!(
  first_name: 'Diana',
  last_name: 'Prince',
  email: 'amazon@godot.gadot.gal',
  password: 'lassooftruth',
  dob: DateTime.new(1941, 10, 1),
  alignment: 'Hero',
  prof_pic: File.open('app/assets/images/wonder_prof.jpg'),
  cover_pic: File.open('app/assets/images/wonder_cover.jpg')
)

wonder.profile.update!(
  job: 'Nurse',
  workplace: 'US Armed Forces',
)


mike = User.create!(
  first_name: 'Michael',
  last_name: 'Noel',
  email: 'miphnoel@gmail.com',
  password: 'password',
  dob: DateTime.new(1991, 3, 2),
  alignment: 'Hero',
  prof_pic: File.open("app/assets/images/me.jpeg"),
  cover_pic: File.open("app/assets/images/mike_cover.jpg")
)

mike.profile.update!(
  job: 'Web Developer',
  education: 'App Academy',
  location: 'NYC',
  hometown: 'Cheshire, CT'
)

Friendship.create(sender_id: goblin.id, receiver_id: joker.id)
Friendship.create(sender_id: obadiah.id, receiver_id: joker.id)
Friendship.create(sender_id: lex.id, receiver_id: joker.id)
Friendship.create(sender_id: mike.id, receiver_id: joker.id)
Friendship.create(sender_id: superman.id, receiver_id: bat.id)
Friendship.create(sender_id: wonder.id, receiver_id: bat.id)
Friendship.create(sender_id: iron.id, receiver_id: bat.id)
Friendship.create(sender_id: mike.id, receiver_id: bat.id)
Friendship.create(sender_id: spider.id, receiver_id: bat.id)
Friendship.create(sender_id: joker.id, receiver_id: bat.id)
Friendship.create(sender_id: spider.id, receiver_id: mike.id)
Friendship.create(sender_id: wonder.id, receiver_id: mike.id)
Friendship.create(sender_id: iron.id, receiver_id: mike.id)
Friendship.create(sender_id: goblin.id, receiver_id: mike.id)
Friendship.create(sender_id: obadiah.id, receiver_id: mike.id)
Friendship.create(sender_id: lex.id, receiver_id: mike.id)

Post.create(author_id: goblin.id, recipient_id: joker.id, body: 'Have you been hearing voices?')
Post.create(author_id: obadiah.id, recipient_id: joker.id, body: 'I may have a job for you...')
Post.create(author_id: lex.id, recipient_id: joker.id, body: 'Ding ding ding ding ding')
rachel = Post.create(author_id: bat.id, recipient_id: joker.id, body: "WHERE'S RACHEL?!")
Post.create(author_id: superman.id, recipient_id: bat.id, body: "We should work together")
pun = Post.create(author_id: wonder.id, recipient_id: bat.id, body: "I'm the lass 'o truth!'")
Post.create(author_id: iron.id, recipient_id: bat.id, body: "Billionaire hero club meeting pushed back to Friday.")
Post.create(author_id: spider.id, recipient_id: bat.id, body: "Grappling hooks < webs")
Post.create(author_id: joker.id, recipient_id: bat.id, body: "Did I ever tell you how I got these scars?")
Post.create(author_id: spider.id, recipient_id: mike.id, body: "I can take a better picture for you if you want...")
Post.create(author_id: lex.id, recipient_id: superman.id, body: "Get off my planet, alien.")

Comment.create(author_id: joker.id, parent_id: rachel.id, body: 'Why so serious?')
Comment.create(author_id: bat.id, parent_id: rachel.id, body: 'WHERE IS SHE?')
Comment.create(author_id: wonder.id, parent_id: pun.id, body: 'Get it?')
