import { getInterior, setInterior } from "./database.js"

const styles = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            //window.alert(`User chose type ${event.target.value}`)
            setInterior(parseInt(event.target.value))
        }
    }
)

export const interior = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interior.map(interior => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}
© 2021 GitH