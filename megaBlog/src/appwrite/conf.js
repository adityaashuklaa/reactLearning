import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);  
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
            })
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
                // 100, For pagination
                // 0, For pagination
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    // File Upload Service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileID
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileID
        )
    }

}

const service = new Service();

export default service;

// We've created service using new method, just to create object out of the service so that we can extract values from the object. We've created service using NEW method, so we've to also create constructor for it. 
// Account should be created when the constructor is being called.
// Usually we make mistakes while uploading file, we just give the filename, that is incorrect, we have to completely give the file blobs.