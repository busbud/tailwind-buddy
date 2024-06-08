export declare const commonConfiguration: {
    slots: {
        root: string;
    };
    variants: {
        color: {
            default: string;
            values: {
                secondary: {
                    root: string;
                };
            };
        };
    };
    compoundVariants: {
        conditions: {
            color: string[];
        };
        class: {
            root: string;
        };
    }[];
};
export declare const extendedConfiguration: {
    slots: {
        root: string;
        cat: string;
    };
    variants: {
        disabled: {
            default: string;
            values: {
                true: {
                    root: string;
                };
                false: {
                    cat: string;
                };
            };
        };
    };
    compoundVariants: {
        conditions: {
            disabled: boolean;
        };
        class: string;
    }[];
};
