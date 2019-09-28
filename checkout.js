/*this function filters through the selectSalesItems function to retrieve the items with discounts*/
function selectSaleItems(items) { 
  let results = items.filter((discountYes) => {
    return discountYes.discount !== 0 && discountYes.discount !== undefined
  }) 
  return results;
}


module.exports = selectSaleItems
