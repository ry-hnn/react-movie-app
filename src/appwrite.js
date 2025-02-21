import { Client, Databases, ID, Query } from "appwrite";
import {
  APPWRITE_PROJECT_ID,
  APPWRITE_DATABASE_ID,
  APPWRITE_COLLECTION_ID,
  APPWRITE_ENDPOINT,
} from "./config";

const client = new Client()
.setEndpoint(APPWRITE_ENDPOINT) 
.setProject(APPWRITE_PROJECT_ID); 

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {

    try {
        const result = await database.listDocuments(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ])

        // 2. If it does, update the count

        if(result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, doc.$id, {
                count: doc.count + 1,
            })

        // 3. If it doesn't, create a new document with the search term and count as 1 

        } else {
            await database.createDocument(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
        } catch (error) {
            console.error(error);
        }
    }

export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ])

        return result.documents;
    } catch (error) {
        console.error(error);
    }

}

export { client, database, APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID };




