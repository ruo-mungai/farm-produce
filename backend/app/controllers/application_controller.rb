class ApplicationController < Sinatra::Base

  set :default_content_type, 'application/json'
 
  get '/farmers' do
    far=Farmer.all
    far.to_json(include: {
      products: { only: [:name, :quantity, :price], include: {
        category: { only: [:name] }
      } }
    })
  end

  delete '/farmers/:id' do
     farmer= Farmer.find(params[:id])
      
     farmer.products.destroy_all
     farmer.destroy
      
       farmer.to_json
  
  end
  
   get '/product/subtotal/:id' do
    cat= Farmer.find(params[:id]).products.map do |t|
      t.price
    end
    cat.sum.to_json
   end

  
  get '/total' do
    tot=Product.all.map do |t|
        t.price
    end
    tot.sum.to_json             
  end 



  get '/category' do
    cat=Category.all
        
    cat.to_json            
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

    post '/f' do 
    pr=Farmer.create(
      name: params[:name],
      tel:params[:tel],
      location:params[:location])
    pr.to_json
    end

get '/product' do 
    pr=Product.all
    pr.to_json  
   end

patch '/product/:id' do
  product= Product.find(params[:id])
  product.update(
   name: params[:name],
      quantity:params[:quantity],
      price:params[:price]
  )
  product.to_json
end
end