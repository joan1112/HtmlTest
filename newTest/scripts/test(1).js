document.onreadystatechange = subSomething; 

function subSomething() {
    if (document.readyState == 'complete') {
        var imgs = document.getElementsByTagName('img')

        for (var index = 0; index < imgs.length; index++) {

            if (imgs[index].width > 100) {
                imgs[index].style.width = '50px'
            }
        }
    }
}
// $(function(){
//     console.log($('img'))
//     $('img').each(function (index, el) {
//         if(el.width>100){
//             $(el).css('width','50px');
//         }
//     });
// })
