
const queryString = window.location.search;
		console.log(queryString);
		const urlParams = new URLSearchParams(queryString);
		gitu = urlParams.get('gitu');
        console.log(gitu);
		let url = "https://api.github.com/users/"+gitu;
		let response = fetch(url) 
		.then((result) => result.json())
		.then((data)=> {
		console.log(data);
		document.getElementById("avater").src = data.avatar_url;
		document.getElementById("avater1").src = data.avatar_url;
		document.getElementById("avater2").src = data.avatar_url;
		document.getElementById("name").innerHTML = data.name;
		document.getElementById("title").innerHTML = data.login;
		document.getElementById("username").innerHTML = data.login;
		document.getElementById("followers").innerHTML = data.followers;
		document.getElementById("following").innerHTML = data.following;
        document.getElementById("name1").innerHTML = data.name;
		document.getElementById("username1").innerHTML = data.login;
		document.getElementById("followers1").innerHTML = data.followers;
		document.getElementById("following1").innerHTML = data.following;

		let response = fetch(data.repos_url) 
		.then((result) => result.json())
		.then((repo)=> {
			console.log(repo);
			let divr = document.getElementById("repos")

			total = repo.length;
			document.getElementById("total").innerHTML = total;

			for(var i = 0; i < repo.length; i++){
				console.log(repo[i].name);
				var dob = new Date(repo[i].updated_at);
				var dobArr = dob.toDateString().split(' ');
				var date = dobArr[1] + ' ' + dobArr[2] + ', ' + dobArr[3];
				//date = moment(repo[i].upadated_at).format('MMMM dd YYYY');

				
				let row =`
				<div class="d-flex bd-highlight repo">
							<div class="p-2 flex-fill bd-highlight repo-content">
								<h1>${repo[i].name}</h1>
								<p class="des">${repo[i].description}</p>
								<p class="date">Updated on ${date}</p>
							</div>

							<div  class="star p-2 flex-fill bd-highlight">
								<div class="repo-btn">
									<span>
										<svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
									</span>
									Star</div>
							</div>
				`
						divr.innerHTML += row


			}
			
			//document.getElementById("name").innerHTML = repo.length;
		})
		
		})