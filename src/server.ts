import app from "./app.ts";
import { Env } from "./config/env.ts";

const PORT = Env.PORT || 5000;

const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(
                `Server is running on port ${PORT}. Visit http://localhost:${PORT}/ to access the application.`,
            );
        });
    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
};

startServer();
