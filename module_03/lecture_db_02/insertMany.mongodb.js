use("learn-agg");

db.tours.insertMany([
    {
        "tourName": "The Forest Hiker",
        "tourPrice": 297,
        "tourLength": 3,
        "difficulty": "easy",
        "maxGroupSize": 25,
        "ratingsAverage": 4.7,
        "ratingsQuantity": 37,
        "priceDiscount": 23,
        "dateStart": new Date("2023-10-16T09:00:00.000Z")
    },
    {
        "tourName": "The Sea Explorer",
        "tourPrice": 497,
        "tourLength": 7,
        "difficulty": "medium",
        "maxGroupSize": 15,
        "ratingsAverage": 4.8,
        "ratingsQuantity": 29,
        "priceDiscount": 0,
        "dateStart": new Date("2023-07-20T09:00:00.000Z")
    },
    {
        "tourName": "The Snow Adventurer",
        "tourPrice": 997,
        "tourLength": 19,
        "difficulty": "difficult",
        "maxGroupSize": 10,
        "ratingsAverage": 4.9,
        "ratingsQuantity": 19,
        "priceDiscount": 0,
        "dateStart": new Date("2023-09-24T09:00:00.000Z")
    },
    {
        "tourName": "King of the Jungle",
        "tourPrice": 997,
        "tourLength": 19,
        "difficulty": "difficult",
        "maxGroupSize": 25,
        "ratingsAverage": 4.7,
        "ratingsQuantity": 37,
        "priceDiscount": 23,
        "dateStart": new Date("2023-10-16T09:00:00.000Z")
    }
]);