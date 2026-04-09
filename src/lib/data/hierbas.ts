// lib/data/hierbas.ts
import { unstable_cache } from 'next/cache'; // Ensure this points to your connection
import clientPromise from '../connection/mongodb';
import { EspecimenType } from '../types/especimenTypes';

// Renamed to plural since it fetches all items
export const getHierbas = unstable_cache(
  async () => {
    const client = await clientPromise;
    const database = client.db('botany_db');
    const plantasMedicinalesCollection = database.collection<EspecimenType>(
      'plantas_medicinales',
    );

    const data = await plantasMedicinalesCollection.find({}).toArray();

    return data.map((item) => {
      return {
        ...item,
        // Serialize the BSON ObjectId
        _id: item._id.toString(),
      };
    });
  },
  ['hierbas-list-cache'], // Updated cache key to reflect a list
  {
    tags: ['hierbas'], // Invalidate this list whenever a new herb is added/updated
    revalidate: false, // Cache indefinitely until revalidated
  },
);
