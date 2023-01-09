import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
createApp({
  data(){
    return {
      user:{
        username: 'christinachen149@gmail.com',
        //password: 'GnQBW6rCdc9fNwN',
        password: 'GnQBW6rCdc9',
      },
    }
  },
  methods: {
    login() {
      const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      axios.post(api, this.user).then((response) =>{
        const { token, expird } = response.data;
        //add cookie token
        //setting expired time
        document.cookie = `hexToken=${token};expird=${new Date(expird)};path=/`;
        window.location = 'products.html';
        console.log(res.data);
      }).catch((err) => {
        alert(err.response.data.message);
      });
    },
    check() {
      const api = 'https://vue3-course-api.hexschool.io/v2/api/user/check';
      axios.post(api).then((res) =>{
        console.log(res.data);
      }).catch((err) => {
        alert(err.response.data.message);
      });
    },
  },
}).mount('#app');


// const config = {
//   headers: { Authorization: token },
// };
// const url = "vue3-course-api.hexschool.io";

// const data = {
//   "username": "example@test.com",
//   "password": "example"
// }
// axios
//   .post('/v2/admin/signin', {}, config)
//   .then((res) => {
//     console.log(res.data);
//   }).catch((error) => {
//     console.log(error.response.data);
//   })
