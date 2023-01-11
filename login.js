import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';
//Base URL: vue3-course-api.hexschool.io/
const url = 'https://vue3-course-api.hexschool.io/v2';
createApp({
  data(){
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      axios.post(`${url}/admin/signin`, this.user).then((response) => {
        const { token, expired } = response.data;
        //add cookie token
        //setting expired time
        document.cookie = `hexToken=${token};expires=${new Date(expired)};path=/`;
        //add header
        axios.defaults.headers.common['Authorization'] = token;
        window.location = 'products.html';
        console.log(res.data);
      }).catch((err) => {
        alert(err.response.data.message);
      });
    },
    // check() {
    //   const api = 'https://vue3-course-api.hexschool.io/v2/api/user/check';
    //   axios.post(api).then((res) =>{
    //     console.log(res.data);
    //   }).catch((err) => {
    //     alert(err.response.data.message);
    //   });
    // },
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
