# API Gateway of bookmyairline

### FRONT END -- MIDDLE END -- BACKEND

- We need an intermediate layer between the client side and the microservices
- This middle end helps in rate limiting, request transformation, message validation
- Using this middle end, when client sends a request we will be able to make decision which microservice should actually respond to this service.
- We will prepare an API Gateway for this middle end.


### Different Microservices
- Flight Booking Service 
`https://github.com/Anubhavgupta18/FlightBookingService` 
- Flight Search Service
`https://github.com/Anubhavgupta18/FlightSearchingService`
- Authentication Service 
`https://github.com/Anubhavgupta18/Auth-Service`
- Reminder Service 
`https://github.com/Anubhavgupta18/ReminderService`