import app from "./app.ts";
import { Env } from "./config/env.ts";
import logger from "./config/logger.ts";

const PORT = Env.PORT || 5000;

const startServer = () => {
    try {
        app.listen(PORT, () => {
            logger.error("Random");
            logger.info(
                `Server is running on port ${PORT}. Visit http://localhost:${PORT}/ to access the application.`,
                {
                    port: PORT,
                    env: Env.NODE_ENV,
                },
            );
        });
    } catch (error) {
        logger.error("Error starting the server:", error);
        process.exit(1);
    }
};

startServer();
