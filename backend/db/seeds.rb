puts 'seedin started .......'
Farmer.destroy_all
Category.destroy_all
Product.destroy_all

 f1 = Farmer.create(
    name: "Jamta plantation", tel: "0712 546 987",
    location: "Lamata Estate"
 )
 f2 = Farmer.create(
    name: "Penniata plantation", tel: "0722 564 978",
    location: "Pennita Estate"
 )
 f3 = Farmer.create(
    name: "Patiana plantation", tel: "0720 564 978",
    location: "Patiana Estate"
 )



 c1=Category.create(name: "Animal Product")
 c2=Category.create(name: "Garden Products")

 p1=Product.create(name: "Milk", quantity: 30, price: 1800,
category_id: c1.id, farmer_id: f2.id)
 p2=Product.create(name: "Milk", quantity: 40, price: 2400,
category_id: c1.id, farmer_id: f3.id)
 p3=Product.create(name: "Onion", quantity: 10, price: 1000,
category_id: c2.id, farmer_id: f1.id)

