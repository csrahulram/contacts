'use strict';
(function () {
	var data_modal = [
		{ 'id': 1, 'name': 'Rahul', 'number': '9962293022', 'gender': 'male' },
		{ 'id': 2, 'name': 'Swetha', 'number': '9962293023', 'gender': 'female' },
		{ 'id': 3, 'name': 'Vinoth', 'number': '9962293024', 'gender': 'male' },
		{ 'id': 4, 'name': 'Naveen', 'number': '9962293025', 'gender': 'male' },
		{ 'id': 5, 'name': 'Vivek', 'number': '9962293026', 'gender': 'male' }
	];

	var search_modal = [];

	var currentEdit = {};

	function $(id) {
		return document.getElementById(id);
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

			data_modal.forEach(function (ele, ind) {
				if (currentEdit.id == ele.id) {
					data_modal.splice(ind, 1);
				}
			});
			closeModal('confirm_modal');
			render(data_modal);
		} else {
			currentEdit.id = parseInt(e.detail.getElementsByClassName('id')[0].innerHTML);
			openModal('confirm_modal');
		}
	})

	document.addEventListener('add', function (e) {
		var updateBtn = document.getElementsByClassName('modal-add-btn')[0];
		if (updateBtn.innerHTML == 'Update') {
			data_modal.forEach(function (ele) {
				if (ele.id == currentEdit.id) {
					ele.name = $('modal_name').value;
					ele.number = $('modal_number').value;
				}
			});
		} else if (updateBtn.innerHTML == 'Add') {
			var ele = {};
			ele.name = $('modal_name').value;
			ele.number = $('modal_number').value;
			ele.id = data_modal.length + 1;
			data_modal.push(ele);
		}

		closeModal(e.detail);
		render(data_modal);
	});

	document.addEventListener('search', function(e){
		search($('search_input').value);
	});

	function search(query){
		search_modal = [];
		data_modal.forEach(function(ele){
			var a = ele.name.toLocaleLowerCase();
			var b = query.toLocaleLowerCase();
			var c = ele.number.toLocaleLowerCase();
			if(a.indexOf(b) != -1 || c.indexOf(b) != -1){
				search_modal.push(ele);
			}
		});

		render(search_modal);
	}

	function render(model) {
		$('contact_view').innerHTML = '';
		model.forEach(function (element) {
			var item = `
			 <div class="delete-btn btn icon" onclick="document.dispatchEvent(new CustomEvent('delete'), {'detail': this})"></div>
			 <div class="edit-btn btn icon" onclick="document.dispatchEvent(new CustomEvent('edit'), {'detail': this})"></div>
                <div class="profile-icon male noclick"></div>
                <div class="details noclick">
                    <p class="name">`+ element.name + `</p>
                    <p class="number">`+ element.number + `</p>
                </div>
				<div class="id hide">`+ element.id + `</div>`;

			var ele = document.createElement('div');

			ele.classList = 'item-wrapper btn';

			ele.innerHTML = item;

			ele.getElementsByClassName('delete-btn')[0].onclick = function () {
				document.dispatchEvent(new CustomEvent('delete', { 'detail': ele }));
			}

			ele.getElementsByClassName('edit-btn')[0].onclick = function () {
				document.dispatchEvent(new CustomEvent('edit', { 'detail': ele }));
			}

			$('contact_view').appendChild(ele);


		}, this);

		$('count').innerHTML = model.length;
	}

	render(data_modal);
}());