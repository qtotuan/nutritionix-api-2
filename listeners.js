function submitButtonListener() {
	$("#submit-button").on('click', e => {
	  let searchTerm = $("#searchTerm").val()
		currentSearchTerm = searchTerm
	  getItemData(searchTerm, showResults)
	})
}
