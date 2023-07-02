## Live Link: https://couhat-backend.vercel.app/
# Application Routes:
### User
 - api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/648dfffc643f9f29e8db0755 (Single GET) 
- api/v1/users/648dfffc643f9f29e8db0755 (PATCH)
- api/v1/users/648dfffc643f9f29e8db0755 (DELETE) 
### Cows
- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/648ec09b1bf3e5d8db655bd4 (Single GET)
- api/v1/cows/648ec09b1bf3e5d8db655bd4 (DELETE) 
- api/v1/cows/648eb6a359d9236830d171b0 (PATCH)
### Pagination and Filtering routes of Cows
- api/v1/cows?page=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=20000&maxPrice=70000
- api/v1/cows?location=Dhaka
- api/v1/cows?searchTerm=raj
### Orders
- api/v1/orders (POST)
- api/v1/orders (GET)