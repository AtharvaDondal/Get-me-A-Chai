export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 text-white h-[44vh] items-center">
        <div className="font-bold text-5xl flex justify-center items-center gap-2">
          Buy Me a Chai
          <span>
            <img src="tea.png" width={44} alt="" />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators, Get funded by yours fans and
          followers, start now
        </p>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here!
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {" "}
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-white text-3xl font-bold text-center mb-14">
          Your Fans can buy you a Chai
        </h2>
        <div className="flex justify-around gap-5">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/working_man.png"
              width={88}
              alt=""
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black "
              src="/coin.png"
              width={88}
              alt=""
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              className=" bg-slate-400 rounded-full p-1 text-black"
              src="/group.png"
              width={88}
              alt=""
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available you to help you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col justify-center items-center">
        <h2 className="text-white text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oFt7NNXcz3g?si=IxBB9e6q9UcZsiVT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
