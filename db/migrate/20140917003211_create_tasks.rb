class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.float :cost
      t.string :status

      t.timestamps
    end
  end
end
