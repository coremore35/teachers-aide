class AddColumnsToTables < ActiveRecord::Migration[6.0]
  def change
    add_reference :lessons, :teacher, index: true, foreign_key: true
    remove_column :grades, :teacher_id
    remove_column :students, :grade_mark
  end
end
