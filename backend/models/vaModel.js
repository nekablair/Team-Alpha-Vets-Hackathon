import mongoose from 'mongoose';

const vaSchema = mongoose.Schema(
  {
    vaId: { type: String },
    state: { type: String },
    city: { type: String },
    zip: { type: String },
    lat: { type: Number },
    long: { type: Number },
    vaWebsite: { type: String },
    scrapedUrlResults: { type: Array },
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
