var form = document.getElementById("searchform");

form.addEventListener('submit', function(e){
    e.preventDefault()
    let search = document.getElementById("search").value
    let cloneurl = "github.html?gitu="+search;
    window.location = cloneurl;
		
})