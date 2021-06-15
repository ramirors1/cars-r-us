import { getTechnology, setTechnology } from "./database.js"

const tech = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            //window.alert(`User chose package ${event.target.value}`)
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const technology = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = tech.map(technology => {
        return `<li>
            <input type="radio" name="tech" value="${technology.id}" /> ${technology.tech}
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}
