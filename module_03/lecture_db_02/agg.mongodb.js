use("stocks");

db.stockdata.aggregate([
  {
    $addFields: {
      Date: {
        $dateFromString: {
          dateString: "$Date",
        },
      },
    },
  },
  {
    $out: 'stockdata'
  }
]);
