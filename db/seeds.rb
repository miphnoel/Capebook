bat_dob = DateTime.new(1939, 2, 19)
bat_prof = File.open("app/assets/images/bat_prof.jpg")
bat_cover = File.open("app/assets/images/batman_cover.jpg")

joker_dob = DateTime.new(1940, 4, 25)
joker_prof = File.open("app/assets/images/joker_prof.jpg")
joker_cover = File.open("app/assets/images/joker_cover.jpg")

spider_dob = DateTime.new(1962, 8, 1)
spider_prof = File.open("app/assets/images/spider_prof.jpg")
spider_cover = File.open("app/assets/images/spider_cover.jpg")

goblin_dob = DateTime.new(1962, 8, 1)
goblin_prof = File.open("app/assets/images/goblin_prof.jpg")
goblin_cover = File.open("app/assets/images/goblin_cover.jpg")

User.destroy_all

User.create!(
  first_name: 'Bruce',
  last_name: 'Wayne',
  email: 'brucewayne@gotham.bat',
  password: 'alfred',
  dob: bat_dob,
  alignment: 'Hero',
  prof_pic: bat_prof,
  cover_pic: bat_cover
)

User.create!(
  first_name: 'Jack',
  last_name: 'Napier',
  email: 'whysoserious@prince.pain',
  password: 'harley',
  dob: joker_dob,
  alignment: 'Villain',
  prof_pic: joker_prof,
  cover_pic: joker_cover
)

User.create!(
  first_name: 'Peter',
  last_name: 'Parker',
  email: 'webslinger@ny.web',
  password: 'maryjane',
  dob: spider_dob,
  alignment: 'Hero',
  prof_pic: spider_prof,
  cover_pic: spider_cover
)

User.create!(
  first_name: 'Norman',
  last_name: 'Osborn',
  email: 'unclebens@quick.rice',
  password: 'harryyoudolt',
  dob: goblin_dob,
  alignment: 'Villain',
  prof_pic: goblin_prof,
  cover_pic: goblin_cover
)
