type Address = { address: string; city: string };
type PresentDeliveryList<T extends Record<string, unknown>> = { [K in keyof T]: Address };
