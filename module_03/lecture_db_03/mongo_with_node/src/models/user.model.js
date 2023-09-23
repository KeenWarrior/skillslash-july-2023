import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    home: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("findOne", function (next) {
  console.log("pre find one");
  next();
});

userSchema.pre("deleteOne", function (next) {
  console.log("pre deleteOne");
  next();
});

userSchema.index({ home: "2dsphere" });

const User = mongoose.model("User", userSchema);

export default User;
