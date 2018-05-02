apt - a simple MERN appointment app

to run
`cd client`
`npm install`
`cd ./`
`npm install`
`yarn dev`

### frontend

In lieu of flux/Redux (after 3 attempts), I did try to use some of the great new flux-y type features in in React 16.3 like context for existing appointments & a portal for the modal.

The context API acts very much like a store & provides to nested children. Portals also offer a way to circumvent the traditional one-way dataflow too. I hope these are acceptable substitutes to traditional flux implementations.

###backend
db/db.js= contains mongoose schema if a Mongodb database was to be added later

server.js = contains all endpoints & node port

appts.json = mock data for endpoints
