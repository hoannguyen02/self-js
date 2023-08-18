# How are sharding and replication similar to each other in MongoDB, and how are they different?
Both sharding and replication involve using more than one instance to host the database.

Replicas are MongoDB instances with the same data, hence the name. We use replicas to increase redundancy and availability.

With sharding, on the other hand, each shard instance has different data from its neighbors. We use sharding for horizontal scaling.

# What is the difference between save and insert, when do they act similarly?
It is depending on _id in the payload provided: 
- Without _id: New document will be created, 
- With _id: 
    - No existing: Both will create a new document
    - Existing: `save` will replace, `insert` will throw error

# What is differences between BJSON documents used in MongoDB and JSON in general?
BJSON similar to JSON, but it extends JSON to support more data types such Date. BJSOn is binary so it faster to traverse


# Assume there is a document with nested arrays that looks like the one below. How can you insert a “room” that has the name “Room 44” and size of “50” for a particular “house” that belongs to this user?
```
{
    "_id": "682263",
    "userName" : "sherif",
    "email": "sharief@aucegypt.edu",
    "password": "67834783ujk",
    "houses": [
        {
        "_id": "2178123",
        "name": "New Mansion",
        "rooms": [
            {
            "name": "4th bedroom",
            "size": "12"
            },
            {
            "name": "kitchen",
            "size": "100"
            }
        ]
        }
  ]
}
```
Solution
```
db.users.update(
    { 
        "_id": ObjectId("682263"),
        "houses._id":"2178123"     // identify the id for the house that we want to update
    },
    { "$push":   
        {
            "houses.$.rooms":      // identify the array we want to push items into
                {                  
                    "name": "Room 44",      // this is the payload that needs to be pushed 
                    "size": "50"
                }
        }
    }
)
```

# Assume there is a collection named users that looks like the one below. How can you get all houses in the “Rabia” neighborhood?
```
[
    {
        "_id" : ObjectId("5d011c94ee66e13d34c7c388"),
        "userName" : "kevin",
        "email" : "kevin@toptal.com",
        "password" : "affdsg342",
        "houses" : [
            {
                "name" : "Big Villa",
                "neighborhood" : "Zew Ine"
            },
            {
                "name" : "Small Villa",
                "neighborhood" : "Rabia"
            }
        ]
    },

    {
        "_id" : ObjectId("5d011c94ee66e13d34c7c387"),
        "userName" : "sherif",
        "email" : "sharief@toptal.com",
        "password" : "67834783ujk",
        "houses" : [
            {
                "name" : "New Mansion",
                "neighborhood" : "Nasr City"
            },
            {
                "name" : "Old Villa",
                "neighborhood" : "Rabia"
            }
        ]
    },

]
```

Solution
```
db.users.aggregate([
    { $match: { 'houses.neighborhood': 'Rabia' } },
    {
        $project: {
            filteredHouses: {   // This is just an alias 
                $filter: {
                    input: '$houses', // The field name we are checking
                    as: 'houseAlias', // just an alias
                    cond: { $eq: ['$$houseAlias.neighborhood', 'Rabia'] }
                }
            },
            _id: 0
        }
    }

])
```

# Could you catch how the two queries below are different?
```
dealers.find({
    "$and": [
        {
            "length": {
                "$gt": 2000
            }
        },
        {
            "cars.weight": {
                "$gte": 800
            }
        }
    ]
});

dealers.find({
    "length": {
        "$gt": 2000
    },

    "cars.weight": {
        "$gte": 800
    }
});
```

Solution: Actually, they are exactly the same.


# A staple feature of relational database systems is the JOIN clause. What is the equivalent in MongoDB, and does it have any known limitations?
The $lookup operator is the equivalent of JOIN
Assume we have three collections (authors, authorInfo, and userRole) with the following data:
```
// authors collection
[
    {
        "_id" : ObjectId("5d0127aaee66e13d34c7c389"),
        "address" : "32 Makram Ebeid Street",
        "isActive" : true,
        "authorId" : "121"
    }
]

// authorInfo collection
[
    {
        "_id" : ObjectId("5d0f726bac65f929d0fa98b2"),
        "authorId" : "121",
        "description" : "A description"
    }
]

// userRole collection
[
    {
        "_id" : ObjectId("5d012a08ee66e13d34c7c38f"),
        "userId" : "121",
        "role" : "manager"
    }
]
```

SQL solution:
```
SELECT a._id, a.address, b.description, c.role
  FROM authors a
  INNER JOIN "authorInfo" b ON b."authorId" = a."authorId"
  INNER JOIN "userRole" c ON c."userId" = a."authorId"

```

MongoDB solution:
```
db.authors.aggregate([

    // Join with authorInfo table
    {
        $lookup:{
            from: "authorInfo",       // connecting authorInfo collection
            localField: "authorId",   // name of field in the authors collection
            foreignField: "authorId", // name of field in the authorInfo collection
            as: "authorInfoAlias"     // any alias
        }
    },
    {   $unwind:"$authorInfoAlias" }, // use the alias here

    // Join with userRole collection
    {
        $lookup:{
            from: "userRole", 
            localField: "authorId", 
            foreignField: "userId",
            as: "authorRoleAlias"
        }
    },
    {   $unwind:"$authorRoleAlias" },
    {   
        $project: {                                          // Just projecting our data.
            _id : 1,
            address : 1,
            description : "$authorInfoAlias.description",
            role : "$authorRoleAlias.role",
        } 
    }
```