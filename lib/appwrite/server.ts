import { Client, Databases, Query, Storage } from "node-appwrite";

const client = new Client()
  .setEndpoint(process.env.APPWRITE_URL!)
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

export const databases = new Databases(client);
export const storage = new Storage(client);

export async function getProjectDetails(type: string) {
  const queries = [Query.orderDesc("$createdAt")];

  if (type !== "All Projects") {
    queries.push(Query.equal("type", type));
  }

  return databases.listDocuments(
    process.env.APPWRITE_DATABASE_ID!,
    process.env.APPWRITE_COLLECTION_ID1!,
    queries,
  );
}
