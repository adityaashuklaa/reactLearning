## Appwrite

- Appwrite is complete Backend as a service, something similar like firebase, but it's open source, whereas firebase holds the properity of google.
- TinyMCE, open source rich text editor.
- env file should always be in the root of the project.
- env file is only loaded once usually, but whenever you add something to env or update something, make sure to close the project and restart it.
- apprwrite consists of alot of services like database related services, authentication, upload and download and other such multiple services.
- There's a concept of VENDOR LOCKIN in appwrite, which simply means that in future you want to remove your authentication system from the appwrite, and want to shift it to somewhere else, it could be possible, and your application can run without facing much issues. 
- After this the concept of SERVICES is being introduced, we export some methods from the SERVICES, and it doesn't care we're connected to appwrite or firebase or even my custom database.