document.getElementById("btn-send-otp").addEventListener("click", SendOTP);

let otpCode; 

function SendOTP() {
    const email = document.getElementById("email");
    const otpVerify = document.querySelector(".verify");

    if (!email.value) {
        alert("Please enter a valid email address.");
        return;
    }

    let otpCode = Math.floor(1000 + Math.random() * 9000); 
    let emailBody = `<h2>Your OTP is: <strong>${otpCode}</strong></h2>`;

    Email.send({
        SecureToken: "1fc48170-3bf7-4e70-96b2-192ac3c87a22",
        To: email.value,
        From: "pooja5102870@gmail.com",
        Subject: "OTP Verification",
        Body: emailBody
    }).then((message) => {
        if (message === "OK") {
            alert("OTP sent to "+email.value);
            otpVerify.style.display = "flex";
            let otpinput=document.getElementById("otp-input");
            let otpbtn=document.getElementById("btn-verify-otp");
            document.getElementById("btn-verify-otp").addEventListener("click", function () {
                const otpInput = document.getElementById("otp-input").value;
                if (otpInput == otpCode) {
                    alert("Email verified successfully!");
                    document.querySelector(".verify").style.display = "none";
                    document.getElementById("email").value = "";
                    document.getElementById("otp-input").value = "";
                } else {
                    alert("Invalid OTP. Please try again.");
                }
            });
        } else {
            alert("Failed to send OTP. Please check your SecureToken or email settings.");
        }
    });
}


