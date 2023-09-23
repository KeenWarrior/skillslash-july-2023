use("stocks");

db.stockdata.aggregate([
  {
    $group: {
      _id: null,
      MSFT_BEST: {
        $max: "$MSFT",
      },
      MSFT_WORST: {
        $min: "$MSFT",
      },
      AAPL_BEST: {
        $max: "$AAPL",
      },
      AAPL_WORST: {
        $min: "$AAPL",
      },
      SBUX_BEST: {
        $max: "$SBUX",
      },
      SBUX_WORST: {
        $min: "$SBUX",
      },
      MSFT_AVG: {
        $avg: "$MSFT",
      },
      AAPL_AVG: {
        $avg: "$AAPL",
      },
      SBUX_AVG: {
        $avg: "$SBUX",
      },
    },
  },
  {
    $addFields: {
      MSFT_DIFF: {
        $subtract: ["$MSFT_BEST", "$MSFT_WORST"],
      },
      AAPL_DIFF: {
        $subtract: ["$AAPL_BEST", "$AAPL_WORST"],
      },
      SBUX_DIFF: {
        $subtract: ["$SBUX_BEST", "$SBUX_WORST"],
      },
    },
  },
  {
    $addFields: {
      MSFT_GAIN: {
        $divide: ["$MSFT_DIFF", "$MSFT_WORST"],
      },
      AAPL_GAIN: {
        $divide: ["$AAPL_DIFF", "$AAPL_WORST"],
      },
      SBUX_GAIN: {
        $divide: ["$SBUX_DIFF", "$SBUX_WORST"],
      },
    },
  },
  {
    $project: {
      MSFT_GAIN: 1,
      AAPL_GAIN: 1,
      SBUX_GAIN: 1,
    },
  },
]);
