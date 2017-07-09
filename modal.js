function updateModal(item) {
  $(".modal-title").html(`${item.name} (${item.brandName})`)
  $(".modal-body").html(item.render())
}
