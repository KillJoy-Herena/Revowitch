class Router {
//contructor
constructor (paths) {
    this.paths = paths
    initRouter()
}
// metodo iniciar router
initRouter() {
    const { 
        location: {pathname = '/' }
} = window
const URI = pathname === '/' ? 'about' : pathname.replace('/', '')
this.load(URI)
}
//metodo para cargar las vistas
load(page = 'about'){
    const { paths } =this
    const { path, template } = paths[page] || paths.error
    const $CONTAINER = document.querySelector('#root')
    window.history.pushState({},'done', path)
}
}