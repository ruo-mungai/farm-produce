class CreateProduct < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :quantity
      t.integer :price
      t.integer :category_id
      t.integer :farmer_id
      t.timestamp :delivered_on 
    end
  end
end
