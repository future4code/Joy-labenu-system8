import BaseDatabase from "../../data/connection";

class CreateClass extends BaseDatabase {

    public async createClass (name:string, email:string, password:string ) {

        const result = await this.connection("labecommerce_users").insert({
            name: name,
            email: email,
            password: password,
        })
        
    }
}


