import styled from 'styled-components';
import { StyledLayout } from '../../styles';
import Toggle from '../../components/Toggle/Index';
import { AnimateSharedLayout } from 'framer-motion';

import { fadeAnimation } from '../../utils/animations';
import { useScroll } from '../../utils/hooks/useScroll';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={fadeAnimation}
      animate={controls}
      initial={'hidden'}
      ref={element}
    >
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              eligendi ullam tempora quae suscipit veritatis libero laboriosam
              eos voluptas incidunt.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              sunt!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              sunt!
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              sunt!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
