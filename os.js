const os =  require("os")
const user = os.userInfo()
 console.log(user)
 console.log(os.uptime())
 const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmem: os.totalmem(),
    frrmem : os.freemem()
 }
 console.log(currentOS)