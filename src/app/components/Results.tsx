import { Question } from "../type/Question"

type Props = {
  questions: Question[];
  answers: number[];
}

export const Results = ({ questions, answers }: Props) => {
  return(
    <div>
      {questions.map((item, key) => (
        <div key={key} className="mb-3">
          <div className="font-bold">{key + 1}, {item.question}</div>
          <div>
            {item.options[item.answer]}
            <span> ({item.answer === answers[key] ? 'Correta' : 'Incorreta'})</span>

          </div>
        </div>
      ))}
    </div>
  )
}