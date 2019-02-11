
    // component will go here
    let videocomponent = {//组件名不能为大写
        template: `<div>
        <h2 id="videotitle">this is video page</h2>
        <video width="100%"  controls >
           <source :src="'video/'+ midterm_video">
         </video>
        
        </div>`,
        //should be a function for component's data
         data(){return {midterm_video:""}},
         created:function(){this.fetchVideoData();},
         methods:{
            fetchVideoData() {
                url = './admin/scripts/index.php';

                fetch(url) 
                .then(res => res.json())
                .then(result => {
                    this.midterm_video=result.midterm_video;
                    document.querySelector('video').load(); 
                    })
                .catch(function(error) {
                    console.log(error);
                });
            }}
    };



    let signupcomponent = {template:`<div>
        <h2>Sign up form</h2>
        <form action="admin/signned_up_page.php"  method="post">
    <fieldset style="width: 250px;"><br>        
       <label>First Name:</label>
         <input v-model="input.firstname" type="text" name="firstname"  required><br><br>

         <label>Last Name:</label>
         <input v-model="input.lastname" type="text" name="lastname" required ><br><br>  

         <label>Email:</label>
         <input v-model="input.email" type="email" name="email" required ><br><br>  

         <label>Country:</label>
         <input v-model="input.country" type="text" name="country" required ><br><br>  
    </fieldset>
        <br>
        <button type="submit" >Go!</button>
        
    </form>
   </div>`,

         data() {return {input: {firstname: "", lastname: "", email:"",country:""}}},
         methods:{
            // signin(){
            //     console.log("trying to sign in");
            //     let formData = new FormData();
            //     formData.append("firstname", this.input.firstname);
            //     formData.append("lastname", this.input.lastname);
            //     formData.append("email", this.input.email);
            //     formData.append("country", this.input.country);

            //      let url = `./admin/signned_up_page.php`;
            //      fetch(url, {method: 'POST',body: formData})
            //      .then(res => res.json())
            //      .then(data =>{})
            //      .catch(function(error){console.error(error);}
            // }
        }


      };

    let homecomponent = {template:"<h2>home page !! hahah</h2>"};
    let pricecomponent = {template:`<div>
           <ul>
          <li v-for="(item,index) in price">{{index+1}}.{{item.title}}
              <ul>
               <li v-for="(c,childIndex) in item.subtitle">{{index+1}}.{{childIndex+1}}.{{c}}</li>
               <li v-for="(c,childIndex) in item.text">{{index+1}}.{{childIndex+1}}.{{c}}</li>
              </ul>
            </li>
            
        </ul>
        
        
        
        </div>`,
        data(){return {
            price:[{title:'v', subtitle:['subtitle1'],text:['textexte11']},
            {title:'pm', subtitle:['iiiiiii'],text:['vtextetxte22']},
            {title:'de', subtitle:['hhhhhhhhhh'],text:['texttexte3']}],
             }},
      

    };



    //path 映射表
    let routes =[
       {path:"/video", component:videocomponent},
       {path:'/signup', component:signupcomponent},
       {path:'/home', component:homecomponent},
       {path:'/price', component:pricecomponent},
       



    ];


//引入Vue-router 自带vueRouter类
    let router = new VueRouter({
    //mode:'history', //h5
    routes,
    linkActiveClass:'active'//change default class name （router-link-active)

    });




    let vm = new Vue({
        el: '#app',
        //components:{videocomponent,logincomponent,homecomponent },

        data: {
            msg: "hahahahah!"
        },

        created: function() {
            
        },

        methods: {
          
        },

      //把component path 注入到vm里
         router: router 
    });
