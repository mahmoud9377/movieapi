var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById('phone');
var age = document.getElementById('age');
var password = document.getElementById('password');
var rePassword = document.getElementById('rePassword');
var movieContainer;
function submit() {
  var info = {
      name:idName.value,
      email:emailText.value,
      phone:phoneNumber.value,
      age:ageNumber.value,
      password:passwordInput.value,
      rePassword:passwordInput.value,
  }
  console.log(info);

  movieContainer.push(site)
  console.log(movieContainer);

  localStorage.setItem("mysite", JSON.stringify(movieContainer));

  //clearForm(); 
  displaymovie(movieContainer);
}
function clearForm() {
  siteName.value = '';
  siteUrl.value = '';

}

// function searchmovie(searchterm) {
//   var serchResult = [];
//   for (var i = 0; i < movieContainer.length; i++)
//   {
//       if (movieContainer[i].name.toLowerCase().includes(searchterm.toLowerCase())==true)
//       {
//           serchResult.push(movieContainer[i]);
//       }
//   }
//   displaymovie(serchResult);
// }
// searchmovie ("")
function validate() {
  var regax = /^[A-Z][a-z]$/;
  if (regax.test(movieName.value) == true) {
      return true;
  } else {
      return false;
  }
}

var myHttp = new XMLHttpRequest ();
var trendingMovies = [];
myHttp.open('GET',`https://api.themoviedb.org/3/trending/movie/week?api_key=46e92048db3ecf0bbd6302cbde72803c`);

myHttp.send();

myHttp.addEventListener('readystatechange',function (){
 if( myHttp.readyState==4 && myHttp.status==200 )
 {
  trendingMovies = JSON.parse (myHttp.response).results;
  displayItems(); 
 }
});
function displayItems() {
var cartona = ``;
for(i=0;i<trendingMovies.length;i++){
  cartona+= ` <div class="col-md-3">
  <div class="post">
  <img src=https://image.tmdb.org/t/p/w500${trendingMovies[i].poster_path} class='w-100'/>
  <h4>${trendingMovies[i].title}</h4>
  <p>${trendingMovies[i].overview}</p>
  </div>
  </div>`;
}
document.getElementById('rowData').innerHTML= cartona;
}

// $("popularlink").click (function (){
//   let sectionOffset = $("#popular").offest().top;
//   $("html,body").animate({scrollTop:sectionOffset },2000 );
// })

$("#nav a").click (function (e){
  let linkHref = $("e.target").attr('href')
    let sectionOffset = $(linkHref).offest();
    $("html,body").animate({scrollTop:sectionOffset},2000 );
  })

  $('#options i').click(function () {
    let divWidth = $('#navbarlist').innerWidth();
    $('#options').animate({left:`-${divWidth}`},1000);
  })

  