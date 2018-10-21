declare const com: any;

const FirebasePerformance = com.google.firebase.perf.FirebasePerformance;

export function startTrace(name: string): FirebaseTrace {
  const trace = FirebasePerformance.getInstance().newTrace(name);
  trace.start();
  return new FirebaseTrace(trace);
}

export class FirebaseTrace {
  constructor(private nativeTrace: any /* com.google.firebase.perf.metrics.Trace */) {
  }

  setValue(attribute: string, value: string): void {
    this.nativeTrace.putAttribute(attribute, value);
  }

  getValue(attribute: string): string {
    return this.nativeTrace.getAttribute(attribute);
  }

  // TODO this is a Java map I guess
  getAttributes(): Map<string, string> {
    return this.nativeTrace.getAttributes();
  }

  removeAttribute(attribute: string): void {
    this.nativeTrace.removeAttribute(attribute);
  }

  incrementMetric(metric: string, by: number): void {
    this.nativeTrace.incrementMetric(metric, by);
  }

  stop(): void {
    this.nativeTrace.stop();
  }
}
