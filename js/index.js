import { Router } from './router.js'

const router = new Router()
router.addRoutes("/", "/pages/home.html")
router.addRoutes("/universe", "/pages/universe.html")
router.addRoutes("/exploration", "/pages/exploration.html")
router.addRoutes(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle();
window.route = () => router.route()