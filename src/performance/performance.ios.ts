import { firebaseUtils } from "../utils";

export function startTrace(name: string): FirebaseTrace {
  return new FirebaseTrace(FIRPerformance.startTraceWithName(name));
}

export function startHttpMetric(url: string, method: string) {
  const httpMetric = FIRHTTPMetric.alloc().initWithURLHTTPMethod(NSURL.URLWithString(url), getHttpMethodFromString(method));
  httpMetric.start();
  return new FirebaseHttpMetric(httpMetric);
}

export class FirebaseTrace {
  constructor(private nativeTrace: FIRTrace) {
  }

  setValue(attribute: string, value: string): void {
    this.nativeTrace.setValueForAttribute(value, attribute);
  }

  getValue(attribute: string): string {
    return this.nativeTrace.valueForAttribute(attribute);
  }

  getAttributes(): { [field: string]: any } {
    return firebaseUtils.toJsObject(this.nativeTrace.attributes);
  }

  removeAttribute(attribute: string): void {
    this.nativeTrace.removeAttribute(attribute);
  }

  incrementMetric(metric: string, by: number): void {
    this.nativeTrace.incrementMetricByInt(metric, by);
  }

  stop(): void {
    this.nativeTrace.stop();
  }
}

export class FirebaseHttpMetric {
  constructor(private nativeHttpMetric: FIRHTTPMetric) {
  }

  setRequestPayloadSize(size: number) {
    this.nativeHttpMetric.requestPayloadSize = size;
  }

  setHttpResponseCode(responseCode: number) {
    this.nativeHttpMetric.responseCode = responseCode;
  }

  stop(): void {
    this.nativeHttpMetric.stop();
  }
}

function getHttpMethodFromString(method: string): FIRHTTPMethod {
  switch (method) {
    case 'GET':
      return FIRHTTPMethod.GET;
    case 'PUT':
      return FIRHTTPMethod.PUT;
    case 'POST':
      return FIRHTTPMethod.POST;
    case 'DELETE':
      return FIRHTTPMethod.DELETE;
    case 'HEAD':
      return FIRHTTPMethod.HEAD;
    case 'PATCH':
      return FIRHTTPMethod.PATCH;
    case 'OPTIONS':
      return FIRHTTPMethod.OPTIONS;
    default:
      return null;
  }
}