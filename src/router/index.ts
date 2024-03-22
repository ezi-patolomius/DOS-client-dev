import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { RouteNames } from "@enums";
import { useCookies } from "@vueuse/integrations/useCookies";

const cookies = useCookies();

const HomePage = () => import("@views/Index.vue");
const PageNotFound = () => import("@views/page-not-found/404.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/",
    name: RouteNames.ROOT,
    meta: { title: "DOS Gaming" },
    children: [
      {
        path: "/",
        name: RouteNames.HOMEPAGE,
        component: HomePage,
        meta: {
          title: "DOS Gaming - Home",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: RouteNames.PAGE_NOT_FOUND,
    component: PageNotFound,
    meta: { title: "404 Oops. Page not found!" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0 };
  },
  routes,
});

router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string;

  if (title) {
    document.title = title;
  }

  next();
});

export default router;
