export declare class FirebaseTrace {
  setValue(attribute: string, value: string): void;

  getValue(attribute: string): string;

  getAttributes(): { [field: string]: any };

  removeAttribute(attribute: string): void;

  incrementMetric(metric: string, by: number): void;

  stop(): void;
}

export declare function startTrace(name: string): FirebaseTrace;

export declare class FirebaseHttpMetric {
  setRequestPayloadSize(size: number): void;

  setHttpResponseCode(responseCode: number): void;

  stop(): void;
}

export declare function startHttpMetric(url: string, method: string): FirebaseHttpMetric;