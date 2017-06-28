# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170626013109) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendships", force: :cascade do |t|
    t.integer  "sender_id",               null: false
    t.integer  "receiver_id",             null: false
    t.integer  "status",      default: 0, null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["receiver_id", "sender_id"], name: "index_friendships_on_receiver_id_and_sender_id", unique: true, using: :btree
    t.index ["sender_id", "receiver_id"], name: "index_friendships_on_sender_id_and_receiver_id", unique: true, using: :btree
  end

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "job"
    t.string   "workplace"
    t.string   "education"
    t.string   "location"
    t.string   "hometown"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "password_digest",        null: false
    t.string   "session_token",          null: false
    t.string   "email",                  null: false
    t.string   "first_name",             null: false
    t.string   "last_name",              null: false
    t.date     "dob",                    null: false
    t.string   "alignment",              null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.string   "prof_pic_file_name"
    t.string   "prof_pic_content_type"
    t.integer  "prof_pic_file_size"
    t.datetime "prof_pic_updated_at"
    t.string   "cover_pic_file_name"
    t.string   "cover_pic_content_type"
    t.integer  "cover_pic_file_size"
    t.datetime "cover_pic_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
