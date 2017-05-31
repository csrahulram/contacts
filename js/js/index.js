'use strict';
(function () {
	var search_modal = [];

	var currentEdit = {};

	function $(id) {
		return document.getElementById(id);
	}

	function ajax(url, data, cb) {
		var http = new XMLHttpRequest();
		var params = data;
		http.open("POST", 'http://localhost:8080/' + url, true);

		//Send the proper header information along with the request
		http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

		http.onreadystatechange = function () {//Call a function when the state changes.
			if (http.readyState == 4 && http.status == 200) {
				cb(JSON.parse(http.responseText));
			}
		}
		http.send(JSON.stringify(params));
	}

	$('add_btn').addEventListener('click', function (e) {
		$('modal_name').value = '';
		$('modal_number').value = '';
		var updateBtn = document.getElementsByClassName('modal-add-btn')[0];
		updateBtn.innerHTML = 'Add';
		updateBtn.style.backgroundColor = '#5cb85c';
		openModal('add_modal');
	});

	function openModal(id) {
		$('lightbox').classList.remove('hide');
		$(id).classList.remove('hide');
		if (id == 'add_modal') {
			$('modal_name').addEventListener('keyup', enableBtn);
			$('modal_number').addEventListener('keyup', enableBtn);
			document.addEventListener('keyup', enterFn);
		}

		function enableBtn(e) {
			if ($('modal_name').value != '' && $('modal_number').value != '') {
				document.getElementsByClassName('modal-add-btn')[0].classList.remove('disable');
			} else {
				document.getElementsByClassName('modal-add-btn')[0].classList.add('disable');
			}
		}

		function enterFn(e) {
			if (e.keyCode == 13) {
				if ($('modal_name').value != '' && $('modal_number').value != '') {
					document.dispatchEvent(new CustomEvent('add', { 'detail': 'add_modal' }));
					document.removeEventListener('keyup', enterFn);
				}
			}
		}
	}

	function closeModal(id) {
		$('lightbox').classList.add('hide');
		$(id).classList.add('hide');
		var addBtn = document.getElementsByClassName('modal-add-btn')[0];
		addBtn.classList.add('disable');
	}

	document.addEventListener('close', function (e) {
		closeModal(e.detail);
	});

	document.addEventListener('edit', function (e) {
		currentEdit.id = parseInt(e.detail.getElementsByClassName('id')[0].innerHTML);

		$('modal_name').value = e.detail.getElementsByClassName('name')[0].innerHTML;
		$('modal_number').value = e.detail.getElementsByClassName('number')[0].innerHTML;

		var updateBtn = document.getElementsByClassName('modal-add-btn')[0];
		updateBtn.innerHTML = 'Update';
		updateBtn.style.backgroundColor = '#eb9316';
		openModal('add_modal');
	});

	document.addEventListener('delete', function (e) {
		if (e.detail == 'confirm_modal') {
			ajax('api/delete', { 'id': currentEdit.id }, function (data) {
				render(data);
				closeModal('confirm_modal');
			});
		} else {
			currentEdit.id = parseInt(e.detail.getElementsByClassName('id')[0].innerHTML);
			openModal('confirm_modal');
		}
	})

	document.addEventListener('add', function (e) {
		var updateBtn = document.getElementsByClassName('modal-add-btn')[0];
		if (updateBtn.innerHTML == 'Update') {
			var ele = {};
			ele.name = $('modal_name').value;
			ele.number = $('modal_number').value;
			ele.gender = 'male';
			ele.id = currentEdit.id;
			ajax('api/update', ele, function (data) {
				closeModal(e.detail);
				render(data);
			});
		} else if (updateBtn.innerHTML == 'Add') {
			var ele = {};
			ele.name = $('modal_name').value;
			ele.number = $('modal_number').value;
			ajax('api/add', ele, function (data) {
				closeModal(e.detail);
				render(data);
			});
		}
	});

	document.addEventListener('search', function (e) {
		ajax('api/search', { 'query': $('search_input').value }, function (data) {
			render(data);
		});
	});

	function render(model) {
		$('contact_view').innerHTML = '';

		model.forEach(function (element) {
			var item =
				'<div class="delete-btn btn icon"></div>' +
				'<div class="edit-btn btn icon"></div>' +
				'<div class="profile-icon male noclick"></div>' +
				'<div class="details noclick">' +
				'<p class="name">' + element.name + '</p>' +
				'<p class="number">' + element.number + '</p>' +
				'</div>' +
				'<div class="id hide">' + element.id + '</div>';

			var ele = document.createElement('div');

			ele.classList.add('item-wrapper', 'btn');

			ele.innerHTML = item;

			ele.getElementsByClassName('delete-btn')[0].addEventListener('click', function () {
				document.dispatchEvent(new CustomEvent('delete', { 'detail': ele }));
			});

			ele.getElementsByClassName('edit-btn')[0].addEventListener('click', function () {
				document.dispatchEvent(new CustomEvent('edit', { 'detail': ele }));
			});
			
			$('contact_view').appendChild(ele);
		});

		$('count').innerHTML = model.length;
	}
	ajax('api/read', {}, function (data) {
		render(data);
	});
}());