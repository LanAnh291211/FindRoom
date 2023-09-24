import { createRouter, createWebHistory } from 'vue-router';

import RoomDetail from './pages/rooms/RoomDetail.vue';
import RoomsList from './pages/rooms/RoomsList.vue';
import RoomRegistration from './pages/rooms/RoomRegistration.vue';
import ContactRoom from './pages/requests/ContactRoom.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/rooms' },
    { path: '/rooms', component: RoomsList },
    {
      path: '/rooms/:id',
      component: RoomDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactRoom } // /rooms/c1/contact
      ]
    },
    { path: '/register', component: RoomRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
