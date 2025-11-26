import app from "./src/app.js";
import config from "./src/config/index.js";

const PORT = config.port || 5000;

// Para desarrollo local
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Environment: ${config.env}`);
  });
}

// Para Vercel (serverless)
export default app;