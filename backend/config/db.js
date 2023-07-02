import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.TEST_MONGO_URI);
    console.log(`Mongo DB Connected ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`DB Connection Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};
export default connectDB;
