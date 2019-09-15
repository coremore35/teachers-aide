class AddGradeColumnToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :grade_mark, :integer
  end
end
