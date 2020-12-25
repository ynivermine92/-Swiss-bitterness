let tabsFuction = function(){
  let tabs = document.querySelectorAll('.tabs');
  let tabsItem = document.querySelectorAll('.tab');
  let tabName;
 


  
  tabs.forEach(item =>{
    item.addEventListener('click',tabsBootm);
  })
   function tabsBootm(){
     tabs.forEach(item=>{
       item.classList.remove('avtive');
     })
        this.classList.add('acvive');
        tabName =this.getAttribute('tab-name');
        tabsActive(tabName);
   }
      function tabsActive(tabName){
        tabsItem.forEach(item =>{
          item.classList.contains(tabName)?item.classList.add('active'):
          item.classList.remove('active')
        })
      }
};
tabsFuction();


let tabavtive = function (e){
   let tab = document.querySelector('.customer-reviews__tab-1');
   let tabs = document.querySelector('.customer-reviews__tab-2');

   function tabcComments (e){
  
   
    console.log(e);
   }
   document.querySelector('.customer-reviews__tab-1,customer-reviews__tab-2').onclick = tabcComments;

};
tabavtive();