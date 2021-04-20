<<<<<<< HEAD

# otp-manager-node

This is an npm package https://www.npmjs.com/package/otp-manager-node

How to use

```
//import
import otpManager from 'otp-manager-node';

//usuage

//generating otp
const generateOtp = async (){
    const sendOtp = await otpManager.generateOTP(<email>);// sends otp to the specified email and return "created" when it send mail to the specified email
    console.log(sendOtp)

//verifing otp
const verigyOtp = async (){
    const verifyOtp = await otpManager.verifyOTP(email, otp); //verifies otp.
    console.log(verifyOtp)
}

```

when we verify OTP then the function returns a responce {status:<true/false>}
if OTP matches the response.status will return true else it will return false
