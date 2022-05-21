import { app } from "./app";
import { postClass } from "./endpoints/postClass"
import { getClass } from "./endpoints/getClass"
import { postDocente } from "./endpoints/Docentes/PostDocente";
import { getDocentes } from "./endpoints/Docentes/GetDocentes";


app.post("/class", postClass)

app.get("/class/active", getClass)

app.put("/class/:id/module", )

app.post("/student", ) 
  
app.get("/student", )  

app.put("/student/:id/class", )

app.post("/teacher", postDocente)  

app.get("/teacher", getDocentes)

app.post("/teacher/:id/class", )