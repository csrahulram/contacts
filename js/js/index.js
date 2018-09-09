'use strict';
(function () {

	// Micro library to mimik the jquery functionality. This is not actual jquery.
	function $(id) {
		let ele;
		if (id[0] == '#') {
			ele = document.getElementById(id.substr(1));
		} else {
			ele = document.getElementsByClassName(id.substr(1));
		}
		return ele;
	}

	let root = $('.root')[0];
	let fullScreen = false;

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

	let currentItem = {};
	let mode = '';
	let genderRad = document.getElementsByName('gender');
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
	let addAction = $('#add_action');
	let editAction = $('#edit_action');
	let deleteBtn = $('#delete_btn');


	addBtn.addEventListener('click', function () {
		mode = 'add';
		navTxt.innerHTML = 'Create new contact'
		currentItem = {};
		showDetails();
	});

	deleteBtn.addEventListener('click', function(){
		confirm('This contact will be deleted.');
	})

	fullscreenBtn.addEventListener('click', function () {
		if(!fullScreen){
			fullScreen = true;
			openFullscreen();
		} else {
			fullScreen = false;
			closeFullscreen();
		}
			
	});

	backBtn.addEventListener('click', function () {
		hideDetails();
	});

	document.addEventListener('view_contact', function (e) {
		currentItem = e.detail;
		navTxt.innerHTML = currentItem.name + '\'s contact details'
		mode = 'edit';
		showDetails();
	})

	document.addEventListener('add', function (e) {

	});

	document.addEventListener('search', function (e) {
		ajax('POST', 'search', { 'query': $('search_txt').value }, function (data) {
			render(data);
		});
	});

	function showDetails() {
		nameTxt.value = '';
		phoneTxt.value = '';
		genderRad.forEach(function(ele){
			ele.checked = false;
		});
		profilePic.src = 'img/dummy.png';
		addAction.classList.remove('hide');
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
				profilePic.src = 'img/' + currentItem.profile;
			}

			addAction.classList.add('hide');
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
			item += '<img class="profile" src="img/' + ele.profile + '" />';
			item += '<div class="details">';
			item += '<div class="name">' + ele.name + '</div>';
			item += '<div class="phone">' + ele.phone + '</div>';
			item += '</div>';

			var contactItem = document.createElement('div');
			contactItem.classList.add('contact-item', 'button');
			contactItem.innerHTML = item;
			contactItem.addEventListener('click', function () {
				document.dispatchEvent(new CustomEvent('view_contact', { 'detail': ele }));
			});
			contactsContainer.appendChild(contactItem);
		});

		countTxt.innerHTML = 'Total ' + model.length + ' contact' + (model.length <= 1 ? '' : 's');
	}

	ajax('GET', 'read', {}, function (data) {
		render(data);
	});
}());