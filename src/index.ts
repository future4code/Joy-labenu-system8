import { app } from "./app";
import { postClass } from "./endpoints/postClass"


app.post("/class", postClass)

app.get("/class/active", )

app.put("/class/:id/module", )

app.post("/student", ) 
 
app.get("/student", )

app.put("/student/:id/class", )

app.post("/teacher", )  

app.get("/teacher", )

app.post("/teacher/:id/class", )