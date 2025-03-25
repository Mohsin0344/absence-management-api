# Absence & Members API

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/Mohsin0344/absence-management-api
   ```
2. Navigate to the project folder:
   ```sh
   cd project-folder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server in development mode:
   ```sh
   npm run dev
   ```
5. Start the server in production mode:
   ```sh
   npm start
   ```

## Overview
This API provides endpoints to manage and retrieve members and their absences. It includes features like pagination, filtering absences by type and date, and retrieving unique absence types.

## Endpoints

### 1. Get Members
**Endpoint:** `GET /members`

**Description:**
Fetches a paginated list of members.

**Query Parameters:**
- `page` (optional, default: `1`): Specifies the page number.
- `limit` (optional, default: `10`): Defines the number of items per page.

**Response:**
```json
{
    "message": "Members fetched successfully",
    "status": 200,
    "data": [
        {
            "id": 1,
            "name": "John Doe",
            "crewId": 352
        }
    ],
    "pagination": {
        "totalItems": 50,
        "totalPages": 5,
        "currentPage": 1,
        "pageSize": 10,
        "nextPage": 2
    }
}
```

### 2. Get Absences
**Endpoint:** `GET /absences`

**Description:**
Fetches a paginated list of absences with optional filters.

**Query Parameters:**
- `page` (optional, default: `1`): Specifies the page number.
- `limit` (optional, default: `10`): Defines the number of items per page.
- `type` (optional): Filters absences by type.
- `date` (optional): Filters absences occurring on a specific date.

**Response:**
```json
{
    "message": "Absent members fetched successfully",
    "status": 200,
    "data": [
        {
            "id": 2351,
            "startDate": "2021-01-13",
            "endDate": "2021-01-13",
            "type": "sickness",
            "member": {
                "id": 2650,
                "name": "Mike"
            }
        }
    ],
    "pagination": {
        "totalItems": 35,
        "totalPages": 7,
        "currentPage": 1,
        "pageSize": 5,
        "nextPage": 2
    }
}
```

### 3. Get Unique Absence Types
**Endpoint:** `GET /absence-types`

**Description:**
Retrieves a list of unique absence types.

**Response:**
```json
{
    "message": "Unique absence types fetched successfully",
    "status": 200,
    "data": ["sickness", "vacation"]
}
```

## Project Structure
```
project-folder/
│── controllers/
│   ├── absence.js
│   ├── members.js
│   ├── uniqueAbsenceTypes.js
│── mock-data/
│   ├── absence.json
│   ├── members.json
│── utils/
│   ├── pagination.js
│── routes/
│   ├── index.js
│── server.js
│── package.json
│── README.md
```

## Pagination Utility
The `paginate` function helps split large datasets into smaller pages.

**Usage:**
```js
const paginatedResult = paginate(data, page, limit);
```

**Example Response:**
```json
{
    "data": [...],
    "pagination": {
        "totalItems": 50,
        "totalPages": 5,
        "currentPage": 1,
        "pageSize": 10,
        "nextPage": 2
    }
}
```

## License
This project is licensed under the MIT License.

