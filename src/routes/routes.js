/* LAYOUTS */
import App from '../layouts/App/App'
import Page from '../layouts/Page/Page'

/* PAGES */
import Login from "../containers/login";
import Signup from "../containers/signup";
import Home from "../containers/home";
import Widgets from "../containers/widgets";

import Authorize from "./Authorize"

const User = Authorize(false, ['USER']);

const routes = [
    { path: "/", name: "Home", mini: "HP", component: Home, layout: App },
    { path: "/signup", name: "Signup Page", mini: "SP", component: Signup, layout: Page  },
    { path: "/login", name: "Login Page", mini: "LP", component: Login, layout: Page  },
    { path: "/widgets", name: "Widgets Page", mini: "WP", component: User(Widgets), layout: App  }
];

export default routes;