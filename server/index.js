const express = require('express');

const app = express();
const mc = require('./controllers/messages_controller');
const PORT = 3001;

app.use(express.static(__dirname + '/../public/build'));
app.use(express.json());

// app.post(`http://localhost:${PORT}`, mc.create);
// app.get(`http://localhost:${PORT}`, mc.read);
// app.put(`http://localhost:${PORT}/:id`, mc.update);
// app.delete(`http://localhost:${PORT}/:id`, mc.delete);

app.post(`/api/messages`, mc.create);
app.get(`/api/messages`, mc.read);
app.put(`/api/messages/:id`, mc.update);
app.delete(`/api/messages/:id`, mc.delete);

// app.post(`http://localhost:${PORT}/api/messages/`, mc.create)
// app.get(`http://localhost:${PORT}/api/messages/`, mc.read);
// app.put(`http://localhost:${PORT}/api/messages/:id/`, mc.update);
// app.delete(`http://localhost:${PORT}/api/messages/:id/`, mc.delete);

app.listen(PORT, (req, res) => {
	console.log(`Now listening on ${PORT}`);
});
