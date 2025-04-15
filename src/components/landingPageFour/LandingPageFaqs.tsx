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
          <Fags width="full" key={ind} bg="#3a3a3a" hover="#686767" faq={faq} />
        );
      })}

      <div className="faq__footer">
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <Form width="long" />
      </div>
    </Wrapper>
  );
};

export default LandingPageFaqs;

const Wrapper = styled.div`
  background-color: #000000;
  align-items: center;
  color: white;
  text-align: center;
  height: max-content;
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;

  .heading {
    margin: 0 auto;
    margin-bottom: 15px;
    text-align: left;
    font-size: clamp(18px, 1.5vw, 26px);
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
    }
  }
`;
