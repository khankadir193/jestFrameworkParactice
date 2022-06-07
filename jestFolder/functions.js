const functions = {
    add: (num1,num2)=>num1+num2,
    subtraction: function(num1,num2){
        return num1-num2;
    },
    isNull: ()=> null,
    checkValue: (x)=> x,
    createUser: ()=>{
        const user = {
            firstName: "abdul",
            middleName: "kadir"
        }
        user["lastName"] = "Khan";
        return user;
    } 
}

module.exports = functions;