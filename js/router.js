export class Router {
  routes = {} //objeto vazio 
  
  addRoutes(routeName, linkPage){
    this.routes[routeName] = linkPage
  }
  
  route(event) {
    event = event || windows.event //se event não for definido, buscar do window
    event.preventDefault() //não faça o padrão

    window.history.pushState({}, "", event.target.href)
    this.handle()
  }

  handle(){
    const { pathname } = window.location
    //console.log(pathname)
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }
}