import React from 'react';
import '../../Styles/exercises.css';
import lunge from '../../Assets/img/lunges.png';
import yoga from '../../Assets/img/yoga.png';
import blood from '../../Assets/img/blood.avif';

const Exercises = () => {
  return (
  <section>
    <div className='container exercise_container'>
        <div className='exercise_top'>
            <h2 className='section_title'>
                Benefits of <span className='highlight'>Exercise</span>.
            </h2>
            <p>
                Engaging in regular exercise brings a bunch of awesome benefits! <br/> It keeps your body in tip-top shape, making your muscles strong and your heart happy. <br/>Exercise also helps control your weight, ensuring you stay fit and healthy. 
            </p>
        </div>

        <div className='exercise_wrapper'>
            <div className='exercise_item'>
                <span className='exercise_icon'>
                    <img src={lunge} alt=''/>
                </span>

                <div className='exercise_content'>
                    <h4>Healthy Life</h4>
                    <p>
                        Living a healthy life is all about making smart choices every day. A balanced diet, full of colorful fruits and veggies, gives your body the fuel it needs to thrive.
                        </p>
                </div>
            </div>

            <div className='exercise_item'>
                <span className='exercise_icon'>
                    <img src={yoga} alt=''/>
                </span>

                <div className='exercise_content'>
                    <h4>Increased Flexibility</h4>
                    <p>
                    When you move your body regularly, like with stretching exercises, your muscles become more limber. It's like giving your body a daily dose of freedom!
                    </p>
                </div>
            </div>

            <div className='exercise_item'>
                <span className='exercise_icon'>
                    <img src={blood} alt=''/>
                </span>

                <div className='exercise_content'>
                    <h4>Reducing Blood Pressure</h4>
                    <p>
                    When you engage in physical activity, your heart gets stronger, allowing it to pump blood more efficiently. As a result, leading to a reduction in blood pressure.
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Exercises;