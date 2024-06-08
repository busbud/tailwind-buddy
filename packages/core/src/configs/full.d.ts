export declare const defaultConfiguration: {
    slots: {
        root: string;
        cat: string;
    };
    variants: {
        color: {
            default: string;
            values: {
                primary: {
                    root: string;
                    cat: string;
                };
                secondary: {
                    root: string;
                };
                success: {
                    root: string;
                    cat: string;
                };
            };
        };
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
            color: string[];
            disabled: boolean;
        };
        class: {
            root: string;
            cat: string;
        };
    }[];
};
export declare const smallConfiguration: {
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
export declare const full: () => any;
export declare const fullWithoutTwMerge: () => any;
export declare const fullWithResponsive: () => any;
