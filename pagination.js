class Pagination {
  showNextButton() {
  	$("#pagination").append(`<li class="page-item"><a class="page-link" href="#" id="next-button">Next</a></li>`)
  	$("#next-button").on("click", e => {
  		e.preventDefault()
  		currentPageNumber += 1
  		getItemData(currentSearchTerm, showResults, 20 * (currentPageNumber - 1))
  	})
  }

  showPreviousButton() {
  	$("#pagination").append(`<li class="page-item"><a class="page-link" href="#" id="previous-button">Previous</a></li>`)
  	$("#previous-button").on("click", e => {
  		e.preventDefault()
  		currentPageNumber -= 1
  		getItemData(currentSearchTerm, showResults, 20 * (currentPageNumber - 1))
  	})
  }

  showPageNumberButton(total) {
  	for (let i = 1; i <= 3; i++) {
  		// check if there are still enough results left for last page
  		if (total - 20 * currentPageNumber <= 0) {
  			return
  		}
  		let pageNumber = currentPageNumber + i
  		$("#pagination").append(`<li class="page-item"><a class="page-link" href="#" id="page${pageNumber}" data-page-number="${pageNumber}">${pageNumber}</a></li>`)
  		$(`#page${pageNumber}`).on("click", function(e) {
  			e.preventDefault()
  			currentPageNumber = $(this).data("pageNumber")
  			console.log("Current page number: " + currentPageNumber);
  			console.log("20 * (currentPageNumber - 1): " + (20 * (currentPageNumber - 1)));
  			getItemData(currentSearchTerm, showResults, 20 * (currentPageNumber - 1))
  		})
  	}
  }

  render(total) {
  	$("#pagination").empty()
  	if (currentPageNumber > 1) {
  		this.showPreviousButton()
  	}
  	if (total > 80) {
  		this.showPageNumberButton(total)
  	}
    if (currentPageNumber * 20 < total) {
      this.showNextButton()
    }
  }
}
