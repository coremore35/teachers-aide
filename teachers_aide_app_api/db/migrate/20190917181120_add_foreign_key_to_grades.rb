class AddForeignKeyToGrades < ActiveRecord::Migration[6.0]
  def change
    add_reference :students, :grades, index: true, foreign_key: true
  end
end
