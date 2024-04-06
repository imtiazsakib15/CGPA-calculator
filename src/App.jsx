import { useState } from "react";

function App() {
  const [cgpa, setCgpa] = useState(0);
  const firstSemCredit = 18.0;
  const secondSemCredit = 16.5;
  const thirdSemCredit = 18.0;
  const fourthSemCredit = 16.5;
  const fifthSemCredit = 16.5;
  const sixthSemCredit = 16.5;
  const seventhSemCredit = 18.0;
  const eighthSemCredit = 18.0;

  const totalCredit =
    firstSemCredit +
    secondSemCredit +
    thirdSemCredit +
    fourthSemCredit +
    fifthSemCredit +
    sixthSemCredit +
    seventhSemCredit +
    eighthSemCredit;

  const handleCalculate = (e) => {
    e.preventDefault();
    const form = e.target;
    const first = form.first.value;
    const second = form.second.value;
    const third = form.third.value;
    const fourth = form.fourth.value;
    const fifth = form.fifth.value;
    const sixth = form.sixth.value;
    const seventh = form.seventh.value;
    const eighth = form.eighth.value;

    const totalCgpa = (first * firstSemCredit) / totalCredit;
    console.log(totalCgpa);
  };

  return (
    <div className="p-5 sm:p-10">
      <h1 className="text-xl sm:text-2xl font-bold text-center">
        CGPA Calculator
      </h1>
      <form
        onSubmit={handleCalculate}
        className="max-w-6xl mx-auto py-3 sm:py-5"
      >
        <div className="flex gap-2">
          <p>1st Semester:</p>
          <input className="border p-1 rounded" type="float" name="first" />
        </div>
        <div className="flex gap-2">
          <p>2nd Semester:</p>
          <input className="border p-1 rounded" type="float" name="second" />
        </div>
        <div className="flex gap-2">
          <p>3rd Semester:</p>
          <input className="border p-1 rounded" type="float" name="third" />
        </div>
        <div className="flex gap-2">
          <p>4th Semester:</p>
          <input className="border p-1 rounded" type="float" name="fourth" />
        </div>
        <div className="flex gap-2">
          <p>5th Semester:</p>
          <input className="border p-1 rounded" type="float" name="fifth" />
        </div>
        <div className="flex gap-2">
          <p>6th Semester:</p>
          <input className="border p-1 rounded" type="float" name="sixth" />
        </div>
        <div className="flex gap-2">
          <p>7th Semester:</p>
          <input className="border p-1 rounded" type="float" name="seventh" />
        </div>
        <div className="flex gap-2">
          <p>8th Semester:</p>
          <input className="border p-1 rounded" type="float" name="eighth" />
        </div>
        <button
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg mt-4 sm:mt-6"
          type="submit"
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

export default App;
