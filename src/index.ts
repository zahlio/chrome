import { BrowserlessServer } from './browserless';
import * as config from './config';

const browserless = new BrowserlessServer({
  chromeRefreshTime: config.CHROME_REFRESH_TIME,
  connectionTimeout: config.CONNECTION_TIMEOUT,
  demoMode: config.DEMO_MODE,
  disabledFeatures: config.DISABLED_FEATURES,
  enableAPIGet: config.ENABLE_API_GET,
  enableCors: config.ENABLE_CORS,
  enableHeapdump: config.ENABLE_HEAP_DUMP,
  errorAlertURL: config.ERROR_ALERT_URL,
  exitOnHealthFailure: config.EXIT_ON_HEALTH_FAILURE,
  functionBuiltIns: config.FUNCTION_BUILT_INS,
  functionEnableIncognitoMode: config.FUNCTION_ENABLE_INCOGNITO_MODE,
  functionExternals: config.FUNCTION_EXTERNALS,
  healthFailureURL: config.FAILED_HEALTH_URL,
  sessionCheckFailURL: config.SESSION_CHECK_FAIL_URL,
  host: config.HOST,
  keepAlive: config.KEEP_ALIVE,
  maxCPU: config.MAX_CPU_PERCENT,
  maxConcurrentSessions: config.MAX_CONCURRENT_SESSIONS,
  maxMemory: config.MAX_MEMORY_PERCENT,
  maxQueueLength: config.QUEUE_LENGTH + config.MAX_CONCURRENT_SESSIONS,
  metricsJSONPath: config.METRICS_JSON_PATH,
  port: config.PORT,
  prebootChrome: config.PREBOOT_CHROME,
  prebootChromeCleanup: config.PREBOOT_CHROME_CLEANUP,
  prebootChromeIgnoreArgs: config.PREBOOT_CHROME_IGNORE_ARGS,
  prebootChromeRefreshTimeoutStart: config.PREBOOT_CHROME_REFRESH_TIMEOUT_START,
  prebootChromeRefreshTimeoutEnd: config.PREBOOT_CHROME_REFRESH_TIMEOUT_END,
  queuedAlertURL: config.QUEUE_ALERT_URL,
  rejectAlertURL: config.REJECT_ALERT_URL,
  singleRun: config.SINGLE_RUN,
  timeoutAlertURL: config.TIMEOUT_ALERT_URL,
  token: config.TOKEN,
  workspaceDir: config.WORKSPACE_DIR,
  socketBehavior: config.SOCKET_CLOSE_METHOD,
});

browserless.startServer();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

if (module.parent) {
  module.exports.browserless = browserless;
}
