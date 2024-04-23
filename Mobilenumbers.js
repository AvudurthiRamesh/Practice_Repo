for (let i = 0; i < 10; i++) {

    let randomMobile = "90" + Math.random().toString().slice(2,10);
    console.log("mobile number: "+randomMobile);
    let pincode = "5" + Math.random().toString().slice(2,7);
    console.log("Pincode: "+pincode)
   let price= Math.random().toPrecision().slice(2,9)
   console.log("Price: "+price)
    

}