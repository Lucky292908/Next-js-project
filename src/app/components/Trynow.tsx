"use client";

import Head from 'next/head';
import styles from '../styles/Trynow.module.css';
import styled from 'styled-components';

// Styled components
const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const Button = styled.button`
  background-color: #f8a836;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #000;
  margin: 10px 0;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Dot = styled.div<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#f8a836' : '#333')};
  margin: 0 5px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  width: 80%;
  max-width: 400px;
  text-align: center;
`;

export default function Trynow() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Try Now</title>
                </Head>
                <main className={styles.main}>
                <div className={styles.card}>
      <h2>Try now</h2>
      <p>Get a call from Toingg</p>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <div>
        <div className={styles.phoneInput}>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPs9u78F5V2phXvIdg2IKYIa_P3ZHHnQGftgYWxPovnzcBIFsX1HTF0utDzsOv0pUn24&usqp=CAU"
    alt="Flag"
    className={styles.flagIcon}
  />
  <input
    type="text"
    placeholder="+91"
    className={styles.phoneCode}
  />
</div>
</div>
        <select className={styles.select}>
          <option>Choose your language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit" className={styles.button}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/159/159832.png"
            alt="Call Icon"
            className={styles.callIcon}
          />
        </button>
      </form>
    </div>
                    <p className={styles.integrationText}>Automate your agent with 5000+ integrations like</p>
                    <div className={styles.integrations}>
                        <img src="https://friconix.com/png/fi-cnsuxx-hubspot.png" alt="HubSpot" />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwptL83CisnNx7rjS8SkS63MEXWNc_rxiEJb7RJYLhPA6wViv8EW0V2V6EvRvoRFoiAU&usqp=CAU"
                            alt="Slack"
                        />
                        <img src="https://cdn-icons-png.freepik.com/512/9253/9253165.png" alt="Zapier" />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmk4z9WG9kgytcSP5ZeI-hTVbGmoLBDDuHg&s"
                            alt="Salesforce"
                        />
                        <img src="https://cdn-icons-png.freepik.com/512/9253/9253165.png" alt="Zapier" />
                    </div>
                    <div className={styles.videoContainer}>
                        <video className={styles.video} controls>
                            <source src="/your-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </main>

                <div className={styles.container1}>
                    <Head>
                        <title>Explore TOINGG</title>
                    </Head>
                    <main className={styles.main1}>
                        <div className={styles.card1}>
                            <div className={styles.imageContainer1}>
                                <img src="/image.png" alt="GPT Store" className={styles.image} />
                                <div className={styles.videoContainer}>
                                    <video className={styles.video} controls>
                                        <source src="/your-video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <h1 className={styles.title1}>
                                Explore TOINGG in <span className={styles.highlight1}>GPT Store</span>
                            </h1>
                            <ul className={styles.list1}>
                                <li>Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
                                <li>Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
                                <li>Data Export: Conveniently export call logs to CSV.</li>
                                <li>Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
                            </ul>
                            <button className={styles.exploreButton}>Explore more</button>
                        </div>
                    </main>
                </div>

                <Card>
                    <Icon>⚡</Icon>
                    <Title>Ultra-Fast Response</Title>
                    <Description>
                        Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.
                    </Description>
                    <Button>Try now</Button>
                </Card>
                <Dots>
                    <Dot active />
                    <Dot />
                    <Dot />
                    <Dot />
                </Dots>
                <Card>
                    <Icon className={styles.s}><img src='https://cdn-icons-png.flaticon.com/512/9554/9554865.png'width={50}></img></Icon>
                    <Title>Fine Tuning</Title>
                    <Description>
                        Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination.
                    </Description>
                </Card>
                <Dots>
                    <Dot active />
                    <Dot />
                    <Dot />
                    <Dot />
                </Dots>
            </div>
            <div className={styles.container}>
                <Head>
                    <title>Assignment</title>
                </Head>
                <main className={styles.main}>
                    <h1 className={styles.title}>The highest standards of trust and safety.</h1>
                    <p className={styles.description}>
                        We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues to benefit consumers, businesses, and society as a whole.
                    </p>
                    <div className={styles.icons}>
                        <span className={styles.icons7}>
                        <div className={styles.icon}>
                            <img src="https://thumbs.dreamstime.com/b/phone-icon-isolated-orange-round-button-abstract-illustration-phone-icon-orange-round-button-103875550.jpg" alt="Call Monitoring" />
                            <p>Call Monitoring</p>
                        </div>
                        <div className={styles.icon}>
                            <img src="https://banner2.cleanpng.com/20180330/prq/kisspng-computer-icons-measuring-scales-symbol-balance-5abe19cfdfe408.1765408315224078879171.jpg" alt="Rate Limits" />
                            <p>Rate Limits</p>
                        </div>
                        
                        </span>
                        <br></br>
                        <span className={styles.icons7}>                        <div className={styles.icon}>
                            <img src="https://img.freepik.com/premium-vector/filter-funnel-data-variety-icon-orange-color-vector-eps_996135-38707.jpg" alt="Prompt Injection" />
                            <p>Prompt Injection</p>
                        </div>
                       
                        <div className={styles.icon}>
                            <img src="https://cdn-icons-png.freepik.com/512/10071/10071234.png" alt="Internal Hard Audits" />
                            <p>Internal Hard Audits</p>
                        </div>
                        </span>

                    </div>
                    <h2 className={styles.faqTitle}>Frequently asked questions</h2>
                    <div className={styles.faq}>
                        <div className={styles.faqItem}>
                            <span>
                            <h3>What is Toingg  pricing?</h3>
                            </span>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What is Toingg?</h3>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>How secure is Toingg?</h3>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>How does billing work?</h3>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What phone numbers can I use with Toingg?</h3>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Does Toingg support multiple languages?</h3>
                        </div>
                    </div>
                    <footer className={styles.footer}>
                        <h2>TOINGG</h2>
                        <p className={styles.txt}>We are here to grow your <br></br>business <span className={styles.txt2}>♥</span></p>
                        <ul className={styles.footerLinks}>
                            <li>Terms and conditions</li>
                            <li>Privacy policy</li>
                            <li>Help center</li>
                            <li>API docs</li>
                            <li>Careers</li>
                        </ul>
                        <div className={styles.socialIcons}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAgVBMVEX///8AZsgATcHm6vYAXsYAW8UAYcd3lNaQp90AVcNRfM7y9/zV4PKzw+dajdQAZMcqasrG1e/d5PXr8PlMg9EAUsOpwOayx+mjvOWBpNwnbcp2mNi7zeuJpNzR3PE1dc1Afc9bh9KWs+GJqt6iteKVrd8ASMBpl9dHc817ntpnjdWDEJsmAAAE3UlEQVR4nO2d63qiMBBABUI0YAmIoCKC6Hrr+z/gem0FDHa/ZkZw5/y0FDnNbUKSaa9HEARBEARBEARBEARBEARBEARBEATxjTsMJtPVejbv/5b5YbZeTSfB0H2NibXynH2S+IZknP0Wzrk0/CTPnWJqoatMHCmPD3DG0MHlVqd7cmeCqyKFJoeHVkLi6WSOCWVyEzKdDEXFjQWDVTnBRIzQF4QL6GK5IM1FCO4yjzBUTkRzYBt3LrBcDEPMYWvaAKG5fMMGkC4xWIf8ECljOJfhkmO6GAZfDsFkFjaui2HYCyiXNEGtZCdkksK4uAvEnuyGWMD0aFmOXjDHoslh4pqPFxTMsWg+IFzCA3rzP2GDxAGjBLlfvsCTEYBMhhaUlREBgEz8kiZzlAGIAtz1S5rMsdGs9XfO7g41xvyG7fTLhEWTjORnIAYiPtbfnYUNQaZkiVPsdoXjM/06fAkgo+6ZJe9PzlUhjAv9NjwBkDFUjyn59Osqd6a9qkmu/62gpfqby3LfudFeNjaAjGqYEbPSdeFcdxceAcgoAgBpVL4r8DUXjQkgYz7+qtqYFs41D0iIMlEtdPqjOe5BlBG1Vw6x5ugas5o9kNHbaDCrWW1aO9XcnWFWs9pSyqa7Msyr9GajorttRtqVehbrDgEQZQy2LF+X635VgClj2MXdZeFY+xwOVcZgzlf3HAC8wsGVMbjtneOAYCkA5prIMsepprk1t9sI5M0atgwoJEMy/7uMZHZ0xmY/6jBQZYRZ4hZm8uj+01uffez3uLf+SIMgmKx2ifmDoBRTRqTW6J5r0Mzz7O5DK70su9nCS63wGpq6oZXtoqc6mDJmZXZ2XWDjTimaHjr8VFhebSpn9c0nla2dMnbycH0ySJoLp40yzN4pbh32GyfaLZTJ7bX65uumOVALZfarprs3vWtrn0zWvJjnNkzp2ifzbFkiUI/J7ZN5inotq4Myw+0byfTGqqLpokyq/IIOyoSqkbOtMq6Vzorl0puO6j90D4qxpqUy1oqbx0kMZyLa1bf3qPaztFNmWHxvVrf3tf2KgWKhsZUyrnMfHbN9NYQedqlkDuWHFYdKVDBUzATaKDOqPKtklaLpksys2lmJafmCLsnsqyM8q5xb6JCMVdvhzbxyo+mQTH3jRnUjGcmQDMmQDMmQDMmQDMmQDMmQTFdk2FvJFCRDMiRDMk9kEA8DwcsIABlbtbAFLCMZgIwqsQm4jAFwtFG1h6LaPtObTPnjrC5TORJRXSa4wnPEE7S88Epcr5N+5eP6nzwpXzF+XPQgJ2g91To9L3N7JPn444bffHz76vt1HbzVqfO3ygfwVpkaesGrZCASz4y0H1n6ETyHyG7yqrwz1RV2PXy8JFcLTEagXvaKesaBcjW5g1dk0RoA5QUM8IuG5xD5gM5s0IMAtoFy6Y2U+yiB4GOIfvnKRHdKiWakD5pQV/eJ8mbsP5AuPXeBONhEQPkA72zQDtKZ0C5Hm9UWJyvwdoOR7zwVCA3HFkAJNKtYRQSS/OsLyaMCL2176gAlMzMu7w4cpGK56Xzu/VMGfL3p5zlnzM8/cVVOWPHhc7zME19yZv8axqWf5Mvx5yHG/78AF0ZZOomnq83g12xW03iSZg/OCBAEQRAEQRAEQRAEQRAEQRAEQRAE8Y/8BbeqgO58FKt8AAAAAElFTkSuQmCC" alt="LinkedIn" />
                            <img src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png" alt="Instagram" />
                            <img src="https://cdn.icon-icons.com/icons2/1524/PNG/512/x_106506.png" alt="S" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfrW3ZerC7hclbSvkABAGeEw35EgBK17YEw&s" alt="S" />
                        </div>

                        <p className={styles.copyright}><br></br>
                            Copyright © 2024 Toingg <br></br>Inc. All rights reserved.
                        </p>
                        <p>Join our comunity</p>
                    </footer>
                </main>
            </div>
        </>
    );
}
