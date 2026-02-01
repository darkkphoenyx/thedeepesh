const required = (value: string | undefined, name: string) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

const config = {
  appwriteUrl: required(
    process.env.NEXT_PUBLIC_APPWRITE_URL,
    "NEXT_PUBLIC_APPWRITE_URL",
  ),
  appwriteProjectId: required(
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    "NEXT_PUBLIC_APPWRITE_PROJECT_ID",
  ),
  appwriteDatabaseId: required(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    "NEXT_PUBLIC_APPWRITE_DATABASE_ID",
  ),
  appwriteCollectionId1: required(
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID1,
    "NEXT_PUBLIC_APPWRITE_COLLECTION_ID1",
  ),
  appwriteCollectionId2: required(
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID2,
    "NEXT_PUBLIC_APPWRITE_COLLECTION_ID2",
  ),
  appwriteCollectionId3: required(
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID3,
    "NEXT_PUBLIC_APPWRITE_COLLECTION_ID3",
  ),
  appwriteBucketId: required(
    process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
    "NEXT_PUBLIC_APPWRITE_STORAGE_ID",
  ),
};

export default config;
