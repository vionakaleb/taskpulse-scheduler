export default {
  async scheduled(event, env, ctx) {
    const taskpulseUrl = "https://taskpulse-bot-r5zy.onrender.com/health";
    const resumeUrl =
      "https://resume-profiler-api.onrender.com/users/vionakaleb/public";

    let url;

    switch (event.cron) {
      case "*/14 * * * *":
        url = taskpulseUrl;
        break;
      case "0 0 */6 * *":
        url = resumeUrl;
        break;
      default:
        console.warn(`Unknown cron expression: ${event.cron}`);
        return;
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      console.log(`Health check succeeded: ${url}`);
    } catch (error) {
      console.error(`Health check failed for ${url}:`, error);
    }
  },
};
