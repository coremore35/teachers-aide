class AddForeignKeyToLessons < ActiveRecord::Migration[6.0]
  def change
    add_reference :lessons, :grades, index: true, foreign_key: true, on_delete: :cascade
  end
end
