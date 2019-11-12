function sendData() {
	var data = {
		name: form.username.value,
		date: form.date.value,
		gender: form.gender.value,
		cause: form.cause.value,
		films: [],
		volume: form.volume.value,
		head: form.head.value
	};

	if (form.horror.checked) {
		data.films.push(form.horror.value);
	}

	if (form.comedy.checked) {
		data.films.push(form.comedy.value);
	}

	if (form.adventure.checked) {
		data.films.push(form.adventure.value);
	}

	if (form.drama.checked) {
		data.films.push(form.drama.value);
	}

	var results = localStorage.getItem('results') || "[]";
	results = JSON.parse(results);
	results.push(data);
	localStorage.setItem('results', JSON.stringify(results));
	alert("Отправлено");
}

function reset() {
    document.getElementsByClassName("form").reset();
}

(function add() {
	var resultObj = JSON.parse(localStorage.getItem('results'))
		for(var i in resultObj) {
			var tRow = [];
          	tRow[i]=document.createElement('tr');
          	tRow[i].id = 'row' + String(i);
          	resultTable.appendChild(tRow[i]);

			var option = [];
          	option[i] = document.createElement('option');
          	option[i].innerHTML = resultObj[i]['name'];
          	names.appendChild(option[i]);

			for(var key in resultObj[i]) {
				var tdRow=document.createElement('td');
				tdRow.innerHTML = resultObj[i][key];
				document.getElementById('row' + String(i)).appendChild(tdRow);
	 		}
		}
		var resetButton = document.getElementById('resetButton');
		resetButton.addEventListener('click', clearTable);

		function clearTable() {
			localStorage.clear();
			window.location.reload();
		}
	}
()
);