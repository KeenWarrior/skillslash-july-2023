use("another");

db.company.insertMany([
  {
    name: "Google",
    locations: [
      {
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        established: 1998,
      },
      {
        city: "Mountain View",

        state: "California",
        country: "USA",
      },
      {
        city: "New York",

        state: "New York",
        country: "USA",
      },
    ],
  },
  {
    name: "Microsoft",
    locations: [
        {
            city: "Bangalore",
            state: "Karnataka",
            country: "India",
        }, {
            city: "Redmond",
            state: "Washington",
            country: "USA",
        }, {
            city: "Noida",
            state: "Uttar Pradesh",
            country: "India",
        }
    ]
  },
  {
    name: "Amazon",
    locations: [
        {
            city: "Bangalore",
            state: "Karnataka",
            country: "India",
        }, {
            city: "Seattle",
            state: "Washington",
            country: "USA",
        }, {
            city: "Hyderabad",
            state: "Telangana",
            country: "India",
        }
    ]
  },
]);
