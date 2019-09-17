# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_17_181120) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "grades", force: :cascade do |t|
    t.integer "student_grade"
    t.bigint "lesson_id", null: false
    t.bigint "student_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lesson_id"], name: "index_grades_on_lesson_id"
    t.index ["student_id"], name: "index_grades_on_student_id"
  end

  create_table "lessons", force: :cascade do |t|
    t.string "lesson_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "teacher_id"
    t.bigint "grades_id"
    t.index ["grades_id"], name: "index_lessons_on_grades_id"
    t.index ["teacher_id"], name: "index_lessons_on_teacher_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "grades_id"
    t.index ["grades_id"], name: "index_students_on_grades_id"
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "grades", "lessons"
  add_foreign_key "grades", "students"
  add_foreign_key "lessons", "grades", column: "grades_id"
  add_foreign_key "lessons", "teachers"
  add_foreign_key "students", "grades", column: "grades_id"
end
