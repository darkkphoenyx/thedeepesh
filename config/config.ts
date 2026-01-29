const config = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  appwriteCollectionId1: String(
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID1,
  ),
  appwriteCollectionId2: String(
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID2,
  ),
  appwriteCollectionId3: String(
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID3,
  ),
  appwriteBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID),
};

export default config;
