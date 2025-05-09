import styled from "styled-components";
import Fags from "../general/Fags";
import Form from "../general/Form";
import { faqs } from "../../utils/data";

const LandingPageFaqs = () => {
  return (
    <Wrapper>
      <h2 className="heading">Frequently Asked Questions</h2>

      {faqs.map((faq, ind) => {
        return (
          <Fags
            wrapperClassName="faqs__wrapper"
            questionClassName="question"
            answerClassName="answer"
            width="full"
            key={ind}
            bg="#3a3a3a"
            hover="#515151"
            faq={faq}
          />
        );
      })}

      <div className="faq__footer">
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <Form type="shade" rounded="lg" btnAlign="center" />
      </div>
    </Wrapper>
  );
};

export default LandingPageFaqs;

const Wrapper = styled.div`
  align-items: center;
  color: white;
  text-align: center;
  height: max-content;
  padding: 50px 20px;
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;

  .heading {
    margin-bottom: 20px;
    text-align: left;
    font-size: clamp(18px, 1.5vw, 26px);
    font-size: clamp(18px, 2.4vw, 40px);
    font-weight: 800;
  }

  .faqs__wrapper {
    margin-bottom: 5px;
  }

  .question {
    border-radius: 20px;
    border: 1px solid #676767;
  }

  .answer {
    border-radius: 20px;
    margin-top: 5px;
  }

  .faq__footer {
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      margin: 0 auto;
      text-align: left;
      margin-top: 60px !important ;
      font-weight: 600;
      font-size: 18.72px;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 87%;
  }
`;
