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

    const totalCgpa =
      (first * firstSemCredit +
        second * secondSemCredit +
        third * thirdSemCredit +
        fourth * fourthSemCredit +
        fifth * fifthSemCredit +
        sixth * sixthSemCredit +
        seventh * seventhSemCredit +
        eighth * eighthSemCredit) /
      totalCredit;

    setCgpa(totalCgpa);
  };

  return (
    <div className="p-5 sm:p-10">
      <h1 className="text-xl sm:text-2xl font-bold text-center">
        CGPA Calculator
      </h1>
      <form
        onSubmit={handleCalculate}
        className="max-w-72 mx-auto space-y-2.5 py-3 sm:py-5"
      >
        <div className="grid grid-cols-2 gap-2">
          <p>1st Semester:</p>
          <input
            className="border p-1 rounded"
            type="float"
            name="first"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>2nd Semester:</p>
          <input
            className="border p-1 rounded"
            type="float"
            name="second"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>3rd Semester:</p>
          <input
            className="border p-1 rounded"
            type="float"
            name="third"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>4th Semester:</p>
          <input
            className="border p-1 rounded"
            type="float"
            name="fourth"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>5th Semester:</p>
          <input
            className="border p-1 rounded"
            type="float"
            name="fifth"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>6th Semester:</p>
          <input
            className="border p-1 rounded"
            type="float"
            name="sixth"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>7th Semester:</p>
          <input
            className="border p-1 rounded"
            type="float"
            name="seventh"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>8th Semester:</p>
          <input
            className="border p-1 rounded"
            type="float"
            name="eighth"
            required
          />
        </div>
        <div className="text-center">
          <button
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg mt-2 sm:mt-4"
            type="submit"
          >
            Calculate
          </button>
        </div>

        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold">
            CGPA: {cgpa.toFixed(2)}
          </h2>
        </div>
      </form>
    </div>
  );
}

export default App;
