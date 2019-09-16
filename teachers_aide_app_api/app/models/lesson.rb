class Lesson < ApplicationRecord
    belongs_to :teacher
    has_many :grades
    has_many :students, through: :grades, dependent: :destroy
end
