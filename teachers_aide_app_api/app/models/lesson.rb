class Lesson < ApplicationRecord
    has_many :grades
    has_many :students, through: :grades
    has_one :teacher, through: :grades
end
