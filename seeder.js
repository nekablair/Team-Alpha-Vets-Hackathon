import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import va from './data/va.js'
import VA from './backend/models/vaModel.js';
import connectDB from './backend/config/db.js';

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    // clearing data so it doesn't go into db with existing values
    await VA.deleteMany();

    await VA.insertMany(va); //this is an array

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // clearing data so it doesn't go into db with existing values
    await VA.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
