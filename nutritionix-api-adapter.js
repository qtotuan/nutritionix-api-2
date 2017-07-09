console.log("From the file");

const appId = "67be8dd5"
const appKey = "2ccded816bad80964973fe15d5b43332"

function getItemData(searchTerm, callback, offset = 0) {
  $.ajax({
    url: `https://api.nutritionix.com/v1_1/search/`,
    type: 'post',
    data: {
      "appId": appId,
      "appKey": appKey,
      "query": searchTerm,
      "offset": offset,
      "limit": 20
    },
    success: function(data) {
      console.log(data);
      callback(data)
    }
  })
}


function getNutritionData(element, callback) {
  // debugger
	$.ajax({
    url: `https://api.nutritionix.com/v1_1/item?id=${element.dataset.itemId}&appId=${appId}&appKey=${appKey}`,
    type: 'get',
    success: function(data) {
      console.log(data);
      callback(data)
    }
  })
}
