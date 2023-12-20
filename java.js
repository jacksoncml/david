function changeTab(index) {
    var tabs = document.querySelectorAll('.tab');

    tabs.forEach(function(tab) {
        tab.classList.remove('active');
        });

        tabs[index].classList.add('active');
        }

changeTab(0);
    