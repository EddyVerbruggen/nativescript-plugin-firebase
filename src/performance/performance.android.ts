export function startTrace(name: string): FirebaseTrace {
  const trace = com.google.firebase.perf.FirebasePerformance.getInstance().newTrace(name);
  trace.start();
  return new FirebaseTrace(trace);
}

export class FirebaseTrace {
  constructor(private nativeTrace: com.google.firebase.perf.metrics.Trace) {
  }

  setValue(attribute: string, value: string): void {
    this.nativeTrace.putAttribute(attribute, value);
  }

  getValue(attribute: string): string {
    return this.nativeTrace.getAttribute(attribute);
  }

  getAttributes(): { [field: string]: any } {
    const attributes = this.nativeTrace.getAttributes();
    const node = {};
    const iterator = attributes.entrySet().iterator();
    while (iterator.hasNext()) {
      const item = iterator.next();
      node[item.getKey()] = item.getValue();
    }
    return node;
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
