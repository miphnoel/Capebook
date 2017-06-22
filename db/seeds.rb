batdob = DateTime.new(1939, 2, 19)
jokerdob = DateTime.new(1940, 4, 25)

User.create(
  first_name: 'Bruce',
  last_name: 'Wayne',
  email: 'brucewayne@gotham.bat',
  password: 'alfred',
  dob: batdob,
  alignment: 'hero'
)

User.create(
  first_name: 'Jack',
  last_name: 'Napier',
  email: 'whysoserious@prince.pain',
  password: 'harley',
  dob: jokerdob,
  alignment: 'villain'
)
