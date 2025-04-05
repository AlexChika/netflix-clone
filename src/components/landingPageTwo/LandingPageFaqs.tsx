import styled from "styled-components";
import Fags from "../general/Fags";
import Form from "../general/Form";
import { faqs } from "../../utils/data";

const LandingPageFaqs = () => {
  return (
    <Wrapper className="center">
      <h2 className="heading">Frequently Asked Questions</h2>

      {faqs.map((faq, ind) => {
        return (
          <Fags key={ind} bg="rgba(19, 33, 68, 1)" hover="#162c64" faq={faq} />
        );
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
  max-width: 1065px;
  color: white;
  height: max-content;
  padding: 50px 20px;

  .heading {
    margin-bottom: 20px;
    font-size: clamp(1.8rem, 5vw, 4rem);
    font-weight: 800;
  }

  .faq__footer {
    display: flex;
    flex-direction: column;

    h3 {
      margin-top: 20px !important ;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0px 50px 30px 50px;
  }

  @media screen and (min-width: 1065px) {
    padding: 0px 60px 30px 60px;
  }

  @media screen and (min-width: 1300px) {
    padding: 0px;
  }
`;
