/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Sketches = () => {
  const { sketch } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="sketch">
      <Container>
        <div className="project-wrapper">
          <Title title="Sketches" />
          {sketch.map((sketches,index) => {
            const { title, info, info2, img, img1, title1} = sketches;

            return (
              <Row key={index}>
                {/* <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col> */}
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                          // eslint-disable-next-line react/jsx-indent-props
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img1} />
                        </div>
                      </Tilt><br />
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title1 || 'Project Title'}</h3>
                        <div>
                          <p className="mb-4">{info2 || ''}</p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Col> 
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                          // eslint-disable-next-line react/jsx-indent-props
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </Tilt>
                      <br />
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Sketches;
