import { ChangeEvent, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import styled from "styled-components";

type FormProp = {
  btnAlign?: "center" | "flex-start";
  width?: "long" | "short";
};

const Form = (props: FormProp) => {
  const { btnAlign = "flex-start", width = "short" } = props;
  const [inputEmail, setInputEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState({
    valid: true,
    errorText: "",
  });

  function inputEmailOnchange(e: ChangeEvent<HTMLInputElement>) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const value = e.target.value.trim();
    setInputEmail(value);

    if (value.length > 3) {
      const isEmailValid = regex.test(value)
        ? setIsEmailValid({ valid: true, errorText: "" })
        : setIsEmailValid({
            valid: false,
            errorText: "Please enter a valid email address",
          });
      return isEmailValid;
    }

    return setIsEmailValid({ valid: false, errorText: "Email is required!" });
  }

  return (
    <FormWrapper $data={{ inputEmail, isEmailValid, btnAlign, width }}>
      <div className="input">
        <label htmlFor="DemoEmail">Email address (Demo Only)</label>
        <input
          autoComplete="email"
          id="DemoEmail"
          onChange={inputEmailOnchange}
          value={inputEmail}
          type="email"
          name="email"
        />

        <small>
          <MdOutlineCancel /> &nbsp; {isEmailValid.errorText}
        </small>
      </div>

      <span className="f items-center justify-center">
        <small>Let's Get Started</small>
        <MdArrowForwardIos className="icon" />
      </span>
    </FormWrapper>
  );
};

export default Form;

type WrapperProp = {
  $data: {
    inputEmail: string;
    isEmailValid: { valid: boolean; errorText: string };
    btnAlign: "center" | "flex-start";
    width: "long" | "short";
  };
};

const FormWrapper = styled.form<WrapperProp>`
  width: ${({ $data }) =>
    $data.width === "long"
      ? "clamp(230px, 70vw, 800px)"
      : "clamp(230px, 70vw, 600px)"};
  margin-top: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;

  .input {
    position: relative;
    width: 100%;

    label {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 15px;
      color: #ffffff;
      transition: all 0.3s linear;
      visibility: ${({ $data }) => ($data.inputEmail ? "hidden" : "visible")};
      font-weight: 500;
    }

    input {
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 5px;
      font-size: 16px;
      padding: 0px 15px;
      position: relative;
    }

    small {
      position: absolute;
      bottom: -23px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: ${({ theme }) => theme.primaryRed};
      visibility: ${({ $data }) =>
        $data.isEmailValid.valid ? "hidden" : "visible"};
    }
  }

  &:has(input:focus) label {
    font-size: 11px;
    top: 20%;
    font-size: 11px;
    visibility: visible;
  }

  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    align-self: ${({ $data: { btnAlign } }) => btnAlign};
    background-color: ${({ theme }) => theme.primaryRed};
    color: inherit;
    width: 160px;
    margin-top: 10px;
    height: 40px;
    padding: 0px 10px;
    border-radius: 5px;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: ${({ theme }) => theme.hoverRed};
    }

    small {
      font-size: clamp(16px, 2vw, 20px);
    }
    .icon {
      font-size: clamp(16px, 2vw, 20px);
    }
  }

  @media screen and (min-width: 640px) {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;

    .input {
      input {
        height: 60px;
      }
    }

    span {
      margin-top: 0px;
      height: 60px;
      width: 300px;

      small {
        font-weight: 900;
      }
    }
  }
`;
