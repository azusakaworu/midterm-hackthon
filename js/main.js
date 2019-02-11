
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
                url = './admin/index.php';

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
        
    <div class="container">
    <div class="row">
    <div class="col">
        <img src="images/signup.jpg" style="width:400px"></div>
<div class="col">
        <form action="admin/signned_up_page.php"  method="post">
        <h2>Let’s Get Started!</h2>
    <fieldset style="width: 250px;"><br>        
       <label>First Name:</label>
         <input v-model="input.firstname" type="text" name="firstname"  required class="form-control">

         <label>Last Name:</label>
         <input v-model="input.lastname" type="text" name="lastname" required class="form-control">

         <label>Email:</label>
         <input v-model="input.email" type="email" name="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" > 

         <label>Country:</label>
         <input v-model="input.country" type="text" name="country" required class="form-control">  
    </fieldset>
        <br>
        <button type="submit" class="btn  btn-secondary btn-lg">Go!</button>
        
    </form></div>
    </div></div>
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


    let homecomponent = {template:`<div>
        

        <img src="images/banner.jpg" style="width: 1300px">
        <p id="homeP" class="lead">Find Yourself At Home</p>
       

<div class="container">
  <div class="row">
 <div class="col">
<img src="images/map.jpg" style="width: 600px"></div>
 <div class="col">
        <h3>Ontario</h3>
        <p id="mapText">Ontario  is one of the 13 provinces and territories of 
Canada and is located in east-central Canada 
It is Canada's most populous province accounting for 
38.3 percent of the country's population, and is the 
second-largest province in total area. Ontario is 
fourth-largest in total area when the territories of the 
Northwest Territories and Nunavut are included.
It is home to the nation's capital city, Ottawa, and the 
nation's most populous city, Toronto,which is also 
Ontario's provincial capital.</p></div>

</div></div>

 <div class="container">
  <div class="row justify-content-md-center">
      <div class="col-md-auto">
       <h2> Interesting Blog </h2><br><br>
    </div></div></div>

    <div class="container">
  <div class="row">
  <div class="col">
   <p>Admit it. Before you took that 
first cruise, your thoughts about 
cruise ships and cruise vacations 
consisted of flashbacks to 
love Ontario. Cruising</p>
<button type="button" class="btn btn-secondary">See More</button>
  </div>
    <div class="col"><img src="images/b_c.jpg" width="200px"></div>
    <div class="col"><img src="images/b_h.jpg" width="200px"></div>
    <div class="col"><img src="images/b_f.jpg" width="200px"></div>
  </div></div>

   
    </div>`};



    let blogcomponent = {template:`<div>
           <ul>
          <li v-for="(item,index) in price">{{index+1}}.{{item.title}}
              <ul>
               <li v-for="(c,childIndex) in item.subtitle">{{index+1}}.{{childIndex+1}}.{{c}}</li>
               <li v-for="(c,childIndex) in item.text">{{index+1}}.{{childIndex+1}}.{{c}}</li>
              </ul>
            </li>
            
        </ul>

<div class="container">
  <div class="row justify-content-md-center">
      <div class="col-md-auto">

       <h2> Beautiful Destinations</h2><br><br>
    </div>

  </div></div>

<div class="container" >
  <div class="row">
     <div class="col-sm">
        <div class="card" style="width: 18rem;">
        <img src="images/cn.jpg" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">CN Tower</h5>
       <p class="card-text">Iconic tower with a revolving restaurant.</p>
       <a href="#" class="btn btn-primary">Tornonto,ON</a>
      </div>
       </div>
</div>

<div class="col-sm">
         <div class="card" style="width: 18rem;">
        <img src="images/hill.jpg" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">Parliament Hill</h5>
       <p class="card-text">Neo-Gothic home of Canada's legislature.</p>
       <a href="#" class="btn btn-primary">Ottawo,ON</a>
      </div>
       </div>
</div>

         <div class="card" style="width: 18rem;">
        <img src="images/park.jpg" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">Algonquin Provincial Park</h5>
       <p class="card-text">Wilderness area with lakes & campsites.</p>
       <a href="#" class="btn btn-primary">Algonquin,ON</a>
      </div>
       </div>


<div class="col-sm">
         <div class="card" style="width: 18rem;">
        <img src="images/fall.jpg" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">Horseshoe Falls</h5>
       <p class="card-text">Iconic, monumental waterfall.</p>
       <a href="#" class="btn btn-primary">Niagara,ON</a>
      </div>
       </div>
</div>

<div class="col-sm">
         <div class="card" style="width: 18rem;">
        <img src="images/mesum.jpg" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">Royal Ontario Museum</h5>
       <p class="card-text">Huge range of culture & nature exhibits.</p>
       <a href="#" class="btn btn-primary">Toronto, ON</a>
      </div>
       </div>
</div>

<div class="col-sm">
         <div class="card" style="width: 18rem;">
        <img src="images/kingston.jpg" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">Kingston</h5>
       <p class="card-text">Kingston is a Canadian city on Lake Ontario, at the mouth of the Cataraqui and St. Lawrence rivers.</p>
       <a href="#" class="btn btn-primary">Kingston,ON</a>
      </div>
       </div>
</div>
 </div>
 </div>      
        
        
        
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
       {path:'/blog', component:blogcomponent},
       



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
