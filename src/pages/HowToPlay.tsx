export default function HowToPlay() {
  const steps = [
    "Clicking Create/Edit button.",
    "You can start filling out the fields or you can upload a json file by clicking the Load Existing Button.",
    "In the first four input fields, you should type the words which associate somehow with the final world",
    "The final field is the field in which you should type the word associated with the final word of the A, B, C and D columns",
    "When finishing filling out the fields, you have the Save button and the data entered gets downloaded as a json file which then you can upload in the present view by clicking Load Existing Button.",
  ];

  return (
    <div className="bg-[#1c1a23] text-white  min-h-screen px-20 flex flex-col items-start justify-center">
      <p>
        This is a game to practice your ability to identify the relations
        between different words.
      </p>
      <p className="mt-4">
        You can create a new Association Game by:
      </p>
      <ol>
        {steps.map((step, idx) => (
          <li key={idx} className="leading-7">
            {step}
          </li>
        ))}
      </ol>
      <span>
        &#127881; Hooray, You Did It!
      </span>
      <a
        className="mt-10 bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        href="/"
      >
        Back to Menu
      </a>
    </div>
  );
}
