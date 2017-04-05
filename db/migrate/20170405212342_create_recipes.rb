class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.int :user_id
      t.string :title
      t.string :image_url, default: "http://res.cloudinary.com/dzwygk2c4/image/upload/v1491427660/user_xrw8po.png"
      t.int :rating,    default: 5
      t.string :ingredients,    default: []
      t.string :directions,    default: []

      t.timestamps
    end
  end
end
