import { InjectionToken } from "@angular/core";
import { LogLevel } from "./log-level";
// provide의 key값을 문자열 그대로 사용하는것은 위험 따라서 InjectionToken을 사용하는걸 권장
// 문자열 전달해주면 특정 token값으로 변경해줌
export const LOG_LEVEL_TOKEN = new InjectionToken<LogLevel>('logLevel');