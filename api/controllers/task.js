const { db } = require("../utils/db");

const getTasks = (req, res) => {
    const query = "SELECT * FROM task";
    db.query(query, (err, data) => {
        if (err) return res.status(500).json(err.stack);
        if (data.rows.length === 0)
            return res.status(404).json("No hay ninguna tarea");

        return res.status(200).json(data.rows);
    });
};

const addTask = (req, res) => {
    const { body } = req;

    const values = [body.task, body.active];
    const query = "INSERT INTO task (task, active) VALUES($1, $2)";

    db.query(query, values, (err, data) => {
        if (err) return res.status(500).json(err.stack);
        return res.status(200).json("Tarea agregada correctamente");
    });
};

const updateTask = (req, res) => {
    const { body } = req;

    const values = [body.task, body.active, body.id];

    console.log(values);
    const query =
        "UPDATE task SET task = $1, active = $2 WHERE id = $3 RETURNING *";
    db.query(query, values, (err, data) => {
        if (err) return res.status(500).json(err.stack);
        return res.status(200).json(data.rows[0]);
    });
};

const removeTask = (req, res) => {
    const {
        params: { id },
    } = req;

    const query = "DELETE FROM task WHERE id = $1";

    db.query(query, [id], (err, data) => {
        if (err) return res.status(500).json(err.stack);
        return res.status(204).end();
    });
};

module.exports = { getTasks, addTask, updateTask, removeTask };
