### Services

On this folder are stored all our API calls.

We use [apisauce](https://github.com/skellock/apisauce) to create them.

It's easy: 

```
// showLastCommitMessageForThisLibrary.js
import {create} from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://api.github.com',
  headers: {'Accept': 'application/vnd.github.v3+json'}
})

// start making calls
api
  .get('/repos/skellock/apisauce/commits')
  .then((response) => response.data[0].commit.message)
  .then(console.log)

// customizing headers per-request
api.post('/users', {name: 'steve'}, {headers: {'x-gigawatts': '1.21'}})
```