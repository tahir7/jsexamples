var name = "Ahmad"

let abc = {

    name: "Ali",

    welcomeMsg: function () {

            return "Welcome " + this.name

            },

    welcomeMsgArrow: () => {

            return "Welcome " + this.name

        } 
}

let msg = abc.welcomeMsg()
console.log(msg)

msg = abc.welcomeMsgArrow()
console.log(msg)
