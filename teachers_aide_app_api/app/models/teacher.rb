class Teacher < ApplicationRecord
    has_many :grades
    has_many :students, through: :grades
    has_many :lessons, through: :grades
end
