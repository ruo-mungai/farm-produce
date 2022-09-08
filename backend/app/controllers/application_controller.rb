class ApplicationController < Sinatra::Base

  set :default_content_type, 'application/json'
 
  get '/farmers' do
    far= Farmer.all

    far.to_json(include: {
      products: { only: [:name, :quantity, :price], include: {
        category: { only: [:name] }
      } }
    })
  end

   get '/category' do
    cat= Category.all
    cat.to_json
   end

  get '/farmer/:name' do |n|
  
  test=Farmer.find_by(name: params[:name] )
  test.to_json
end
  
  get '/total' do
    tot=Product.all.map do |t|
        t.price
    end
    tot.sum.to_json             
  end

  get '/' do
  test='Hello world!'
  test.to_json
end 

  post '/p' do 
    pr=Product.create(
      name: params[:name],
      quantity:params[:quantity],
      price:params[:price],
      category_id:params[:category_id],
      farmer_id:params[:farmer_id],
      delivered_on:params[:delivered_on]) 
    pr.to_json
    end

    post '/farmer' do
      far=Farmers.create(
        name: params[:name],
        tel:params[:tel],
        location:params[:location])
      far.to_json
      end

    post '/category' do
      ca=Category.create(
        name: params[:name])
      ca.to_json
      end
    
end