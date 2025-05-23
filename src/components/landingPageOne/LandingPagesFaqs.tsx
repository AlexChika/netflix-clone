import styled from "styled-components";
import Fags from "../general/Fags";
import Form from "../general/Form";
import { faqs } from "../../utils/data";

const LandingPageFaqs = () => {
  return (
    <Wrapper>
      <h2 className="heading">Frequently Asked Questions</h2>

      {faqs.map((faq, ind) => {
        return <Fags key={ind} bg="#3a3a3a" hover="#686767" faq={faq} />;
      })}

      <div className="faq__footer">
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <Form />
      </div>
    </Wrapper>
  );
};

export default LandingPageFaqs;

const Wrapper = styled.div`
  border-bottom: 8px solid #222;
  background-color: #000000;
  align-items: center;
  color: white;
  text-align: center;
  height: max-content;
  padding: 50px 20px;

  .heading {
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 815px;
  }

  .faq__footer {
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      margin: 0 auto;
      margin-top: 60px !important ;
    }
  }
`;
