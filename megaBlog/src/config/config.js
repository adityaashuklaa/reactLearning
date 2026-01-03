const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config 

// The only reason behind this is to get rid of the long code and alos it acts as a safety, cause rather than directly accessing the deails of variables, you are creating an object which has a type of the variable in this case string. Sometimes, while directly passing the env to the env file makes the code go down, due to any small issue which env can't detect, like letter issue in the content of the variable or something like that, so this is the prod level code, which makes it more realible.