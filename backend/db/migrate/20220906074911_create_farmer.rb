class CreateFarmer < ActiveRecord::Migration[6.1]
  def change
    create_table :farmers do |t|
      t.string :name
      t.string :tel
      t.string :location
    end
  end
end
