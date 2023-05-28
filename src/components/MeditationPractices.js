import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-reveal';
import './MeditationPractices.css';

const MeditationPractices = () => {
    const [ref1, inView1, outView1] = useInView({ threshold: 0.5 });
    const [ref2, inView2, outView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3, outView3] = useInView({ threshold: 0.5 });
    const [ref4, inView4, outView4] = useInView({ threshold: 0.5 });
    const [isLoaded, setIsLoaded] = useState(false);
    const loadedRef = useRef(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    loadedRef.current = true;
    setIsLoaded(true);
  }, []);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container overflow-hidden text-center" id='MeditationPractices'>
      <div className="row gy-5">

        <div className="col-6" >
          <div className={`p-1 meditation-type ${expandedIndex === 0 ? 'expanded' : ''}`} onClick={() => toggleExpand(0)} ref={ref1}>
            <Fade bottom when={isLoaded && inView1} fadeOut={outView1}>
              <i className="fa-solid fa-om"></i>
              <h2>Mindfulness meditation</h2>
              <p>Mindfulness meditation is a practice that involves focusing your attention on the present moment, 
                without judgment or distraction. It can help reduce stress and improve your overall well-being.</p>
                <p className="bigscreen">
                The goal of mindfulness meditation is to train the mind to be more aware of the present moment, 
                rather than being preoccupied with worries about the future or regrets about the past. 
                This can be achieved by focusing on a specific object, such as the breath, or by simply observing your thoughts 
                and feelings as they arise, without getting caught up in them.
                One of the key aspects of mindfulness meditation is developing a non-judgmental attitude towards one's thoughts and experiences. 
                This means accepting whatever thoughts or feelings arise, without trying to change or suppress them. By doing so, you can cultivate 
                a greater sense of inner peace and contentment, regardless of external circumstances.
              </p>
            </Fade>
          </div>
        </div>

        <div className="col-6">
          <div className={`p-2 meditation-type ${expandedIndex === 1 ? 'expanded' : ''}`} onClick={() => toggleExpand(1)} ref={ref2}>
            <Fade bottom when={isLoaded && inView2} fadeOut={outView2}>
              <i className="fa-solid fa-om"></i>
              <h2>Yoga meditation</h2>
              <p>Yoga meditation is a practice that combines physical postures, breathing techniques, and meditation to improve flexibility, 
                strength, and mental focus. It can help reduce stress, improve sleep, and promote relaxation.</p>
                <p className="bigscreen">
                The goal of mindfulness meditation is to train the mind to be more aware of the present moment, 
                rather than being preoccupied with worries about the future or regrets about the past. 
                This can be achieved by focusing on a specific object, such as the breath, or by simply observing your thoughts 
                and feelings as they arise, without getting caught up in them.
                One of the key aspects of mindfulness meditation is developing a non-judgmental attitude towards one's thoughts and experiences. 
                This means accepting whatever thoughts or feelings arise, without trying to change or suppress them. By doing so, you can cultivate 
                a greater sense of inner peace and contentment, regardless of external circumstances.
              </p>
                
            </Fade>
          </div>
        </div>

        <div className="col-6">
        <div className={`p-3 meditation-type ${expandedIndex === 2 ? 'expanded' : ''}`} onClick={() => toggleExpand(2)} ref={ref3}>
            <Fade bottom when={isLoaded && inView3} fadeOut={outView3}>
              <i className="fa-solid fa-om"></i>
              <h2>Transcendental meditation</h2>
              <p>Transcendental meditation is a practice that involves silently repeating a mantra to achieve a state of deep relaxation and awareness. 
                It can help reduce anxiety, improve creativity, and increase inner peace.</p>
                <p className="bigscreen">
                The goal of mindfulness meditation is to train the mind to be more aware of the present moment, 
                rather than being preoccupied with worries about the future or regrets about the past. 
                This can be achieved by focusing on a specific object, such as the breath, or by simply observing your thoughts 
                and feelings as they arise, without getting caught up in them.
                One of the key aspects of mindfulness meditation is developing a non-judgmental attitude towards one's thoughts and experiences. 
                This means accepting whatever thoughts or feelings arise, without trying to change or suppress them. By doing so, you can cultivate 
                a greater sense of inner peace and contentment, regardless of external circumstances.
              </p>
                
            </Fade>
          </div>
        </div>

        <div className="col-6">
        <div className={`p-4 meditation-type ${expandedIndex === 3 ? 'expanded' : ''}`} onClick={() => toggleExpand(3)} ref={ref4}>
            <Fade bottom when={isLoaded && inView4} fadeOut={outView4}>
              <i className="fa-solid fa-om"></i>
              <h2>Loving-kindness meditation</h2>
              <p>Loving-kindness meditation is a practice that involves sending positive thoughts and feelings to yourself, loved ones, 
                and even to those who may have hurt you. It can help reduce anger, increase empathy, and promote feelings of well-being.</p>
                <p className="bigscreen">
                The goal of mindfulness meditation is to train the mind to be more aware of the present moment, 
                rather than being preoccupied with worries about the future or regrets about the past. 
                This can be achieved by focusing on a specific object, such as the breath, or by simply observing your thoughts 
                and feelings as they arise, without getting caught up in them.
                One of the key aspects of mindfulness meditation is developing a non-judgmental attitude towards one's thoughts and experiences. 
                This means accepting whatever thoughts or feelings arise, without trying to change or suppress them. By doing so, you can cultivate 
                a greater sense of inner peace and contentment, regardless of external circumstances.
              </p>

              </Fade>
          </div>
        </div>
        
      </div>
    </div>
  );
  }

export default MeditationPractices