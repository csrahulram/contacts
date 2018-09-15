'use strict';
(function () {

	/* Micro library to mimik the jquery functionality. This is not actual jquery. */
	function $(id) {
		let ele;
		if (id[0] == '#') {
			ele = document.getElementById(id.substr(1));
		} else {
			ele = document.getElementsByClassName(id.substr(1));
		}
		return ele;
	}


	

	/* View in fullscreen */
	function openFullscreen() {
		if (root.requestFullscreen) {
			root.requestFullscreen();
		} else if (root.mozRequestFullScreen) { /* Firefox */
			root.mozRequestFullScreen();
		} else if (root.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			root.webkitRequestFullscreen();
		} else if (root.msRequestFullscreen) { /* IE/Edge */
			root.msRequestFullscreen();
		}
	}
	/* Close fullscreen */
	function closeFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) { /* Firefox */
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) { /* IE/Edge */
			document.msExitFullscreen();
		}
	}

	function ajax(method, url, data, cb) {
		var http = new XMLHttpRequest();
		var params = data;
		http.open(method, '/api/' + url, true);
		http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				cb(JSON.parse(http.responseText));
			}
		}
		http.send(JSON.stringify(params));
	}
	
	// Micro library ends

	// Complete local variables
	let root = $('.root')[0];
	let fullScreen = false;
	let currentItem = {};
	let mode = '';
	let genderRad = document.getElementsByName('gender');
	let genderCon = $('.gender-container')[0];
	let contactsContainer = $('.contacts-container')[0];
	let detailsContainer = $('.details-container')[0];
	let searchBar = $('#search_bar');
	let navBar = $('#nav_bar');
	let addBtn = $('#add_btn');
	let homeBtn = $('#home_btn');
	let backBtn = $('#back_btn');
	let fullscreenBtn = $('#fullscreen_btn');
	let nameTxt = $('#name_txt');
	let phoneTxt = $('#phone_txt');
	let countTxt = $('#count_txt');
	let navTxt = $('#nav_txt');
	let profilePic = $('#profile_pic');
	let createAction = $('#create_action');
	let editAction = $('#edit_action');
	let deleteBtn = $('#delete_btn');
	let updateBtn = $('#update_btn');
	let createBtn = $('#create_btn');
	let fileInp = $('#file');
	let searchTxt = $('#search_txt');
	let confirmYes = $('#confirm_yes');
	let confirmNo = $('#confirm_no');
	let alertOk = $('#alert_ok');
	let confirmClose = $('#confirm_close');
	let alertClose = $('#alert_close');
	let confirmModal = $('#confirm_modal');
	let alertModal = $('#alert_modal');
	let lightbox = $('#lightbox');
	let confirmTxt = $('#confirm_txt');
	let alertTxt = $('#alert_txt');
	let loader = $('#loader');
	// Local variable ends
	
	/* Primary window functions*/
	function confirm(msg, yes, no){
		confirmTxt.innerHTML = msg;
		lightbox.classList.remove('fade-out');
		lightbox.classList.add('fade-in');
		lightbox.classList.remove('delay-hide');
		confirmModal.classList.add('fade-in');
		confirmModal.classList.remove('delay-hide');
		confirmYes.onclick = yes;
		confirmNo.onclick = no;
	}

	function closeConfirm(){
		lightbox.classList.remove('fade-in');
		lightbox.classList.add('fade-out');
		lightbox.classList.add('delay-hide');
		confirmModal.classList.remove('fade-in');
		confirmModal.classList.add('delay-hide');
		confirmYes.onclick = null;
		confirmNo.onclick = null;
	}

	function alert(msg, ok){
		alertTxt.innerHTML = msg;
		lightbox.classList.remove('fade-out');
		lightbox.classList.add('fade-in');
		lightbox.classList.remove('delay-hide');
		alertModal.classList.add('fade-in');
		alertModal.classList.remove('delay-hide');
		alertOk.onclick = ok;
	}

	function closeAlert(){
		lightbox.classList.remove('fade-in');
		lightbox.classList.add('fade-out');
		lightbox.classList.add('delay-hide');
		alertModal.classList.remove('fade-in');
		alertModal.classList.add('delay-hide');
		alertOk.onclick = null;
	}

	for (var i = 0; i < genderRad.length; i++) {
		genderRad[i].addEventListener('change', function(){
			currentItem.gender = this.value;
		})
	}

	confirmClose.onclick = function(){
		closeConfirm();
	}

	alertClose.onclick = function(){
		closeAlert();
	}

	searchTxt.onkeyup =  function(){
		if(this.value != ''){
			ajax('GET', 'search/' + (this.value || '-1'), {}, function(data){
				render(data);
			});
		} else {
			getAll();
		}
		
	};


	addBtn.onclick = function () {
		mode = 'add';
		navTxt.innerHTML = 'Create new contact';
		currentItem = {};
		showDetails();
		
	};

	deleteBtn.onclick = function(){
		confirm('This contact will be deleted.', function(){
			ajax('DELETE', 'delete/' + currentItem.id, {}, function(data){
				render(data);
				hideDetails();
				closeConfirm();
			});
		}, function(){
			closeConfirm();
		});
	};

	

	fileInp.onchange = function(){
		loader.classList.remove('delay-hide');
		loader.classList.remove('fade-out');
		loader.classList.add('fade-in');
		let formData = new FormData();
		let xhr = new XMLHttpRequest();
		formData.append("profile", this.files[0]);
		xhr.open('post', '/api/upload', true);
		
		currentItem.profile = this.files[0].name;
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200) {
				profilePic.src = '../profiles/' + currentItem.profile;
				loader.classList.add('delay-hide');
				loader.classList.add('fade-out');
				loader.classList.remove('fade-in');
			}
		};

		xhr.send(formData);
	};

	nameTxt.onkeyup = function(){
		currentItem.name = this.value;
	};

	phoneTxt.onkeyup = function(){
		currentItem.phone = this.value;
	};

	createBtn.onclick = function(){
		if(!currentItem.name){
			alert('Contact name is mandatory.', function(){
				nameTxt.classList.add('shake');
				closeAlert();
				setTimeout(function(){nameTxt.classList.remove('shake');}, 1500);
			});
			return;
		}

		if(!currentItem.phone){
			alert('Contact number is mandatory.', function(){
				phoneTxt.classList.add('shake');
				closeAlert();
				setTimeout(function(){phoneTxt.classList.remove('shake');}, 1500);
			});
			return;
		}

		if(!currentItem.gender){
			alert('Gender is mandatory.', function(){
				genderCon.classList.add('shake');
				closeAlert();
				setTimeout(function(){genderCon.classList.remove('shake');}, 1500);
			});
			return;
		}

		createBtn.classList.add('disable');

		ajax('POST', 'add', currentItem, function(data){
			render(data);
			hideDetails();
			createBtn.classList.remove('disable');
		})
	};

	updateBtn.onclick = function(){
		if(!currentItem.name){
			alert('Contact name is mandatory.', function(){
				nameTxt.classList.add('shake');
				setTimeout(function(){nameTxt.classList.remove('shake');}, 1500);
				closeAlert();
			});
			return;
		}

		if(!currentItem.phone){
			alert('Contact number is mandatory.', function(){
				phoneTxt.classList.add('shake');
				setTimeout(function(){phoneTxt.classList.remove('shake');}, 1500);
				closeAlert();
			});
			return;
		}

		if(!currentItem.gender){
			alert('Gender is mandatory.', function(){
				genderCon.classList.add('shake');
				setTimeout(function(){genderCon.classList.remove('shake');}, 1500);
				closeAlert();
			});
			return;
		}

		updateBtn.classList.add('disable');

		ajax('PUT', 'update', currentItem, function(data){
			render(data);
			updateBtn.classList.remove('disable');
			hideDetails();
		})
	};

	fullscreenBtn.onclick = function () {
		if(!fullScreen){
			fullScreen = true;
			openFullscreen();
		} else {
			fullScreen = false;
			closeFullscreen();
		}		
	};

	backBtn.onclick = function () {
		hideDetails();
	};

	document.addEventListener('view_contact', function (e) {
		currentItem = e.detail;
		navTxt.innerHTML = currentItem.name + '\'s contact details';
		mode = 'edit';
		showDetails();
	});

	document.addEventListener('search', function (e) {
		ajax('GET', 'search/' + { 'query': $('search_txt').value },{}, function (data) {
			render(data);
		});
	});

	function showDetails() {
		nameTxt.value = '';
		phoneTxt.value = '';
		for (var i = 0; i < genderRad.length; i++) {
			genderRad[i].checked = false;
		}
		profilePic.src = '../profiles/dummy.png';
		createAction.classList.remove('hide');
		editAction.classList.add('hide');

		if(mode == 'edit'){
			if(currentItem.name){
				nameTxt.value = currentItem.name;
			}

			if(currentItem.phone){
				phoneTxt.value = currentItem.phone;
			}

			if(currentItem.gender){
				switch(currentItem.gender){
					case 'male':
					genderRad[0].checked = true;
					break;
					case 'female':
					genderRad[1].checked = true;
					break;
					case 'other':
					genderRad[2].checked = true;
					break;
				}
			}

			if(currentItem.profile){
				profilePic.src = '../profiles/' + currentItem.profile;
			}

			createAction.classList.add('hide');
			editAction.classList.remove('hide');
		}

		contactsContainer.classList.add('slide-left');
		contactsContainer.classList.remove('slide-center');

		detailsContainer.classList.add('slide-center');
		detailsContainer.classList.remove('slide-right');

		searchBar.classList.add('fade-out');
		searchBar.classList.remove('fade-in');

		navBar.classList.add('fade-in');
		navBar.classList.remove('fade-out');
		navBar.classList.remove('delay-hide');

		addBtn.classList.add('fade-out');
		addBtn.classList.remove('fade-in');
		addBtn.classList.add('delay-hide');

		homeBtn.classList.add('fade-out');
		homeBtn.classList.remove('fade-in');
		homeBtn.classList.add('delay-hide');
	}

	function hideDetails() {
		contactsContainer.classList.remove('slide-left');
		contactsContainer.classList.add('slide-center');

		detailsContainer.classList.remove('slide-center');
		detailsContainer.classList.add('slide-right');

		searchBar.classList.add('fade-in');
		searchBar.classList.remove('fade-out');

		navBar.classList.add('fade-out');
		navBar.classList.remove('fade-in');
		navBar.classList.add('delay-hide');

		addBtn.classList.remove('fade-out');
		addBtn.classList.add('fade-in');
		addBtn.classList.remove('delay-hide');

		homeBtn.classList.remove('fade-out');
		homeBtn.classList.add('fade-in');
		homeBtn.classList.remove('delay-hide');
	}

	function render(model) {
		contactsContainer.innerHTML = '';
		model.forEach(function (ele) {
			var item = '';
			item += '<img class="profile" src="../profiles/' + ele.profile + '" />';
			item += '<div class="details">';
			item += '<div class="name">' + ele.name + '</div>';
			item += '<div class="phone">' + ele.phone + '</div>';
			item += '</div>';

			var contactItem = document.createElement('div');
			contactItem.classList.add('contact-item');
			contactItem.classList.add('button');
			contactItem.innerHTML = item;
			contactItem.addEventListener('click', function () {
				document.dispatchEvent(new CustomEvent('view_contact', { 'detail': ele }));
			});
			contactsContainer.appendChild(contactItem);
		});

		if(!model.length){
			contactsContainer.innerHTML = '<p class="no-result">No results</p>';
		}

		countTxt.innerHTML = 'Total ' + model.length + ' contact' + (model.length <= 1 ? '' : 's');
	}

	function getAll(){
		ajax('GET', 'read', {}, function (data) {
			render(data);
		});
	}

	getAll();
	
}());