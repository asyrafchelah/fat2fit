# fat2fit

### GET /users

List all users, can be searched or sorted

**Query Params**

`name` - string, will fuzzy search using `LIKE '%name%'`
`group_id` - number, will match exactly

`sorting` - string, possible values are:
- name_asc
- name_desc
- age_asc

**Sample Response** 

```
[
    {
        "id": 65,
        "name": "John",
        "age": 28,
        "original weight": 65,
        "height" : 169,
        "group_id": null
    }
]
```
***

### POST /users

Create a single user

**Request Body**


```
 {
        "name": "asyraf",
        "age": 28,
        "original weight": 65,
        "height" : 169
}
```
**Sample Response**

```
 {
        "id": 66,
        "name": "asyraf",
        "age": 28,
        "original weight": 65,
        "height" : 169
}
```

***

### POST /groups

Create group

**Request Body**


```
 {
        "group_name": "fat2fit",
 }
```
**Sample Response**

```
 {
        "id": 2,
        "group_name": "fat2fit",
    
}
```

***

### UPDATE /user/{id}

Added user to specific group

**Request Body**

```
 {
        "group_id": 2
 }
```
**Sample Response**

```
 {
        "id": 66,
        "name": "asyraf",
        "age": 28,
        "original weight": 65,
        "height" : 169,
        "group_id": 2
    
}
```

***

### POST /users/{id}/records

Create records for specific user

**Request Body**

```
 {
        "week_num": 2, 
        "weight": 63 ,
        "water_intake":  3
        "food_list" : "nasi lemak",
        "calory_intake": 200,
        "exercise_list": "jogging,
        "calory_burn": 200,
 }
```
**Sample Response**

```
 {
        "id" : 1,
        "week_num": 2, 
        "weight": 63 ,
        "user_id": 66, 
        "water_intake":  3
        "food_list" : "nasi lemak",
        "calory_intake": 200,
        "exercise_list": "jogging,
        "calory_burn": 200,
        "updated_time" : ,
        "created_time" : "YYYY-MM-DD:HH:MM:SS",
 }

```

### UPDATE /user_id/records

Create records for specific user

**Request Body**

```
 {
        "week_num": 3, 
        "weight": 61 ,
        "water_intake":  3,
        "food_list" : "nasi lemak",
        "calory_intake": 200,
        "exercise_list": "jogging,
        "calory_burn": 200,
 }
```
**Sample Response**

```
 {
        "id" : 1,
        "week_num": 3, 
        "weight": 61 ,
        "user_id": 66, 
        "water_intake":  3,
        "food_list" : "nasi lemak",
        "calory_intake": 200,
        "exercise_list": "jogging,
        "calory_burn": 200,
        "updated_time" : ,
        "created_time" :,
 }

```

### GET /users/{id}/records

Display user weekly records

**Sample Response**

```
[
     {
        "id" : 1,
        "week_num": 2, 
        "weight": 63 ,
        "user_id": 66, 
        "water_intake":  3
        "food_list" : "nasi lemak",
        "calory_intake": 200,
        "exercise_list": "jogging,
        "calory_burn": 200,
        "updated_time" : ,
        "created_time" :,
 },

 {
        "id" : 2,
        "week_num": 3, 
        "weight": 61 ,
        "user_id": 66, 
        "water_intake":  3,
        "food_list" : "nasi lemak",
        "calory_intake": 200,
        "exercise_list": "jogging,
        "calory_burn": 200,
        "updated_time" : ,
        "created_time" :,
 }


]
 

```

