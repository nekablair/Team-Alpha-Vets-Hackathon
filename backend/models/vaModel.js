import mongoose from 'mongoose';

const vaSchema = mongoose.Schema(
  {
    state: { type: String },
    city: { type: String },
    zip: { type: String },
    lat: { type: Number },
    long: { type: Number },
    website: { type: String },
    name: { type: String },
    equineProviderName: { type: String },
    equineProviderPhone: { type: String },
    equineProviderEmail: { type: String },
    equineProviderWebsite: { type: String },
  },
  { timestamp: true }
);
const VA = mongoose.model('VA', vaSchema);

export default VA;
