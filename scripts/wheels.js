import { getWheels, setWheels } from "./database.js"

const rims = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            //window.alert(`User chose  ${event.target.value}`)
            setWheels(parseInt(event.target.value))
        }
    }
)

export const wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = rims.map(wheels => {
        return `<li>
            <input type="radio" name="wheels" value="${wheels.id}" /> ${wheels.size}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}
