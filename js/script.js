'use-strict'

var tabsBox = $('.js-tabs');
var tabsBtn = $('.js-tab');
var tabsItems = $('.js-tabcontent');

for (var i = 0; i < tabsBtn.length; i++) {
    tabsBtn[i].addEventListener('click', function() {


        var currentNum = this.dataset.tab; // 1
        console.log(currentNum);
        var currentTab = $("#tabcontent" + currentNum);

        console.log(currentTab);
        
        for (var j = 0; j < tabsItems.length; j++) {
            tabsItems[j].classList.remove('active');
        }

        for (var j = 0; j < tabsBtn.length; j++) {
            tabsBtn[j].classList.remove('active');
        }

        currentTab.addClass('active');
        this.classList.add('active');
    });
}