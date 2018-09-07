(function(){
	$(document).ready(main);

	let contentView;
	let count;
	let addBtn;
	let addContactBtn;
	let addModal;
	let lightbox;
	let homeBtn;
	let modal = {
		'new_contact':{
			'name':'',
			'number':'',
			'gender':'male',
			'id':0
		}
	};

	function main(){
		newContact = {};
		contentView = $('#contact_view');
		count = $('#count');
		addBtn = $('#add_btn');
		addModal = $('#add_modal');
		lightbox = $('#lightbox');
		addContactBtn = $('#add_contact_btn');
		homeBtn = $('#home_btn');

		addBtn.on('click', showAddModal);
		addContactBtn.on('click', addNewContact);
		homeBtn.on('click', homeNavigation);

		$(document).on('close_modal', closeModalHandler);
		$(document).on('data_binder', bindData);

		ajax('read', {}, function(data){
			render(data);
		});
	}

	function ajax(url, data, cb){
		$.ajax({
			url:'/api/' + url,
			method: 'POST',
			data: JSON.stringify(data),
			contentType: "application/json;charset=UTF-8",
			success: cb,
			error:function(){
				console.log('AJAX Failed');
			}
		})
	}

	function homeNavigation(){
		window.history.back();
	}


	function render(data){
		contentView.empty();
		data.forEach(function (ele) {
			var item = '<div class="item-wrapper">';
			item += '<div class="delete-btn btn icon" onclick="$.event.trigger({\'type\':\'delete\', \'msg\':this})"></div>';
			item += '<div class="edit-btn btn icon" onclick="$.event.trigger({\'type\':\'delete\', \'msg\':this})"></div>';
			item += '<div class="profile-icon male noclick"></div>';
			item += '<div class="details noclick">';
			item += '<p class="name">' + ele.name + '</p>';
			item += '<p class="number">' + ele.number + '</p>';
			item += '</div>';
			item += '<div class="id hide">' + ele.id + '</div>'
			item += '</div>';
			contentView.append(item);
		});

		count.html(data.length);
	}

	function showAddModal(e){
		lightbox.toggle('hide');
		addModal.toggle('hide').find('.modal-heading-text').html(e.target.title);
	}


	function closeModalHandler(e){
		lightbox.toggle('hide');
		$('#' + e.msg).toggle('hide');
	}

	function bindData(e){
		modal[e.modal.split('.')[1]][e.modal.split('.')[2]] = e.msg;


		if(modal['new_contact']['name'] != '' && modal['new_contact']['number'] != ''){
			addContactBtn.removeClass('disable');
		} else {
			addContactBtn.addClass('disable');
		}
	}

	function addNewContact(){
		console.log(modal['new_contact']);
		ajax('add', modal['new_contact'], function(data){
			render(data);
			$.event.trigger({'type':'close_modal', 'msg':'add_modal'});
		});
	}
}());