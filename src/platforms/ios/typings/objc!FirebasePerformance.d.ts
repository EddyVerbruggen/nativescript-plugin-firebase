
declare const enum FIRHTTPMethod {

	GET = 0,

	PUT = 1,

	POST = 2,

	DELETE = 3,

	HEAD = 4,

	PATCH = 5,

	OPTIONS = 6,

	TRACE = 7,

	CONNECT = 8
}

declare class FIRHTTPMetric extends NSObject implements FIRPerformanceAttributable {

	static alloc(): FIRHTTPMetric; // inherited from NSObject

	static new(): FIRHTTPMetric; // inherited from NSObject

	requestPayloadSize: number;

	responseCode: number;

	responseContentType: string;

	responsePayloadSize: number;

	readonly attributes: NSDictionary<string, string>; // inherited from FIRPerformanceAttributable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; HTTPMethod: FIRHTTPMethod; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURLHTTPMethod(URL: NSURL, httpMethod: FIRHTTPMethod): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAttribute(attribute: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setValueForAttribute(value: string, attribute: string): void;

	start(): void;

	stop(): void;

	valueForAttribute(attribute: string): string;
}

declare class FIRPerformance extends NSObject {

	static alloc(): FIRPerformance; // inherited from NSObject

	static new(): FIRPerformance; // inherited from NSObject

	static sharedInstance(): FIRPerformance;

	static startTraceWithName(name: string): FIRTrace;

	dataCollectionEnabled: boolean;

	instrumentationEnabled: boolean;

	traceWithName(name: string): FIRTrace;
}

interface FIRPerformanceAttributable extends NSObjectProtocol {

	attributes: NSDictionary<string, string>;

	removeAttribute(attribute: string): void;

	setValueForAttribute(value: string, attribute: string): void;

	valueForAttribute(attribute: string): string;
}
declare var FIRPerformanceAttributable: {

	prototype: FIRPerformanceAttributable;
};

declare class FIRTrace extends NSObject implements FIRPerformanceAttributable {

	static alloc(): FIRTrace; // inherited from NSObject

	static new(): FIRTrace; // inherited from NSObject

	readonly name: string;

	readonly attributes: NSDictionary<string, string>; // inherited from FIRPerformanceAttributable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	incrementMetricByInt(metricName: string, incrementValue: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAttribute(attribute: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setIntValueForMetric(value: number, metricName: string): void;

	setValueForAttribute(value: string, attribute: string): void;

	start(): void;

	stop(): void;

	valueForAttribute(attribute: string): string;

	valueForIntMetric(metricName: string): number;
}
