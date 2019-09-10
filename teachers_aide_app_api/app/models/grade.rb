class Grade < ApplicationRecord
  belongs_to :teacher
  belongs_to :lesson
  belongs_to :student
end
