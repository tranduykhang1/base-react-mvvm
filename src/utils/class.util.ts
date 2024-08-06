/* eslint-disable @typescript-eslint/no-explicit-any */
export class ClassUtils {
    private getAllProperties = (object: any) => {
        const properties = new Set<any>();

        do {
            for (const key of Reflect.ownKeys(object)) {
                properties.add([object, key]);
            }
        } while (
            (object = Reflect.getPrototypeOf(object)) &&
            object !== Object.prototype
        );

        return Array.from(properties);
    };

    autoBind<T>(
        self: T,
        {
            include,
            exclude,
        }: { include?: string[] | RegExp[]; exclude?: string[] | RegExp[] } = {}
    ): T {
        const filter = (key: string) => {
            const match = (pattern: string | RegExp) =>
                typeof pattern === "string"
                    ? key === pattern
                    : pattern.test(key);

            if (include) {
                return include.some(match);
            }

            if (exclude) {
                return !exclude.some(match);
            }

            return true;
        };

        for (const [object, key] of this.getAllProperties(
            self.constructor.prototype
        )) {
            if (key === "constructor" || !filter(key)) {
                continue;
            }

            const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
            if (descriptor && typeof descriptor.value === "function") {
                self[key] = self[key].bind(self);
            }
        }

        return self;
    }
}

export const classUtils = new ClassUtils();
