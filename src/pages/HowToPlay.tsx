export default function HowToPlay() {
  const createSteps = [
    "Clicking Create/Edit button.",
    "You can start filling out the fields or you can upload a json file by clicking the Load Existing Button.",
    "In the first four input fields, you should type the words which associate somehow with the final world",
    "The final field is the field in which you should type the word associated with the final word of the A, B, C and D columns",
    "When finishing filling out the fields, you have the Save button and the data entered gets downloaded as a json file which then you can upload in the present view by clicking Load Existing Button.",
  ];

  const presentSteps = [
    "You load the quizz from the json file",
    "There the host window/view will appear. The host window is only for the person who is hosting the game as there are all the words exposed.",
    "You open the “Presenter Window” - which is the window only for the players and not for the person who is hosting the game. Move it to another monitor, projector or share that tab within your meeting (depending on how you’re presenting the quiz).",
    "Every action you take on your host view will reflect to the presenter view. When you do a mouse hover on any field it will have an animation to the presenter view. Clicking one of the words on host window then it will expose the same field on the presenter window.",
  ];

  return (
    <div className="bg-[#1c1a23] text-white  min-h-screen px-20 flex flex-col items-start justify-center">
      <p>
        Word Association is a game to practice your ability to identify the
        relations between different words. It involves an exchange of words that
        are associated together.
      </p>
      <p className="mt-4">
        How to{" "}
        <a
          href="/create-edit"
          className="text-indigo-400 underline hover:text-indigo-500"
        >
          Create:{" "}
        </a>
      </p>
      <ol>
        {createSteps.map((step, idx) => (
          <li key={idx} className="leading-7">
            {step}
          </li>
        ))}
      </ol>
      <p>
        How to{" "}
        <a
          href="/create-edit"
          className="text-indigo-400 underline hover:text-indigo-500"
        >
          Present:
        </a>
      </p>
      <ol>
        {presentSteps.map((step, idx) => (
          <li key={idx} className="leading-7">
            {step}
          </li>
        ))}
      </ol>
      <span className="font-bold">&#127881; Hooray, You Did It!</span>
      <a
        className="mt-10 bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        href="/"
      >
        Back to Menu
      </a>
    </div>
  );
}
