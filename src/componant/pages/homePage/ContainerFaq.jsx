import React from 'react'
import Faq from './Faq'
import { QuestionData } from '../../../data/Data';

export default function ContainerFaq() {
  return (
      <div className="containerFaq ">
          {QuestionData.map((item, index) => (<Faq key={index} id={item.id} questionNum={item.questionNum} question={item.question} answer={item.answer} />))}
         
      </div>
  );
}
