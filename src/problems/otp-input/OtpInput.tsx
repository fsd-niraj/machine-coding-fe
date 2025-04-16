import { useEffect, useRef, useState } from "react";
import "./index.css"

const OtpInput = ({
  length,
  allowAlphabets
}: {
  length?: number
  allowAlphabets?: boolean
}) => {
  const OTP_INNPUT_LENGTH = length || 5;
  const [input, setInput] = useState(new Array(OTP_INNPUT_LENGTH).fill(""));
  const inputRef = useRef<any>([]);
  const [otp, setOtp] = useState("")

  useEffect(() => {
    inputRef.current[0]?.focus()
  }, [])

  const handleInput = (value: any, i: number) => {
    const trimmedValue = value.trim()
    if (!allowAlphabets && isNaN(trimmedValue)) return;
    const copyArr = [...input];
    copyArr[i] = trimmedValue.slice(-1)
    setInput(copyArr)
    trimmedValue && inputRef.current[i + 1]?.focus()
    if (i === input.length - 1) {
      setOtp(copyArr.join(""))
    }
  }

  const onDelete = (keyPressed: string, value: number, index: number) => {
    if (!value && keyPressed === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  }

  return (
    <>
      <div>OtpInput</div>
      {input.map((f, i) =>
        <input type="text"
          className="otp-input"
          key={i}
          value={input[i]}
          onChange={(e) => handleInput(e.target.value, i)}
          ref={(input) => {
            if (input) inputRef.current[i] = input
          }}
          onKeyDown={(e) => onDelete(e.key, input[i], i)}
        />
      )}
      {otp && <p>otp: {otp}</p>}
    </>
  )
}
export default OtpInput