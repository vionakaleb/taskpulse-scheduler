export default {
  async scheduled(event, env, ctx) {
    const url = "https://taskpulse-bot-r5zy.onrender.com/health";
    try {
      await fetch(url);
    } catch (error) {
      console.error(`Health check failed: ${error}`);
    }
  },
};
