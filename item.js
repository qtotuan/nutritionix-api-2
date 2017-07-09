class Item {
  constructor(data) {
    this.itemId = data.item_id,
    this.name = data.item_name,
    this.brandName = data.brand_name,
    this.servingSize = data.nf_serving_size_qty,
    this.servingSizeUnit = data.nf_serving_size_unit,
    this.calories = data.nf_calories,
    this.fat = data.nf_total_fat,
    this.carbs = data.nf_total_carbohydrate,
    this.protein = data.nf_protein
  }

  render() {
    let html = `<div>`
    html += `<h1>Nutrition Facts</h1>`
    html += `<p>${this.name} (${this.brandName})</p>`
    html += `<p>Serving Size: ${this.servingSize} ${this.servingSizeUnit}</p>`
    html += `<p><strong>Calories</strong> ${this.calories} g</p>`
    html += `<p><strong>Fat</strong> ${this.fat} g</p>`
    html += `<p><strong>Carbohydrates</strong> ${this.carbs} g</p>`
    html += `<p><strong>Protein</strong> ${this.protein} g</p>`
    html += `</div>`
    return html
  }
}
