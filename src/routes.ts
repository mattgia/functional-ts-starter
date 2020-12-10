
type Example = {
    readonly hello: string
};

export const routeHandler = (param: string): Example  => ({
    hello: param
})