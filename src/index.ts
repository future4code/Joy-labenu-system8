import { app } from "./app";
import { postClass, } from "./endpoints/postClass"
import { getClass } from "./endpoints/getClass"
import { postStudent } from "./endpoints/postStudent"
import { updateStudent } from "./endpoints/updateStudent"


app.post("/class", postClass)

app.get("/class/active", getClass)

app.put("/class/:id/module", )

app.post("/student", postStudent) 
  
app.get("/student", )  

app.put("/student/:id/class", updateStudent)

app.post("/teacher", )  

app.get("/teacher", )

app.post("/teacher/:id/class", )