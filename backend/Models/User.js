const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },

  { timeseries: true }
);

// Sign up
userSchema.statics.signup = async function (email, password) {
  const exist = await this.findOne({ email });

  if (!email || !password) {
    throw Error("يرجى إدخال الإيميل أو كلمة المرور");
  }

  if (exist) {
    throw Error("هذا الإيميل مسجل مسبقا");
  }

  if (!validator.isEmail(email)) {
    throw Error("يرجى إدخال بريد إلكتروني صحيح");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("يرجى إدخال كلمة مرور قوية");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

// Log In
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("يرجى إدخال الإيميل أو كلمة المرور");
  }

  if (!validator.isEmail(email)) {
    throw Error("يرجى إدخال بريد إلكتروني صحيح");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("لا يوجد إيميل بهذا الاسم");
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error("كلمة المرور خاطئة")
  }

  return user
};

module.exports = mongoose.model("User", userSchema);
