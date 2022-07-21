## Create Table

```
use bookstore
```

## Make document

```
bookstore.books
```

## InsertOne data to book document

```
bookstore.books.insertOne({
    title:"The color of magic",
    author:"Terry Paratchett",
    pages:300,
    rating:7,
    genres:["fantasy","magic"]
})
```

## InsertOne data to book document

```
bookstore.books.insertMany(
    [
        {
            title:"The color of magic",
            author:"Terry Paratchett",
            pages:300,
            rating:7,
            genres:["fantasy","magic"]
        },
        {
            title:"The color of magic",
            author:"Terry Paratchett",
            pages:300,
            rating:7,
            genres:["fantasy","magic"]
        },
    ]
)
```

## Find data

```
db.books.find() 
```

```
db.books.find({author:"Jhon"})
```

## Find specify data

```
db.books.find({author:"Jhon"},{author:1,title:1})
```

```
db.books.find({},{author:1,title:1})
```

## Find One

```
db.books.findOne({_id:ObjectId("62d961f7b43a81748b3a6aea")})
```

## Count,sort and limit

```
db.books.find().count()
```
```
db.books.find().limit(3)
```
```
db.books.find({author:"Jhon"}).count()
```
```
db.books.find().sort({title:-1})
```
```
db.books.find().sort({title:1})
```
## Find greater($gt) than and less($lt) than ($gte - greater than or equal, $lte less than or equal)

```
db:books.find({rating:{$gt:7}})
```
```
db:books.find({rating:{$gte:7}})
```
```
db:books.find({rating:{$lt:7}})
```
```
db:books.find({rating:{$lte:7}})
```
```
db:books.find({rating:{$lte:7},author:"jhon"})
```

## Or operator

```
db.books.find(
    { 
        $or:[ 
                { rating:7 },
                { rating:9 } 
            ] 
    })
```

## In Operator and notIn operator

```
db.books.find({ rating:{$in:[7,8,9] } })
```
```
db.books.find({ rating:{$nin:[7,8,9] } })
```

## Query array (exactly)

```
db.books.find({genres:["magic"]})
```

## Query array (whereIn)

```
db.books.find({genres:{$all:['magic']}})
```

## Query array nested document (reviews:[{},{}])

```
db.books.find({"reviews.name","yoshi"})
```

## Delete and deleteMany

```
db.books.delete({_id,ObjectId()})
```
```
db.books.deleteMany({author,'jhon'})
```

## Update and updateMany

```
db.books.update({_id:ObjectId()},{$set:{author:'yoshi'}})
```

```
db.books.updateMany({author:"Yoshi"},{$set:{author:'Jhon'}})
```
## Increment and decrement

```
db.books.update({_id:ObjectId()},{$inc:{pages:1}})
```
```
db.books.update({_id:ObjectId()},{$inc:{pages:-1}})
```

## push and pull

```
db.books.update({_id:ObjectId()},{$push:{genres:['horor']}})
```

```
db.books.update({_id:ObjectId()},{$pull:{genres:['horor']}})
```

```
db.books.update({_id:ObjectId()},{$push:{genres:{$each:['horor','scifi']}}})
```