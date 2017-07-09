let currentSearchTerm = ""
let currentPageNumber = 1
let myPagination = new Pagination
let myList = new List

$(function() {
	submitButtonListener()
})


function showResults(dataFromApi) {
	$("#search-results").empty()
	myPagination.render(dataFromApi.total)

	let html = myList.render(dataFromApi)
	$("#search-results").append(html)
}

function showItem(dataFromApi) {
	let item = new Item(dataFromApi)
	updateModal(item)
	$("#myModal").modal("show")
}
