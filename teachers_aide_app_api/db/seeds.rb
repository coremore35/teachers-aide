# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# lessonOneGrades = Grade.create([{student_id: 1, teacher_id: 1, lesson_id: 1, student_grade: 1}, {student_id: 2, teacher_id: 1, lesson_id: 1, student_grade: 3},{student_id: 3, teacher_id: 1, lesson_id: 1, student_grade: 2} ])

# lessonTwoGrades = Grade.create([{student_id: 1, teacher_id: 1, lesson_id: 2, student_grade: 2}, {student_id: 2, teacher_id: 1, lesson_id: 2, student_grade: 3},{student_id: 3, teacher_id: 1, lesson_id: 2, student_grade: 3} ])

# lessonThreeGrades = Grade.create([{student_id: 1, teacher_id: 1, lesson_id: 3, student_grade: 1}, {student_id: 2, teacher_id: 1, lesson_id: 3, student_grade: 2},{student_id: 3, teacher_id: 1, lesson_id: 3, student_grade: 3} ])


3.times do 
    Teacher.create(
        name: Faker::Name.last_name,
    )
end

15.times do
    Student.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        grade_mark: Faker::Number.within(range:1..3)
    )
end

lessons = Lesson.create([{lesson_name: 'Finding a common denominator'}, {lesson_name: 'Adding fractions with an unlike denominator'}, {lesson_name: 'Subtracting fractions with an unlike denominator'}])


# # Teacher 1
# n=0
# 15.times do
#     Grade.create(
#         teacher_id: 1,
#         student_id: n = n + 1,
#         lesson_id: 1,
#         student_grade: Faker::Number.within(range: 1..3)
#     )
# end

# n=0
# 15.times do
#     Grade.create(
#         teacher_id: 1,
#         student_id: n = n + 1,
#         lesson_id: 2,
#         student_grade: Faker::Number.within(range: 1..3)
#     )
# end

# n=0
# 15.times do
#     Grade.create(
#         teacher_id: 1,
#         student_id: n = n + 1,
#         lesson_id: 3,
#         student_grade: Faker::Number.within(range: 1..3)
#     )
# end


# # Teacher 2
# n=0
# 15.times do
#     Grade.create(
#         teacher_id: 2,
#         student_id: n = n + 1,
#         lesson_id: 1,
#         student_grade: Faker::Number.within(range: 1..3)
#     )
# end

# n=0
# 15.times do
#     Grade.create(
#         teacher_id: 2,
#         student_id: n = n + 1,
#         lesson_id: 2,
#         student_grade: Faker::Number.within(range: 1..3)
#     )
# end

# n=0
# 15.times do
#     Grade.create(
#         teacher_id: 2,
#         student_id: n = n + 1,
#         lesson_id: 3,
#         student_grade: Faker::Number.within(range: 1..3)
#     )
# end