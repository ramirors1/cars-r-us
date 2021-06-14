import { paintcolor } from "./paintcolor.js"
import { interior } from "./interior.js"
import { technology } from "./technology.js"
import { wheels } from "./wheels.js"
//import { orders } from "./orders.js"
//import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (e) => {
        if (e.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


//document.addEventListener("stateChanged", event => {
//  console.log("State of data has changed. Regenerating HTML...")
//renderAllHTML()
//})

export const cars = () => {
    return `
        <h1>Cars-R-Us</h1>
        <article class="choices">
            <section class="choices__paintColor options">
                <h2>Paint Color</h2>
                ${paintColor()} 
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interior()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${technology()}
            </section>
            <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${wheels()}
            </section>

        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Order</h2>
            ${Orders()}
        </article>
    `
}