let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){ 
            navLinks.forEach(links => {links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// -------about--------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// --------------portfolio-------------
var photo = document.getElementById('photo');
var video = document.getElementById('video');

function showPhoto(){
    photo.style.display = 'flex';
    video.style.display = 'none';
}
function showVideo(){
    photo.style.display = 'none';
    video.style.display = 'block';
}
showPhoto();

// --------------contact-------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxQPzj0Ym9bbKw1iNgAqogvIDAFlcxh7TRtSaz9FIYWEvoX3HXAPrBeuy3KPjTiK3A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
      
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

