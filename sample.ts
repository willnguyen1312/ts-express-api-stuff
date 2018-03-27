import "isomorphic-fetch";

fetch("http://localhost:3000/")
  .then(res => res.json())
  .then(console.log);
