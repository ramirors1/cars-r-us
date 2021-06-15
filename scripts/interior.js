import { getInterior, setInterior } from "./database.js"

const inter = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
         //   window.alert(`User chose ${event.target.value}`)
            setInterior(parseInt(event.target.value))
        }
    }
)

export const interior = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = inter.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.type}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}
