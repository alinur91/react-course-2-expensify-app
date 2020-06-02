const path = require('path')
const express= require('express')
var app = express() /* create a new instance of express */
const publicPath = path.join(__dirname,'..', 'public')
const port = process.env.PORT || 3000

/*heroku isn't going to know how to start up our app  */

//At this point we now have an express app,we have to customize it,
//we have to tell where our files live and we also have to tell it what port it should listen on

//serve up public folder inside of it.Nastroit server,zaregestrirovat middleware,
//middleware is smth that runs for each request,if someone makes a request to the server we might want to run some code that logs something to the screen

app.use(express.static(publicPath)) //we want to whatever comeback from express.static() to the app.use()

/*Run some function when someone makes a get request to our server   */
/* all unmatched routes,If it is in public folder great!We'll serve that up.If its not we're going to serve up the same thing every single time */
app.get('*', (req,res)=>{ /* process all of the unhandled request */
/* send back the index.html in the public directory*/
/* req object contains some information about the request */
/* response object lets you manipulate response your express server makes to whoever made the http request */
    res.sendFile(path.join(publicPath, 'index.html'))
/* this makes sure that the app works regardless of what page the
user enters on  */
})

//start up the server
/* heroku provides with environment variables */
app.listen(port, ()=>{
    console.log('server is up')
})


//There is no create file or folder inside of public
// we need to serve up index.html for all files that don't have a match

/* When we create app when we customoize them when we push our code
all that happens via the Heroku CLI */