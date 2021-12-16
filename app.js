const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
function check(nav) {
  document.getElementById("names1").value = "0";
  document.getElementById("names2").value = "0";
  document.getElementById("names3").value = "0";
  document.getElementById("name").innerHTML = "---";
  document.getElementById("age").innerHTML = "---";
  document.getElementById("dob").innerHTML = "---";
  document.getElementById("say").innerHTML = "---";
  document.getElementById("fut").innerHTML = "---";
}
function student(num){
    switch (num){
        case "0":
          document.getElementById("name").innerHTML = "---";
          document.getElementById("age").innerHTML = "---";
          document.getElementById("dob").innerHTML = "---";
          document.getElementById("say").innerHTML = "---";
          document.getElementById("fut").innerHTML = "---";
          break;
          case "1. Alberto, Miguel Aries E.":
            var dateObj = new Date("May 04, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Alberto, Miguel Aries E.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Miguel";
            document.getElementById("fut").innerHTML = "Future ni Miguel";
            break;
          case "2. Arendon, Franz Zedrick C":
            var dateObj = new Date("May 04, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Arendon, Franz Zedrick C";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Franz";
            document.getElementById("fut").innerHTML = "Future ni Franz";
            break;
          case "3. Cacho, Aladin E.":
            var dateObj = new Date("January 09, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Cacho, Aladin E.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Aladin";
            document.getElementById("fut").innerHTML = "Future ni Aladin";
            break;
          case "4. Candelario, Jhomar L.":
            var dateObj = new Date("March 13, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Candelario, Jhomar L.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Jhomar";
            document.getElementById("fut").innerHTML = "Future ni Jhomar";
            break;
          case "5. Cayetano, Korvin Luois":
            var dateObj = new Date("August 30, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Cayetano, Korvin Luois";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Korvin";
            document.getElementById("fut").innerHTML = "Future ni Korvin";
            break;
          case "6. Degamon, Jeremy P.":
            var dateObj = new Date("March 07, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Degamon, Jeremy P.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Jeremy";
            document.getElementById("fut").innerHTML = "Future ni Jeremy";
            break;
          case "7. Dela Cruz, Melsedaiuq O.":
            var dateObj = new Date("July 10, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Dela Cruz, Melsedaiuq O.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Melsedaiuq";
            document.getElementById("fut").innerHTML = "Future ni Melsedaiuq";
            break;
          case "8. Espiritu, Aerrol S.":
            var dateObj = new Date("June 14, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Espiritu, Aerrol S.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Aerrol";
            document.getElementById("fut").innerHTML = "Future ni Aerrol";
            break;
          case "9. Faustino, Lance Trixian L.":
            var dateObj = new Date("June 14, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Faustino, Lance Trixian L.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Lance";
            document.getElementById("fut").innerHTML = "Future ni Lance";
            break;
          case "10.Gabor, Richard Allen C.":
            var dateObj = new Date("October 4, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Gabor, Richard Allen C.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Richard";
            document.getElementById("fut").innerHTML = "Future ni Richard";
            break;
          case "11.Galvez, Chris John R.":
            var dateObj = new Date("October 13, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Galvez, Chris John R.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Chris John";
            document.getElementById("fut").innerHTML = "Future ni Chris John";
            break;
          case "12.Gavina, Reymar V.":
            var dateObj = new Date("July 25, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Gavina, Reymar V.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Reymar";
            document.getElementById("fut").innerHTML = "Future ni Reymar";
            break;
          case "13.Gonzales,Melchizedek A.":
            var dateObj = new Date("July 08, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Gavina, Reymar V.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Reymar";
            document.getElementById("fut").innerHTML = "Future ni Reymar";
            break;
          case "14.Maniquis, Jayzer Joseph T.":
            var dateObj = new Date("July 5, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Alberto, Miguel Aries E.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Miguel";
            document.getElementById("fut").innerHTML = "Future ni Miguel";
            break;
          case "15.Manzanal, Lance Irving M.":
            var dateObj = new Date("December 29, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Arendon, Franz Zedrick C";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Franz";
            document.getElementById("fut").innerHTML = "Future ni Franz";
            break;
          case "16.Mata, Adrian P.":
            var dateObj = new Date("---");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Cacho, Aladin E.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Aladin";
            document.getElementById("fut").innerHTML = "Future ni Aladin";
            break;
          case "17.Miranda, Medel I.":
            var dateObj = new Date("July 09, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Candelario, Jhomar L.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Jhomar";
            document.getElementById("fut").innerHTML = "Future ni Jhomar";
            break;
          case "18.Ong, Jim Charles D.":
            var dateObj = new Date("June 24, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Ong, Jim Charles D.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Jim";
            document.getElementById("fut").innerHTML = "Future ni Jim";
            break;
          case "19.Peralta, Zeckiel M.":
            var dateObj = new Date("June 24, 2002");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Gonzales, Melchizedek A.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Melchizedek";
            document.getElementById("fut").innerHTML = "Future ni Melchizedek";
            break;
          case "20.Ramos, Ernesto Jr. A.":
            var dateObj = new Date("---");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Ramos, Ernesto Jr. A.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Ernesto";
            document.getElementById("fut").innerHTML = "Future ni Ernesto";
            break;
          case "21.Sotto, Jericho D.":
            var dateObj = new Date("July 18, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Sotto, Jericho D.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Jericho";
            document.getElementById("fut").innerHTML = "Future ni Jericho";
            break;
          case "22.Tejada, Edwin B.":
            var dateObj = new Date("May 12, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Tejada, Edwin B.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Edwin";
            document.getElementById("fut").innerHTML = "Future ni Edwin";
            break;
          case "23.Trinidad, Eidriel G.":
            var dateObj = new Date("October 28, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Trinidad, Eidriel G.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni Eidriel";
            document.getElementById("fut").innerHTML = "Future ni Eidriel";
            break;
          case "24.Valdez, John Anthony P.":
            var dateObj = new Date("June 13, 2003");
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate() + 1;
            var year = dateObj.getUTCFullYear();
            newdate = month + "/" + day + "/" + year ; 
            var month_diff = Date.now() - dateObj.getTime();  
            var age_dt = new Date(month_diff);   
            var year = age_dt.getUTCFullYear();  
            var age = Math.abs(year - 1970);  
            document.getElementById("name").innerHTML = "Valdez, John Anthony P.";
            document.getElementById("age").innerHTML = age;
            document.getElementById("dob").innerHTML = newdate;
            document.getElementById("say").innerHTML = "Saying ni John Anthony";
            document.getElementById("fut").innerHTML = "Future ni John Anthony";
            break;
            case "1. Alo, Justine Joy S.":
              var dateObj = new Date("August 11, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Alo, Justine Joy S.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Justine Joy";
              document.getElementById("fut").innerHTML = "Future ni Justine Joy";
              break;
            case "2. Aseniero, Angelica S.":
              var dateObj = new Date("August 15, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Aseniero, Angelica S.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Angelica";
              document.getElementById("fut").innerHTML = "Future ni Angelica";
              break;
            case "3. Dela Cruz, Roseanne Joy G.":
              var dateObj = new Date("September 14, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Dela Cruz, Roseanne Joy G.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Roseanne Joy";
              document.getElementById("fut").innerHTML = "Future ni Roseanne Joy";
              break;
            case "4. Dugay, Hannah Faye C.":
              var dateObj = new Date("December 15, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Fernandez, Neffia D.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Neffia";
              document.getElementById("fut").innerHTML = "Future ni Neffia";
              break;
            case "5. Fernandez, Neffia D.":
              var dateObj = new Date("August 14, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Fernandez, Neffia D.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Neffia";
              document.getElementById("fut").innerHTML = "Future ni Neffia";
              break;
            case "6. Gajete, Airah Trixie B.":
              var dateObj = new Date("June 01, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Gajete, Airah Trixie B.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Airah Trixie";
              document.getElementById("fut").innerHTML = "Future ni Airah Trixie";
              break;
            case "7. Garcia, Samantha Lei D.":
              var dateObj = new Date("June 01, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Garcia, Samantha Lei D.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Samantha Lei";
              document.getElementById("fut").innerHTML = "Future ni Samantha Lei";
              break;
            case "8. Huelva, Micah T.":
              var dateObj = new Date("February 11, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Huelva, Micah T.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Micah";
              document.getElementById("fut").innerHTML = "Future ni Micah";
              break;
            case "9. Imperial, Rogelyn B.":
              var dateObj = new Date("February 02, 1999");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Imperial, Rogelyn B.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Rogelyn";
              document.getElementById("fut").innerHTML = "Future ni Rogelyn";
              break;
            case "10.Linsangan, Paola Ysabel B.":
              var dateObj = new Date("February 02, 1999");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Linsangan, Paola Ysabel B.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Paola Ysabel";
              document.getElementById("fut").innerHTML = "Future ni Paola Ysabel";
              break;
            case "11.Magat, Crissa Mae M.":
              var dateObj = new Date("May 18, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Magat, Crissa Mae M.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Crissa Mae";
              document.getElementById("fut").innerHTML = "Future ni Crissa Mae";
              break;
            case "12.Mende, Princess Jan B.":
              var dateObj = new Date("January 08, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Mende, Princess Jan B.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Princess Jan";
              document.getElementById("fut").innerHTML = "Future ni Princess Jan";
              break;
            case "13.Natividad, Kathleen A.":
              var dateObj = new Date("March 29, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Natividad, Kathleen A.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Kathleen";
              document.getElementById("fut").innerHTML = "Future ni Kathleen";
              break;
            case "14.Nortes, Joanna Paula D.":
              var dateObj = new Date("November 7, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Nortes, Joanna Paula D.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Joanna Paula";
              document.getElementById("fut").innerHTML = "Future ni Joanna Paula";
              break;
            case "15.Pilar, Nicole Anne D.":
              var dateObj = new Date("February 11, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Pilar, Nicole Anne D.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Nicole Anne";
              document.getElementById("fut").innerHTML = "Future ni Nicole Anne";
              break;
            case "16.Pispis, Leonora T.":
              var dateObj = new Date("June 29, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Pispis, Leonora T.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Leonora";
              document.getElementById("fut").innerHTML = "Future ni Leonora";
              break;
            case "17.Ramones, Jashlie Mae T.":
              var dateObj = new Date("May 02, 2003");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Ramones, Jashlie Mae T.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Jashlie Mae";
              document.getElementById("fut").innerHTML = "Future ni Jashlie Mae";
              break;
            case "18.Ramos, Jenean Angela B.":
              var dateObj = new Date("April 17, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Ramos, Jenean Angela B.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Jenean Angela";
              document.getElementById("fut").innerHTML = "Future ni Jenean Angela";
              break;
            case "19.Rirao, Erika Joyce P.":
              var dateObj = new Date("September 16, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Rirao, Erika Joyce P.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Erika Joyce";
              document.getElementById("fut").innerHTML = "Future ni Erika Joyce";
              break;
            case "20.Sambrano, Jamaica C.":
              var dateObj = new Date("August 02, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObwj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Sambrano, Jamaica C.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Jamaica";
              document.getElementById("fut").innerHTML = "Future ni Jamaica";
              break;
            case "21.Siababa, Hannah Ruth S.":
              var dateObj = new Date("July 16, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Siababa, Hannah Ruth S.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Hannah Ruth";
              document.getElementById("fut").innerHTML = "Future ni Hannah Ruth";
              break;
            case "22.Sison, Liv-Glyzle N.":
              var dateObj = new Date("October 21, 2002");
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate() + 1;
              var year = dateObj.getUTCFullYear();
              newdate = month + "/" + day + "/" + year ; 
              var month_diff = Date.now() - dateObj.getTime();  
              var age_dt = new Date(month_diff);   
              var year = age_dt.getUTCFullYear();  
              var age = Math.abs(year - 1970);  
              document.getElementById("name").innerHTML = "Sison, Liv-Glyzle N.";
              document.getElementById("age").innerHTML = age;
              document.getElementById("dob").innerHTML = newdate;
              document.getElementById("say").innerHTML = "Saying ni Liv-Glyzle";
              document.getElementById("fut").innerHTML = "Future ni Liv-Glyzle";
              break;
  }
}
