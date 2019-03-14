import { firebaseUtils } from "../utils";

export function startTrace(name: string): FirebaseTrace {
  return new FirebaseTrace(FIRPerformance.startTraceWithName(name));
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
