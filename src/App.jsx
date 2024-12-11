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

    let totalCgpa = 0;
    let totalCredit = 0;

    if (first !== "") {
      totalCgpa += first * firstSemCredit;
      totalCredit += firstSemCredit;
    }
    if (second !== "") {
      totalCgpa += second * secondSemCredit;
      totalCredit += secondSemCredit;
    }
    if (third !== "") {
      totalCgpa += third * thirdSemCredit;
      totalCredit += thirdSemCredit;
    }
    if (fourth !== "") {
      totalCgpa += fourth * fourthSemCredit;
      totalCredit += fourthSemCredit;
    }
    if (fifth !== "") {
      totalCgpa += fifth * fifthSemCredit;
      totalCredit += fifthSemCredit;
    }
    if (sixth !== "") {
      totalCgpa += sixth * sixthSemCredit;
      totalCredit += sixthSemCredit;
    }
    if (seventh !== "") {
      totalCgpa += seventh * seventhSemCredit;
      totalCredit += seventhSemCredit;
    }
    if (eighth !== "") {
      totalCgpa += eighth * eighthSemCredit;
      totalCredit += eighthSemCredit;
    }

    if (totalCredit > 0) {
      totalCgpa /= totalCredit;
    }

    setCgpa(totalCgpa);
  };

  return (
    <div className="p-5 sm:p-10">
      <h1 className="text-xl sm:text-2xl font-bold text-center">
        NU CSE CGPA Calculator
      </h1>
      <form
        onSubmit={handleCalculate}
        className="max-w-72 mx-auto space-y-2.5 py-3 sm:py-5"
      >
        <div className="grid grid-cols-2 gap-2">
          <p>1st Semester:</p>
          <input className="border p-1 rounded" type="float" name="first" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>2nd Semester:</p>
          <input className="border p-1 rounded" type="float" name="second" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>3rd Semester:</p>
          <input className="border p-1 rounded" type="float" name="third" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>4th Semester:</p>
          <input className="border p-1 rounded" type="float" name="fourth" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>5th Semester:</p>
          <input className="border p-1 rounded" type="float" name="fifth" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>6th Semester:</p>
          <input className="border p-1 rounded" type="float" name="sixth" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>7th Semester:</p>
          <input className="border p-1 rounded" type="float" name="seventh" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p>8th Semester:</p>
          <input className="border p-1 rounded" type="float" name="eighth" />
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
