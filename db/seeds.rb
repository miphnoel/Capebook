batdob = DateTime.new(1939, 2, 19)
jokerdob = DateTime.new(1940, 4, 25)

bat_prof = File.open("app/assets/images/bruce_wayne.jpg")
bat_cover = File.open("app/assets/images/batman_cover.jpg")

joker_prof = File.open("app/assets/images/joker.jpg")
joker_cover = File.open("app/assets/images/joker_cover.jpg")


User.create(
  first_name: 'Bruce',
  last_name: 'Wayne',
  email: 'brucewayne@gotham.bat',
  password: 'alfred',
  dob: batdob,
  alignment: 'hero',
  prof_pic: bat_prof,
  cover_pic: bat_cover
)

User.create(
  first_name: 'Jack',
  last_name: 'Napier',
  email: 'whysoserious@prince.pain',
  password: 'harley',
  dob: jokerdob,
  alignment: 'villain',
  prof_pic: joker_prof,
  cover_pic: joker_cover
)
