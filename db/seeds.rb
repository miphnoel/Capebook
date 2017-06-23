batdob = DateTime.new(1939, 2, 19)
jokerdob = DateTime.new(1940, 4, 25)

User.create(
  first_name: 'Bruce',
  last_name: 'Wayne',
  email: 'brucewayne@gotham.bat',
  password: 'alfred',
  dob: batdob,
  alignment: 'hero',
  prof_pic_file_name: "bruce_wayne.jpg",
  cover_pic_file_name: "batman_cover.png"
)

User.create(
  first_name: 'Jack',
  last_name: 'Napier',
  email: 'whysoserious@prince.pain',
  password: 'harley',
  dob: jokerdob,
  alignment: 'villain',
  prof_pic_file_name: "joker.jpg",
  cover_pic_file_name: "joker_cover.jpg"
)
