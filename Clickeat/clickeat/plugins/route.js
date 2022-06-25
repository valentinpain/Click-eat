export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        // console.log(to.name)
        // console.log(from.name)

        const check = true;

        if(to.name === 'index'){
            next();
        } else
            if(check && to.name !== 'index') {
                next();
            } else {
                return next({ name: "index"});
            }
    })
}