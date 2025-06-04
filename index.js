import { request, response } from "express";

/*
TRATAMENTOS DE ERROS (TRY & CATCH)
*/

const users = []

app.post("/usuarios", (request, response) => {
    try {
        const { name, age } = request.body;

        const user = { id: uuid.v4(), name, age };

        users.push(user);

        return response.status(201).json(user);
    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error" });
    } finally {
        console.log("terminou tudo") //só é executado quando terminar o try e o catch (é opcional em uma aplicação)
    }
});
