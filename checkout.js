/*this function filters through the selectSalesItems function to retrieve the items with discounts*/
function selectSaleItems(items) { 
  return items.filter((discountYes) => {
    return discountYes.discount > 0;
  }) 
}


module.exports = selectSaleItems
