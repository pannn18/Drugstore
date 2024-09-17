import Express from "express";
import medicineRoute from "./Router/medicineRoute"

const app = Express()
app.use(Express.json())
/** untuk membaca data json */

/** prefix for medicine route */
app.use(`/medicine`, medicineRoute)

const PORT = 1992
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})