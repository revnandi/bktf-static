import React from 'react'
import * as styles from './main.module.scss';

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Trans, useTranslation, I18nextContext } from 'gatsby-plugin-react-i18next';
import { Parallax } from 'react-scroll-parallax';
import { NavigationWaypoint } from '../typings/declarations';
import { Waypoint } from 'react-waypoint';
import { StaticImage } from "gatsby-plugin-image";
import { useScrollYPosition } from '../hooks/hooks';
import Content from './content';
import Timetable from './timetable';
import SectionTitle from './sectiontitle';
import Slider from './slider';

import doodle_1 from '../images/BKTF_TA_pictograms_fin-52.svg';
import doodle_2 from '../images/BKTF_TA_pictograms_fin-56.svg';
import doodle_3 from '../images/BKTF_TA_pictograms_fin-01.svg';
import doodle_4 from '../images/BKTF_TA_pictograms_fin-05.svg';
import doodle_5 from '../images/BKTF_TA_pictograms_fin-40.svg';
import doodle_6 from '../images/BKTF_TA_pictograms_fin-48.svg';
import doodle_7 from '../images/BKTF_TA_pictograms_fin-24.svg';
import doodle_8 from '../images/BKTF_TA_pictograms_fin-49.svg';
import doodle_9 from '../images/BKTF_TA_pictograms_fin-07.svg';
import doodle_10 from '../images/BKTF_TA_pictograms_fin-59.svg';
import doodle_11 from '../images/BKTF_TA_pictograms_fin-46.svg';
import doodle_12 from '../images/BKTF_TA_pictograms_fin-42.svg';

import hollow_cloud from '../images/hollow_cloud.svg';

import cloud_1 from '../images/cloud1.svg';
import cloud_2 from '../images/cloud2.svg';
import cloud_3 from '../images/cloud3.svg';
import cloud_4 from '../images/cloud4.svg';
import cloud_5 from '../images/cloud5.svg';
import cloud_6 from '../images/cloud6.svg';
import cloud_7 from '../images/cloud7.svg';
import cloud_8 from '../images/cloud8.svg';
import cloud_9 from '../images/cloud9.svg';
import cloud_10 from '../images/cloud10.svg';

interface Props {
  passedFunction: (newWaypoint: NavigationWaypoint) => void;
}

const Main = ({ passedFunction }: Props) => {
  const context = React.useContext(I18nextContext);
  const {t} = useTranslation();
  const scrollY = useScrollYPosition();

  return (
    <main id="main" className={ styles.container }>
      <Waypoint onEnter={ function(props) {
        passedFunction('course');
        }}
        onLeave={ function(props) {
          passedFunction('entrance');
        }}
        fireOnRapidScroll={true}
      >
        <section>
          <Content>
            <Slider></Slider>
            <div id="course">
              <Trans>section_course_body</Trans>
            </div>
            <div style={ { position: 'relative' } }>
              <h1 style={ { fontSize: '0.937rem', fontWeight: '700' } }>
                <Trans>section_course_quote_text</Trans>
              </h1>
              <p style={ { fontSize: '0.937rem' } }>
                <strong>
                  <Trans>section_course_quote_name</Trans>
                </strong>
              </p>
              <img
                className={ styles.doodle }
                src={ doodle_1 }
                alt=""
                style={
                  {
                    position: 'absolute',
                    width: '9.5rem',
                    left: '32rem',
                    top: '-1rem'
                  }
                }
              />
              <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <Parallax y={[350, -300]}>
                    <div style={{ backgroundImage: `url(${cloud_1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '19.625rem', height: '5.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html:t('cloud_1') }}></div>
                </Parallax>
              </div>
            </div>
          </Content>
        </section>
      </Waypoint>
      <Waypoint onEnter={ function(props) {
        passedFunction('entrance');
        }}
        fireOnRapidScroll={true}
        topOffset="20%"
      >
      <div>
        <section id="entrance">
          <Content>
            <div style={ { position: 'relative' } }>
              <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <Parallax y={[350, -300]}>
                  <div id="cloud_eloado" style={{ backgroundImage: `url(${cloud_2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '25.625rem', height: '6.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:t('cloud_2') }}></div>
                </Parallax>
              </div>
              <img
                className={ styles.doodle }
                src={ doodle_2 }
                alt=""
                style={
                  {
                    position: 'absolute',
                    width: '10.25rem',
                    left: '12rem',
                    top: '-6.55rem'
                  }
                }
              />
              <img
                className={ styles.doodle }
                src={ doodle_3 }
                alt=""
                style={
                  {
                    position: 'absolute',
                    width: '10.25rem',
                    right: '7.5rem',
                    top: '-5.06rem'
                  }
                }
              />
              <hr style={ { height: '1px', margin: '12.25rem 0 1.75rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
            </div>
            <SectionTitle title={t('section_entrance_title')}/>
            <div dangerouslySetInnerHTML={{ __html:t('section_entrance_body_1') }}></div>
            <div className={ styles.dates } style={ { padding: '5rem 0 5rem 5rem', marginLeft: '-5rem', backgroundImage: `url(${hollow_cloud})`, backgroundRepeat: 'no-repeat' } }>
              <h2 className={ styles.datetitle } style={ { textTransform: 'uppercase', margin: '0 0 2rem 0' } }>
                <Trans>section_entrance_dates_title</Trans>
              </h2>
              <div style={ { display: 'flex', alignItems: 'center', fontSize: '1.312rem', fontWeight: '700', marginBottom: '1rem' } }>
                <h3 className={ styles.turn } style={ { margin: '0',textTransform: 'uppercase', marginRight: '0.5rem' } }><span style={ { borderRadius: '50%', border: '3px solid', width: '1.5em', display: 'inline-block', textAlign: 'center' } }><Trans>section_entrance_dates_number_1</Trans></span> <Trans>section_entrance_dates_name_1</Trans></h3>
                <div>→</div>
                <div className={ styles.turnsquare } style={ { border: '3px solid', padding: '3px', marginRight: '0.5rem' } }>
                  <Trans>section_entrance_dates_date_1</Trans>
                </div>
                <div className={ styles.turndays }>
                  <Trans>section_entrance_dates_days_1</Trans>
                </div>
              </div>
              <div style={ { display: 'flex', alignItems: 'center', fontSize: '1.312rem', fontWeight: '700' } }>
                <h3 className={ styles.turn } style={ { margin: '0', textTransform: 'uppercase', marginRight: '0.5rem' } }><span style={ { borderRadius: '50%', border: '3px solid', width: '1.5em', display: 'inline-block', textAlign: 'center' } }><Trans>section_entrance_dates_number_2</Trans></span> <Trans>section_entrance_dates_name_2</Trans></h3>
                <div>→</div>
                <div className={ styles.turnsquare } style={ { border: '3px solid', padding: '3px', marginRight: '0.5rem' } }>
                  <Trans>section_entrance_dates_date_2</Trans>
                </div>
                <div className={ styles.turndays }>
                  <Trans>section_entrance_dates_days_2</Trans>
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html:t('section_entrance_body_2') }}></div>
          </Content>
        </section>
        <section>
          <SectionTitle title={t('timetable_title')} isFilled/>
          <Timetable/>
          <Content>
            <div dangerouslySetInnerHTML={{ __html:t('section_entrance_body_3') }} style={ { marginTop: '2rem' } }></div>
          </Content>
        </section>
      </div>
      </Waypoint>
      <div style={ { position: 'relative' } }>
        <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <Parallax y={[350, -300]}>
            <div id="cloud_kreativitas" style={{ backgroundImage: `url(${cloud_3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '19.625rem', height: '5.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:t('cloud_3') }}></div>
          </Parallax>
        </div>
        <img
          className={ styles.doodle }
          src={ doodle_4 }
          alt=""
          style={
            {
              position: 'absolute',
              width: '10.25rem',
              left: '0',
              top: '-5.7rem'
            }
          }
        />
        <hr style={ { height: '1px', margin: '12.25rem 0 1.75rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
      </div>
      <Waypoint onEnter={ function(props) {
        passedFunction('preparatory');
        }}
        fireOnRapidScroll={true}
      >
        <div>
          <section id="preparatory">
            <Content>
              <SectionTitle title={t('section_preparatory_title')}/>
              <div dangerouslySetInnerHTML={{ __html:t('section_preparatory_body') }}></div>
            </Content>
          </section>
          <div style={ { position: 'relative' } }>
            <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Parallax y={[350, -300]}>
                <div id="cloud_altern" style={{ backgroundImage: `url(${cloud_6})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '19.625rem', height: '5.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:t('cloud_6') }}></div>
              </Parallax>
            </div>
            <img
              className={ styles.doodle }
              src={ doodle_5 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  right: '7.25rem',
                  bottom: '-5rem',
                  zIndex: '1'
                }
              }
            />
            <hr style={ { height: '1px', margin: '17.875rem 0 0 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
          </div>
        </div>
      </Waypoint>
      <Waypoint onEnter={ function(props) {
        passedFunction('staff');
        }}
        fireOnRapidScroll={true}
      >
        <div>
          <section>
            <div style={{ marginBottom: '1.5rem' }}>
              <StaticImage
                src="../images/03_2x.jpg"
                alt="Stáb tagok"
                placeholder="blurred"
              />
            </div>
            <Content>
              <div id="staff">
                <SectionTitle title={t('section_staff_title')}/>
              </div>
              <div dangerouslySetInnerHTML={{ __html:t('section_staff_subtitle') }}></div>
              <br/>
              <div dangerouslySetInnerHTML={{ __html:t('section_staff_member_1') }}></div>
              <br/>
              <div dangerouslySetInnerHTML={{ __html:t('section_staff_member_2') }}></div>
              <br/>
              <div style={ { position: 'relative' } }>
                <div dangerouslySetInnerHTML={{ __html:t('section_staff_member_3_top') }}></div>
                <img
                  className={ styles.doodle }
                  src={ doodle_6 }
                  alt=""
                  style={
                    {
                      position: 'absolute',
                      right: '24rem',
                      top: '-5rem',
                      width: '10.25rem',
                      zIndex: '1',
                      transform: 'rotate(90deg)'
                    }
                  }
                />
              </div>
              <Trans>section_staff_member_3_bottom</Trans>
              <br/>
              <div dangerouslySetInnerHTML={{__html:t('section_staff_member_4') }}></div>
              <br/>
              <div dangerouslySetInnerHTML={{__html:t('section_staff_member_5')}}></div>
              <br/>
              <div dangerouslySetInnerHTML={{__html:t('section_staff_member_6')}}></div>
              <br/>
            </Content>
          </section>
          <div style={ { position: 'relative' } }>
            <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Parallax y={[350, -300]}>
                <div id="cloud_sajat" style={{ backgroundImage: `url(${cloud_4})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '19.625rem', height: '7.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:t('cloud_4') }}></div>
              </Parallax>
            </div>
            <img
              className={ styles.doodle }
              src={ doodle_7 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  left: '11rem',
                  top: '-4.15rem',
                }
              }
            />
            <img
              className={ styles.doodle }
              src={ doodle_8 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  right: '6rem',
                  bottom: '2.75rem'
                }
              }
            />
            <hr style={ { height: '1px', margin: '12.25rem 0 1.75rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
          </div>
        </div>
      </Waypoint>
      <Waypoint onEnter={ function(props) {
        passedFunction('tuition');
        }}
        fireOnRapidScroll={true}
      >
        <div>
          <section id="tuition">
            <Content>
              <SectionTitle title={t('section_tuition_title')}/>
              <div dangerouslySetInnerHTML={{ __html:t('section_tuition_body')}}></div>
            </Content>
          </section>
        <div style={ { position: 'relative' } }>
          <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Parallax y={[350, -300]}>
              <div id="cloud_a_muveszi" style={{ backgroundImage: `url(${cloud_5})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '19.625rem', height: '7.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:t('cloud_5') }}></div>
            </Parallax>
          </div>
          <img
            className={ styles.doodle }
            src={ doodle_9 }
            alt=""
            style={
              {
                position: 'absolute',
                width: '10.25rem',
                left: '14rem',
                bottom: '-2.5rem'
              }
            }
          />
          <hr style={ { height: '1px', margin: '12.25rem 0 1.75rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
        </div>
        </div>
      </Waypoint>
      <Waypoint onEnter={ function(props) {
        passedFunction('erasmus');
        }}
        fireOnRapidScroll={true}
        bottomOffset="20%"
      >
        <div>
          <section id="erasmus">
            <Content>
              <SectionTitle title={t('section_erasmus_title')}/>
              <div dangerouslySetInnerHTML={{__html:t('section_erasmus_body') }}></div>
            </Content>
          </section>
          <div style={ { position: 'relative' } }>
            <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Parallax y={[350, -300]}>
                <div id="cloud_a_kozossegben" style={{ backgroundImage: `url(${cloud_7})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '19.625rem', height: '5.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:t('cloud_7') }}></div>
              </Parallax>
            </div>
            <img
              className={ styles.doodle }
              src={ doodle_10 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  right: '6rem',
                  bottom: '-4rem'
                }
              }
            />
            <hr style={ { height: '1px', margin: '12.25rem 0 1.75rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
          </div>
        </div>
      </Waypoint>
      <Waypoint onEnter={ function(props) {
        passedFunction('videos');
        }}
        fireOnRapidScroll={true}
      >
        <div>
          <section id="videos">
            <Content>
              <SectionTitle title={t('section_videos_title')}/>
              <div dangerouslySetInnerHTML={{ __html:t('section_videos_body') }}></div>
            </Content>
          </section>
          <div style={ { position: 'relative' } }>
            <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Parallax y={[350, -300]}>
                <div id="cloud_reflekt" style={{ backgroundImage: `url(${cloud_8})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '19.625rem', height: '5.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:t('cloud_8') }}></div>
              </Parallax>
            </div>
            <img
              className={ styles.doodle }
              src={ doodle_11 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  left: '0',
                  bottom: '-5rem'
                }
              }
            />
            <hr style={ { height: '1px', margin: '12.25rem 0 1.75rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
          </div>
        </div>
      </Waypoint>
      <Waypoint onEnter={ function(props) {
        passedFunction('questions');
        }}
        topOffset="20"
        bottomOffset="25%"
        fireOnRapidScroll={true}
      >
        <div>
          <section id="questions">
            <Content>
              <SectionTitle title={t('qa_title')}/>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}><Trans>qa_q1</Trans></h2>
              <div dangerouslySetInnerHTML={{__html:t('qa_a1')}}></div>
              
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}><Trans>qa_q2</Trans></h2>
              <div dangerouslySetInnerHTML={{__html:t('qa_a2')}}></div>
              
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}><Trans>qa_q3</Trans></h2>
              <div dangerouslySetInnerHTML={{__html:t('qa_a3')}}></div>

              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}><Trans>qa_q4</Trans></h2>
              <div dangerouslySetInnerHTML={{__html:t('qa_a4')}}></div>
              
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}><Trans>qa_q5</Trans></h2>
              <div dangerouslySetInnerHTML={{__html:t('qa_a5')}}></div>
              
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}><Trans>qa_q6</Trans></h2>
              <div dangerouslySetInnerHTML={{__html:t('qa_a6')}}></div>
              
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}><Trans>qa_q7</Trans></h2>
              <div dangerouslySetInnerHTML={{__html:t('qa_a7')}}></div>
              
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}><Trans>qa_q8</Trans></h2>
              <div dangerouslySetInnerHTML={{__html:t('qa_a8')}}></div>
            </Content>
            <div style={ { position: 'relative' } }>
              <div className={ styles.nomobile } style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <Parallax y={[200, -350]}>
                  <div id="cloud_tanccal" style={{ backgroundImage: `url(${cloud_10})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover', width: '19.625rem', height: '12.25rem', display: 'flex', alignItems: 'center', color: '#000', fontSize: '0.875rem', fontWeight: '500', justifyContent: 'center', textAlign: 'center'}} dangerouslySetInnerHTML={{ __html:t('cloud_10') }}></div>
                </Parallax>
              </div>
            </div>
          </section>
          <div style={ { position: 'relative' } }>
          <hr style={ { height: '1px', margin: '17.875rem 0 0 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
          </div>
        </div>
      </Waypoint>
      <Waypoint onEnter={ function(props) {
          passedFunction('contact');
        }}
        onLeave={ function(props) {
          passedFunction('questions');
        }}
        fireOnRapidScroll={true}
      >
        <section id="contact">
          <Content>
            <SectionTitle title={t('contact_title')}/>
            <p><Trans>contact_name</Trans><br/>
            H-1036 Budapest, Perc utca 2.</p>
            <p>+36 1 250 3046<br/>
            +36 70 953 0516</p>
            <p>
              <a href={ `mailto:${t('contact_mail')}` }>
                <Trans>contact_mail</Trans>
              </a>
            </p>
            <p><a rel="noreferrer" href="https://www.facebook.com/BKTF.BCDA.BA" aria-label="Facebook">facebook</a><br/><a rel="noreferrer" href="https://www.instagram.com/bcda_budapest/" aria-label="Instagram">instagram</a></p>
          </Content>
        </section>
      </Waypoint>
      <AnchorLink
        aria-label={ context.language === "hu" ? "Oldal elejére görgetés" : "Scroll to top"}
        to={ context.language === "hu" ? "/#course" : "/en/#course" }
      >
        <svg className={ [styles.scrolltotop, scrollY > 950 ? styles.visible : ''].join(' ') } viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="31" cy="31" r="31" fill="black"/>
          <path d="M31.7071 15.4668C31.3166 15.0763 30.6834 15.0763 30.2929 15.4668L23.9289 21.8308C23.5384 22.2213 23.5384 22.8545 23.9289 23.245C24.3195 23.6355 24.9526 23.6355 25.3431 23.245L31 17.5881L36.6569 23.245C37.0474 23.6355 37.6805 23.6355 38.0711 23.245C38.4616 22.8545 38.4616 22.2213 38.0711 21.8308L31.7071 15.4668ZM32 49.8696L32 16.1739L30 16.1739L30 49.8696L32 49.8696Z" fill="#F1F6E7"/>
        </svg>
      </AnchorLink>
    </main>
  )
};

export default Main;