import { connect } from 'mongoose';
import * as mongoose from 'mongoose';
export default async function createSession() {
  const MONGO_URL = process.env.MONGO_URL || '';
  if (!MONGO_URL) {
    throw new Error('Missing MONGO_URL');
  }
  mongoose.set('strictQuery', false);
  connect(MONGO_URL);
}