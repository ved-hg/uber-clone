# Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}



### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}


### GET /users/profile

#### Description
Get the profile information of the currently logged in user. Requires authentication.

#### Authentication
Requires a valid JWT token in the Authorization header or cookies.

#### Headers
- `Authorization: Bearer <token>` (required if token not in cookies)

#### Responses

- `200 OK`: Successfully retrieved user profile
  - Body:
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- `401 Unauthorized`: No token provided or invalid token
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request
```sh
curl -X GET http://localhost:4000/users/profile \
-H "Authorization: Bearer <your_token>"

### GET /users/logout

#### Description
Logs out the current user by invalidating their token and clearing cookies. The token is blacklisted to prevent reuse.

#### Authentication
Requires a valid JWT token in the Authorization header or cookies.

#### Headers
- `Authorization: Bearer <token>` (required if token not in cookies)

#### Responses

- `200 OK`: Successfully logged out
  - Body:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- `401 Unauthorized`: No token provided or invalid token
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request
```sh
curl -X GET http://localhost:4000/users/logout \
-H "Authorization: Bearer <your_token>"

#


# Captain API Documentation

## POST /captain/registerCaptain

### Request Body
```json
{
  "fullname": {
    "firstname": "John", // required, min 3 chars
    "lastname": "Doe"    // optional
  },
  "email": "john@example.com", // required, valid email format
  "password": "password123",   // required, min 6 chars
  "vehicle": {
    "color": "black",         // required, min 3 chars
    "plate": "ABC123",        // required, min 3 chars
    "capacity": 4,            // required, min 1
    "vehicleType": "car"      // required, enum: ["car","motorcycle","auto"]
  }
}

###Responses
{
  "token": "eyJhbG...", // JWT token valid for 24h
  "captain": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123", 
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}

##POST /captain/loginCaptain

###Request body
{
  "email": "john@example.com", // required, valid email
  "password": "password123"    // required, min 6 chars
}

###Responses
{
  "token": "eyJhbG...", // JWT token valid for 24h
  "captain": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}

##GET /captain/profile
###Headers
{
  "Authorization": "Bearer eyJhbG..." // required, JWT token
}

###Respones
{
  "_id": "507f1f77bcf86cd799439011",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  },
  "location": {
    "lat": null,
    "long": null
  }
}

##GET /captain/logout
###Headers
{
  "Authorization": "Bearer eyJhbG..." // required, JWT token
}
###Responses
{
  "message": "Logged out successfully"
}