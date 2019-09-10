class Student < ApplicationRecord
    has_many :grades
    has_many :teachers, through: :grades
    has_many :lessons, through: :grades
end
