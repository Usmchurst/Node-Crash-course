const http = reuire('http');
const path = reuire('path');
const fs = reuire('fs');

const server = http.createServer((req, res) => {
console.log(req.url)

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on port ${PORT}'));
