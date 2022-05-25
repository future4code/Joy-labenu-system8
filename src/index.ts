import { app } from "./app";
import { postClass, } from "./endpoints/postClass"
import { getClass } from "./endpoints/getClass"
import { postStudent } from "./endpoints/postStudent"
import { updateStudent } from "./endpoints/updateStudent"
import { postDocente } from "./endpoints/Docentes/PostDocente";
import { getDocentes } from "./endpoints/Docentes/GetDocentes";
import { putDocente } from "./endpoints/Docentes/PutDocente";



app.post("/class", postClass)

app.get("/class/active", getClass)

app.put("/class/:id/module", )

app.post("/student", postStudent) 
  
app.get("/student", )  

app.put("/student/:id/class", updateStudent)

app.post("/teacher", postDocente)  

app.get("/teacher", getDocentes)

app.put("/teacher/:id/class", putDocente)