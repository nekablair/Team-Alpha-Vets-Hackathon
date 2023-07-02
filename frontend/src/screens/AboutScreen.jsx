import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const AboutScreen = () => {
  return (
    <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Overview</Accordion.Header>
        <Accordion.Body>
          <h5>Equine therapy, also known as horse therapy or hippotherapy, is a therapeutic approach that involves interactions between individuals and horses to address various physical, emotional, and psychological challenges. The benefits of equine therapy are wide-ranging and can positively impact people of all ages and abilities.</h5>
          <br />
          <h5>Physically, equine therapy promotes balance, coordination, and strength. Horseback riding requires riders to engage their core muscles, improve posture, and develop fine motor skills. The rhythmic and three-dimensional movement of a horse's gait mimics the human walking pattern, which can help individuals with physical disabilities or injuries improve their motor skills and overall physical functioning.</h5>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Mental and Social Health</Accordion.Header>
        <Accordion.Body>
          <h5>Emotionally and psychologically, equine therapy provides a unique and powerful connection between humans and animals. Interacting with horses can foster a sense of empathy, trust, and emotional regulation. Horses are highly intuitive animals and can sense and respond to human emotions, providing immediate and honest feedback. This interaction can enhance self-awareness, build self-esteem, and improve emotional well-being.</h5>
          <br />
          <h5>Equine therapy also offers psychological benefits, especially for individuals struggling with mental health conditions such as anxiety, depression, PTSD, or autism spectrum disorders. The presence of horses in a calm and non-judgmental environment can reduce stress and anxiety, improve mood, and increase overall psychological resilience. The repetitive and structured nature of working with horses can also enhance focus, attention, and concentration.</h5>
        </Accordion.Body>
        
      </Accordion.Item>


    </Accordion>
    </>
  );
};

export default AboutScreen;
