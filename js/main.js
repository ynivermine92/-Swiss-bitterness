let tabsFuction = function(){
  let tabs = document.querySelectorAll('.tabs');
  let tabsItem = document.querySelectorAll('.tab');
  let tabCustomer = document.querySelectorAll(".customer-reviews__content");
  let customerReviewsTabs = document.querySelector(".customer-reviews__tab-1.tabs-tab");
  let tabsOn = document.querySelector(".customer-reviews__content.tabs-on-1"); 
  let tabsTab = document.querySelectorAll('.tabs-tab');
  let tabName;
  let tabsName;
  


  tabs.forEach(item =>{
    item.addEventListener('click',tabsBootm);
  })
   function tabsBootm(){
     tabs.forEach(item=>{
       item.classList.remove('acvive');
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
     

  tabsTab.forEach(item=>{
   item.addEventListener('click',tabsTabActiv);
  });

 function tabsTabActiv(){
  tabsTab.forEach(item=>{
    item.classList.remove('acvive');
    item.style.color="#c3c3c3";
    item.style="background-color:#fff";
 })
    this.classList.add('acvive');
    this.style.color="#f6f9f3";
    this.style="background-color:#f6f9f3";
    tabsName =this.getAttribute('tabs-name');
    tabsActiveCustomer(tabsName);
}
function tabsActiveCustomer(customerTabs){
  tabCustomer.forEach(item =>{
    item.classList.contains(customerTabs)?item.classList.add('active'):
    item.classList.remove('active')
  })
  tabCustomer.forEach(item =>{
    item.classList.contains(customerTabs)?item.classList.add('active'):
    item.classList.remove('active')
  })
}
   function tabsTabInactive(){
     customerReviewsTabs.style.color="#c3c3c3";
      tabsOn.style.display = 'none'; 
   }
   document.querySelector('.customer-reviews__tab-2.tabs-tab').onclick=tabsTabInactive;  


};
tabsFuction();
