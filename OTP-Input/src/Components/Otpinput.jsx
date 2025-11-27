import { useEffect, useRef, useState } from "react";
import "../App.css"

const OtpInput = () => {
    let OTP_LENGTH = 4;

    const [otpArr, setOtpArr] = useState(new Array(OTP_LENGTH).fill(""))

    const [successMsg, setSuccessMsg] = useState("")

    const inpRef = useRef([])

    const handleChange = (e, ind) => {
        let val = e.target.value;
        // console.log(val);
        let actualDigit = val.trim().slice(-1);
        if (!actualDigit.match(/^[0-9]{1}$/)) {
            return;
        }
        // console.log(e.target.value)
        const newOtpArr = [...otpArr]
        newOtpArr[ind] = actualDigit
        setOtpArr(newOtpArr)

        if (newOtpArr.includes("")) {
            setSuccessMsg("");
        }

        if (newOtpArr.length === OTP_LENGTH && !newOtpArr.includes("")) {
            setSuccessMsg("OTP Validated Successfully!")
        }
        inpRef.current?.[ind + 1]?.focus()
    }

    const handleKeyDown = (e, ind) => {
        // console.log("handle key down called");
        if (e.key !== "Backspace" || ind < 0) return;
        if (e.key === "Backspace") {
            const newOtpArr = [...otpArr]
            newOtpArr.splice(ind, 1, "")
            setOtpArr(newOtpArr)
            setSuccessMsg("")
            inpRef.current?.[ind - 1]?.focus()
        }
    }

    const handlePaste = (e, ind) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData("Text")
        // console.log(pastedData);
        if (!/^[0-9]+$/.test(pastedData)) {
            alert("Please paste only numeric data")
            return;
        }

        const ArrPastedData = pastedData.trim().split("").slice(0, OTP_LENGTH)
        console.log(ArrPastedData);

        const newOtpArr = [...otpArr]
        let currInd = ind
        ArrPastedData.forEach((digit, index) => {
            if (currInd >= OTP_LENGTH) return;
            newOtpArr[currInd] = digit
            currInd++;
        })
        setOtpArr(newOtpArr)

        if (currInd >= OTP_LENGTH) {
            inpRef.current?.[OTP_LENGTH - 1]?.focus()
            if (newOtpArr.length === OTP_LENGTH && !newOtpArr.includes("")) {
                setSuccessMsg("OTP Validated Successfully!")
            }
        }

        inpRef.current?.[currInd]?.focus()

    }

    useEffect(() => {
        inpRef.current?.[0]?.focus()
    }, [])

    return (
        <div>
            <div className="otp-input-box">
                {
                    otpArr.map((otp, index) => {
                        return (
                            <input type="text" key={index} value={otp} onChange={(e) => handleChange(e, index)} ref={(ele) => inpRef.current[index] = ele} onKeyDown={(e) => handleKeyDown(e, index)} onPaste={(e) => handlePaste(e, index)} aria-label="Otp input" pattern="[0-9]"></input>
                        )
                    })
                }
            </div>

            <div className="success-msg-div" aria-live="assertive" aria-atomic="true">
                {successMsg && <h3 style={{ color: "green" }}  >{successMsg}</h3>}
            </div>
        </div>
    )
}

export default OtpInput