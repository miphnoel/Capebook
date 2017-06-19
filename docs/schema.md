# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
dob             | date      | not null
gender          | string    | not null
cover_photo     | string    |
profile_picture | string    |
phone           | string    |
education       | string    |
relationship    | string    |
location        | string    |
job             | string    |


## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
requester_id| integer   | not null, foreign key (references users), indexed
requestee_id| integer   | not null, foreign key (references users), indexed
status      | string    | not null, default: 'pending'

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
parent_id   | integer   | foreign key (references parent), indexed


# Bonuses

## notifications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
notifier_id | integer   | not null, foreign key (references users), indexed
receiver_id | integer   | not null, foreign key (references users), indexed
content_id  | integer   | foreign key (references content), indexed
read        | boolean   | not null, default: false

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign key (references users), indexed
content_id  | integer   | foreign key (references content), indexed


## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null, primary key
convo_id    | integer   | not null, foreign key (references conversations), indexed
sender_id   | integer   | not null, foreign key (references users), indexed
read        | boolean   | not null, default: false
