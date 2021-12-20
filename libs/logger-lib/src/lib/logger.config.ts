import { LogFormatterService } from './log-formatter.service';

export type LogFormatterServiceType = new () => LogFormatterService;

export abstract class LoggerConfig {
  enableDebug = false;
  logFormatterType?: LogFormatterServiceType;
}
