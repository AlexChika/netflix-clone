import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";

type Faq = {
  question: string;
  answer: string;
};

type AnswerProp = {
  $height?: string;
  $bg?: string;
};

type QuestionProp = {
  $show?: boolean;
  $bg?: string;
  $hover?: string;
};

type FaqProps = {
  faq: Faq;
  bg?: string;
  hover?: string;
  width?: "auto" | "full";
  questionClassName?: string;
  answerClassName?: string;
};

function Fags(faqProps: FaqProps) {
  const {
    faq: { question, answer },
    bg,
    hover,
    questionClassName,
    answerClassName,
    width = "auto",
  } = faqProps;
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState("");
  const ParagraphRef = useRef<null | HTMLParagraphElement>(null);

  useEffect(() => {
    function call() {
      if (ParagraphRef.current)
        setHeight(
          `${ParagraphRef.current.getBoundingClientRect().height + 60}px`
        );
    }

    call(); //initial set height on load

    window.addEventListener("resize", call);
    return () => window.removeEventListener("resize", call);
  }, []);

  //  .........
  return (
    <FagsWrapper $width={width}>
      <Question
        className={questionClassName}
        $show={show}
        $bg={bg}
        $hover={hover}
        onClick={() => setShow(!show)}
      >
        <p>{question}</p>

        <span>
          <BsPlusLg className="icon" />
        </span>
      </Question>

      <Answer
        $height={height}
        $bg={bg}
        className={`${answerClassName} ${show ? "show" : "hide"}`}
      >
        <p ref={ParagraphRef}>{answer}</p>
      </Answer>
    </FagsWrapper>
  );
}

export default Fags;

const Question = styled.div<QuestionProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 7px 15px;
  background-color: ${({ $bg }: QuestionProp) => $bg};
  margin-bottom: 1px;
  transition: background-color 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: ${({ $hover }: QuestionProp) => $hover};
  }

  p,
  span {
    font-size: clamp(18px, 2.6vw, 20px);
    font-weight: 400;
  }

  p {
    text-align: left;
    margin-right: 5px;
    width: 80%;
    justify-self: flex-start;
  }

  span {
    display: block;
    margin-left: 5px;
    padding: 5px;
    cursor: pointer;
    transition: transform 0.25s linear;
    transform: ${({ $show }: QuestionProp) =>
      $show ? `rotate(45deg)` : `rotate(0)`};
  }

  .icon {
    transform: scale(1.5);
  }

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    height: 80px;

    p,
    span {
      font-size: clamp(16px, 2.7vw, 25px);
    }
  }
`;

const Answer = styled.div<AnswerProp>`
  background-color: color-mix(
    in srgb,
    ${({ $bg }: AnswerProp) => $bg} 80%,
    transparent
  );
  overflow: hidden;
  transition: height 0.3s linear;

  p {
    font-size: clamp(15px, 2.2vw, 18px);
    text-align: left;
    line-height: 35px;
    font-weight: 400;
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &.show {
    height: ${({ $height }: AnswerProp) => $height};
    padding: 10px 15px;

    p {
      visibility: visible;
      opacity: 1;
    }
  }

  &.hide {
    padding: 0;
    height: 0;
    p {
      visibility: hidden;
      opacity: 0;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    &.show {
      padding: 10px 30px;
    }

    p {
      font-size: 20px;
    }
  }
`;

const FagsWrapper = styled.div<{ $width: "auto" | "full" }>`
  width: ${({ $width }) =>
    $width === "auto" ? "clamp(270px, 100%, 1065px)" : "100%"};
  margin: 0 auto;
  margin-bottom: 10px;
`;
