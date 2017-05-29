(function(){
	window.data_modal = [
		{'id':1, 'name':'Rahul', 'number':'9962293022', 'gender':'male'}
	]

	var currentEdit = {};

	function $(id){
		return document.getElementById(id);
	}

	$('add_btn').addEventListener('click', function(e){
		$('modal_name').value = '';
		$('modal_number').value = '';
		
		document.getElementsByClassName('modal-add-btn')[0].classList.remove('hide');
		var updateBtn = document.getElementsByClassName('modal-add-btn')[0];
		updateBtn.innerHTML = 'Add';
		updateBtn.style.backgroundColor = '#5cb85c';
		openModal('add_modal');
	});

	function openModal(id){
		$('lightbox').classList.remove('hide');
		$(id).classList.remove('hide');
		if(id == 'add_modal'){
			$('modal_name').addEventListener('keyup', enableBtn);
			$('modal_number').addEventListener('keyup', enableBtn);
		}

		function enableBtn(e){
			if($('modal_name').value != '' && $('modal_number').value != ''){
				document.getElementsByClassName('modal-add-btn')[0].classList.remove('disable');
			} else {
				document.getElementsByClassName('modal-add-btn')[0].classList.add('disable');
			}
		}
	}

	function closeModal(id){
		$('lightbox').classList.add('hide');
		$(id).classList.add('hide');
		var addBtn = document.getElementsByClassName('modal-add-btn')[0];
	}

	document.addEventListener('close', function(e){
		closeModal(e.detail);
	});

	document.addEventListener('edit', function(e){

		currentEdit.id = parseInt(e.detail.getElementsByClassName('id')[0].innerHTML);

		$('modal_name').value = e.detail.getElementsByClassName('name')[0].innerHTML;
		$('modal_number').value = e.detail.getElementsByClassName('number')[0].innerHTML;

		var updateBtn = document.getElementsByClassName('modal-add-btn')[0];
		updateBtn.innerHTML = 'Update';
		updateBtn.style.backgroundColor = '#f0ad4e';
		openModal('add_modal');
	});

	document.addEventListener('delete', function(e){
		console.log(e);
	})

	document.addEventListener('add', function(e){
		var updateBtn = document.getElementsByClassName('modal-add-btn')[0];
		if(updateBtn.innerHTML == 'Update'){
			console.log('Updating')
			data_modal.forEach(function(ele){
				if(ele.id == currentEdit.id){
					ele.name = $('modal_name').value;
					ele.number = $('modal_number').value;
				}
			});
		} else if(updateBtn.innerHTML == 'Add'){
			console.log('Adding');
			var ele = {};
			ele.name = $('modal_name').value;
			ele.number = $('modal_number').value;
			ele.id = data_modal.length + 1;
			data_modal.push(ele);
		}
		
		closeModal(e.detail);
		render(data_modal);
	})

	function render(model){
		$('contact_view').innerHTML = '';
		model.forEach(function(element) {
			var item = `
                <div class="profile-icon male noclick"></div>
                <div class="details noclick">
                    <p class="name">`+element.name+`</p>
                    <p class="number">`+element.number+`</p>
                </div>
				<div class="id hide">`+element.id+`</div>
                <div class="delete-btn btn icon" onclick="document.dispatchEvent(new CustomEvent('delete'), {'detail': this})"></div>`;

			var ele = document.createElement('div');

			ele.classList = 'item-wrapper btn';

			ele.onclick = function(){
				document.dispatchEvent(new CustomEvent('edit', {'detail': ele}));
			}
			
			ele.innerHTML = item;

			$('contact_view').appendChild(ele);

			$('count').innerHTML = model.length;
		}, this);
	}

	render(data_modal);
}());