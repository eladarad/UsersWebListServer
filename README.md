# Server Project

Welcome to the UserWebListServer Project! This project is a Node.js server application that provides APIs for managing users.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:
Install dependencies


2. npm install:
add the .env file in the root directory of the project.


3. Start the server:
npm start
The server will start running on port 5000 by default.


## Usage
Once the server is running, you can use the following endpoints to interact with the API:

GET /users: Get a list of all users.
GET /users/:id: Get a specific user by ID.
POST /users: Create a new user.
PUT /users/:id: Update an existing user.
DELETE /users/:id: Delete a user by ID.
Make sure to include the necessary authorization headers when making requests to protected endpoints.



## UML
 ____________________________________________________________
|                      Controller                            |
|------------------------------------------------------------|
|                    UserController                          |
|------------------------------------------------------------|
| + getUsers(page: Number): Promise                          |
| + getUser(id: String): Promise                             |
| + createUser(newUser: Object): Promise                     |
| + updateUser(id: String, updatedUserData: Object): Promise |
| + deleteUser(id: String): Promise                          |
|____________________________________________________________|
                        |   
                        |   
                        |   
 ____________________________________________________________
|                      Service                               |
|------------------------------------------------------------|
|                  UserService                               |
|------------------------------------------------------------|
| + getUsers(page: Number): Promise                          |
| + getUser(id: String): Promise                             |
| + createUser(newUser: Object): Promise                     |
| + updateUser(id: String, updatedUserData: Object): Promise |
| + deleteUser(id: String): Promise                          |
|____________________________________________________________|        
                        |   
                        |        
                        |        
 ___________________________________________________
|                  Data Access                      |
|---------------------------------------------------|
|                 axiosInstance                     |
|---------------------------------------------------|
| + get(url: String): Promise                       |
| + post(url: String, data: Object): Promise        |
| + put(url: String, data: Object): Promise         |
| + delete(url: String): Promise                    |
|___________________________________________________|
                        |
                        |
                        |
 ___________________________________________________
|                     Cache                         |
|---------------------------------------------------|
|                CacheManager                       |
|---------------------------------------------------|
| + get(key: String): Promise                       |
| + set(key: String, value: any): Promise           |
| + clear(): void                                   |
|___________________________________________________|
                       |
                       |
                       |
 ___________________________________________________
|                    Database                       |
|---------------------------------------------------|
|                    MongoDB                        |
|---------------------------------------------------|
|                   UserSchema                      |
|---------------------------------------------------|
| - id: ObjectId                                    |
| - firstName: String                               |
| - lastName: String                                |
| - email: String                                   |
| - createdAt: Date                                 |
| - updatedAt: Date                                 |
|___________________________________________________|
