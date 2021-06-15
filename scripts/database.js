const database = {
    paintColor: [
        { id: 1, color: "Silver", price: 1000 },
        { id: 2, color: "Midnight Blue", price: 1500 },
        { id: 3, color: "Firebrick Red", price: 1500 },
        { id: 4, color: "Spring Green", price: 1000}
    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 500 },
        { id: 2, type: "Charcoal Fabric", price: 750 },
        { id: 3, type: "White Leather", price: 1500 },
        { id: 4, type: "Black Leather", price: 1500 }
    ],
    technology: [
        { id: 1, tech: "Basc Package (basic sound system)", price: 500 },
        { id: 2, tech: "Navigation Package (includes integrated navigaion controls", price: 1000 },
        { id: 3, tech: "Visibility Package (includes sde and rear cameras", price: 1000 },
        { id: 4, tech: "Ultra Package (includes navigation and visibility packages", price: 2000 }
    ],
    wheels: [
        { id: 1, size: "17-inch Pair Radial", price: 1000 },
        { id: 2, size: "17-inch Pair Radial Black", price: 1250 },
        { id: 3, size: "18-inch Pair Spoke Silver", price: 2000 },
        { id: 4, size: "18-inch Pair Spoke Black", price: 2000}
    ],
    
   customOrders: [
       {
         id: 1,
         paintColorId: 3,
         interiorId: 2,
         technologyId: 3,
         wheelsId: 2,  
         timestamp: 1614659931693
       }
        ],
    
    
    orderBuilder: [
        { 
          id: {},
          paintColor: {}, 
          interior: {},
          technology: {},
          wheels: {}
        }
    ]
}
    
export const getPaintColor = () => {
    return database.paintColor.map(color => ({...color}))
}
export const getInterior = () => {
    return database.interior.map(type => ({...type}))
}   
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}   
export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}   
export const getCustomOrders = () => {
   return database.customOrders.map(customOrders => ({...customOrders}))
}   
export const setPaintColor = (id) => {
  database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
  database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
  database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
  }
export const addCustomOrder = () => {
    
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}