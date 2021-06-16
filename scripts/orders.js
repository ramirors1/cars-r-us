import { getCustomOrders } from "./database.js"
import { getPaintColor } from "./database.js"
import { getInterior } from "./database.js"
import { getTechnology } from "./database.js"
import { getWheels } from "./database.js"

const buildOrderListItem = (order) => {
    const paintColor = getPaintColor()

   const foundPaintColor = paintColor.find(
      (paintColor) => {
        if (paintColor.id === order.paintColorId){
        return true    
        }
    }
   )
  //  let totalPaintCost = foundPaintColor.price
   
   const interior = getInterior()

   const foundInterior = interior.find(
      (interior) => {
        if (interior.id === order.interiorId){
        return true    
        }
    }
   )
  //  let totalInteriorCost = foundInterior.price

   const technology = getTechnology()

   const foundTechnology = technology.find(
      (technology) => {
        if (technology.id === order.technologyId){
        return true    
        }
    }
   )
  //  let totalTechnologyCost = foundTechnology.price
   
   const wheels = getWheels()

   const foundWheels = wheels.find(
      (wheels) => {
        if (wheels.id === order.wheelsId){
        return true    
        }
    }
   )
  //  let totalWheelsCost = foundWheels.price
  const totalCost = foundWheels.price + foundInterior.price + foundPaintColor.price + foundTechnology.price

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
