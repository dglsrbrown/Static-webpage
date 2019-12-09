function myFunction(){
    var myWindow = window.open("","")
}

window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("navbar").style.top = "0";
                document.getElementsByClassName('nav').style.dsplay= "none";
            }   
            else {
                document.getElementById("navbar").style.top = "-80px";
                document.getElementsByClassName('nav').style.display="block";
            }
        }