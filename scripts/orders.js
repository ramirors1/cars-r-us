import { getCustomOrders } from "./database.js"
import {getPaintColor} from "./database.js"


const buildOrderListItem = (order) => {
    const paintColor = getPaintColor()

   const foundPaintColor = paintColor.find(
      (paintColor) => {
        if (paintColor.id === order.paintColorId){
        return true    
        }
    }
   )
   const totalCost = foundPaintColor.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
       currency: "USD"
    })
  return `<li>
    Order #${order.id} cost ${costString} was placed on ${order.timestamp}
    </li>`
}

export const orders = () => {
    const orders = getCustomOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    

    return html
}
