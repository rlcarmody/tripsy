## User Endpoints

POST - `/api/users/create`

**Creates a new user**

*Example Request Body*

```javascript
{
  displayName: 'Chuck Norris',
  email: 'roundhouse@kick.edu'
}
```

The response will redirect to `/trips` and store a cookie with the UserID

POST - `/api/users/login`

**Login existing user**

At the moment, only email address is required:

```javascript
{
  email: 'roundhouse@kick.edu'
}
```

The response is the same as user creation

## Trip Endpoints

POST - `/api/trips`

**Creates a new trip**

*Example Request Body*

Coordinates are not required, but ideally we can geocode the location before submitting the request.

```json
{
	"name": "River Adventure",
	"location": "John Day",
	"description": "can be empty",
	"coordinates": [44.4160, 118.9530],
	"startDate": 1560571839669,
	"endDate": 1560658412371
}
```

The signed in user will be assigned as the organizer

*Example Response*

```json
{
    "coordinates": [
        44.416,
        118.953
    ],
    "members": [],
    "createdDate": "2019-06-15T04:08:15.202Z",
    "_id": "5d047079e5497804c0b3ca1d",
    "name": "River Adventure",
    "location": "John Day",
    "description": "can be empty",
    "startDate": "2019-06-15T04:10:39.669Z",
    "endDate": "2019-06-16T04:13:32.371Z",
    "organizer": "5d046787e7dbcd1a84d6ff7a",
    "__v": 0
}
```

GET `/api/trips`

**Gets the trips of the signed in user**

*Example Response*

```json
{
    "trips": [
        {
            "coordinates": [
                44.416,
                118.953
            ],
            "members": [
                "5d046787e7dbcd1a84d6ff7a"
            ],
            "createdDate": "2019-06-15T04:31:20.368Z",
            "_id": "5d0474a2a2269d0108ed0288",
            "name": "River Adventure",
            "location": "John Day",
            "description": "can be empty",
            "startDate": "2019-06-15T04:10:39.669Z",
            "endDate": "2019-06-16T04:13:32.371Z",
            "organizer": "5d046787e7dbcd1a84d6ff7a",
            "__v": 0
        }
    ],
    "_id": "5d046787e7dbcd1a84d6ff7a",
    "displayName": "Chuck Norris"
}
```

GET `/api/trips/tripID/<tripID>`

**Gets the details of one trip**

*Example Response*

```json
{
    "coordinates": [
        44.416,
        118.953
    ],
    "members": [
        {
            "_id": "5d046787e7dbcd1a84d6ff7a",
            "displayName": "Chuck Norris"
        }
    ],
    "createdDate": "2019-06-15T04:31:20.368Z",
    "_id": "5d0474a2a2269d0108ed0288",
    "name": "River Adventure",
    "location": "John Day",
    "description": "can be empty",
    "startDate": "2019-06-15T04:10:39.669Z",
    "endDate": "2019-06-16T04:13:32.371Z",
    "organizer": "5d046787e7dbcd1a84d6ff7a",
    "__v": 0
}
```
## Invitations Endpoints

POST - `/api/trips/invite?tripID=<tripID>`

**Creates invitations from an array of email addresses**

*Example Request Body*

```json
{
	"email": ["keanu@heplayedted.com", "john@doe.com"]
}
```

*Example Response*

```json
[
    {
        "expiration": "2019-06-18T14:04:24.659Z",
        "_id": "5d04faec0531d311788e7a0b",
        "email": "keanu@heplayedted.com",
        "tripID": "5d0474a2a2269d0108ed0288",
        "__v": 0
    },
    {
        "expiration": "2019-06-18T14:04:24.659Z",
        "_id": "5d04faec0531d311788e7a0c",
        "email": "john@doe.com",
        "tripID": "5d0474a2a2269d0108ed0288",
        "__v": 0
    }
]
```

PUT - `/api/trips/invite?tripID=<tripID>`

**Accepts an invitation. Requires a signed in user**

*Body not required. The userID is grabbed from the cookie and is inserted into the members array on the Trip document*

GET - `/api/invitation/<inviteID>`

**Finds an invitation record**

*Example Response*

```json
{
    "expiration": "2019-06-18T14:04:24.659Z",
    "_id": "5d04faec0531d311788e7a0c",
    "email": "john@doe.com",
    "tripID": {
        "_id": "5d0474a2a2269d0108ed0288",
        "name": "River Adventure",
        "location": "John Day",
        "description": "can be empty",
        "startDate": "2019-06-15T04:10:39.669Z",
        "endDate": "2019-06-16T04:13:32.371Z",
        "organizer": {
            "_id": "5d046787e7dbcd1a84d6ff7a",
            "displayName": "Chuck Norris"
        }
    },
    "__v": 0
}
```

## Supplies Endpoints

POST - `/api/trips/supplies?tripID=<tripID>`

**Adds supply items from an array to a trip**

*Example Request Body*

```json
{
	"supplies": ["booze", "food", "toilet paper"]
}
```

*Example Response*

```json
[
    {
        "claimed": false,
        "_id": "5d04ff52962c1338903a2089",
        "name": "booze",
        "tripID": "5d0474a2a2269d0108ed0288",
        "__v": 0
    },
    {
        "claimed": false,
        "_id": "5d04ff52962c1338903a208a",
        "name": "food",
        "tripID": "5d0474a2a2269d0108ed0288",
        "__v": 0
    },
    {
        "claimed": false,
        "_id": "5d04ff52962c1338903a208b",
        "name": "toilet paper",
        "tripID": "5d0474a2a2269d0108ed0288",
        "__v": 0
    }
]
```
GET - `/api/trips/supplies?tripID=<tripID>`

**Retrieves all the supply items related to the trip**

*Example response*

```json
[
    {
        "claimed": true,
        "_id": "5d0504bfcbdaa118d4576734",
        "name": "booze",
        "tripID": "5d0502eee494033864deeaca",
        "__v": 0,
        "claimedBy": {
            "_id": "5d04fcb90531d311788e7a0d",
            "displayName": "Keanu Reeves"
        }
    },
    {
        "claimed": false,
        "_id": "5d0504bfcbdaa118d4576735",
        "name": "food",
        "tripID": "5d0502eee494033864deeaca",
        "__v": 0
    },
    {
        "claimed": false,
        "_id": "5d0504bfcbdaa118d4576736",
        "name": "toilet paper",
        "tripID": "5d0502eee494033864deeaca",
        "__v": 0
    }
]
```

PUT - `/api/trips/supplies?supplyItemID=<supplyItemID>`

**Assigns that item to the current user**

*Example Response*

```json
{
    "claimed": false,
    "_id": "5d0504bfcbdaa118d4576734",
    "name": "booze",
    "tripID": "5d0502eee494033864deeaca",
    "__v": 0
}
```

## Ride Endpoints

POST - `/api/rides`

**Creates a new ride**

*Example Request Body*

```json
{
	"tripID": "5d0502eee494033864deeaca",
	"availableSeats": 3,
	"departureDate": 1560698376955,
	"vehicleType": "car"
}
```

*Example Response*

```json
{
    "riders": [],
    "_id": "5d050d9ac1bb7a20bcc5f11f",
    "tripID": "5d0502eee494033864deeaca",
    "availableSeats": 3,
    "departureDate": "2019-06-16T15:19:36.955Z",
    "vehicleType": "car",
    "provider": "5d04fcb90531d311788e7a0d",
    "__v": 0
}
```

GET - `/api/rides?tripID=<tripID>`

**Returns all rides related to a trip**

*Example Response*

```json
[
    {
        "riders": [],
        "_id": "5d050d9ac1bb7a20bcc5f11f",
        "tripID": "5d0502eee494033864deeaca",
        "availableSeats": 3,
        "departureDate": "2019-06-16T15:19:36.955Z",
        "vehicleType": "car",
        "provider": {
            "_id": "5d04fcb90531d311788e7a0d",
            "displayName": "Keanu Reeves"
        },
        "__v": 0
    }
]
```

PUT - `/api/rides?rideID=<rideID>`

**Claims one of the available seats for a ride**

*Example Response*

```json
{
    "riders": [],
    "_id": "5d050d9ac1bb7a20bcc5f11f",
    "tripID": "5d0502eee494033864deeaca",
    "availableSeats": 3,
    "departureDate": "2019-06-16T15:19:36.955Z",
    "vehicleType": "car",
    "provider": "5d04fcb90531d311788e7a0d",
    "__v": 0
}
```

## Message Endpoints

POST - `/api/messages`

**Creates a new message**

*Example Request Body*

```json
{
	"messageBody": "hello there",
	"tripID": "5d0502eee494033864deeaca"
}
```

*Example Response*

```json
{
    "createdDate": "2019-06-15T15:47:30.451Z",
    "_id": "5d0513208492920a18f26c9f",
    "userID": "5d04fcb90531d311788e7a0d",
    "messageBody": "hello there",
    "tripID": "5d0502eee494033864deeaca",
    "__v": 0
}
```

GET - `/api/messages?tripID=<tripID>`

**Gets all messages related to a trip**

*Example Response*

```json
[
    {
        "createdDate": "2019-06-15T15:47:30.451Z",
        "_id": "5d0513208492920a18f26c9f",
        "userID": {
            "_id": "5d04fcb90531d311788e7a0d",
            "displayName": "Keanu Reeves"
        },
        "messageBody": "hello there",
        "tripID": "5d0502eee494033864deeaca",
        "__v": 0
    }
]
```
