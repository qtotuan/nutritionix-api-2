class List {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  render(data) {
    $("#results-number").html(`(${data.total} results)`)
  	let html = ""
  	data.hits.forEach( function(item_hash) {
  		html += `<ul>`
  		html += `<li><a href="#" data-item-id="${item_hash.fields.item_id}" onclick="getNutritionData(this, showItem)">${item_hash.fields.item_name} (${item_hash.fields.brand_name})</a></li>`
  		html += `</ul>`
  	})
  	return html
  }

}
