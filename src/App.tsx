import anime from "./assets/anime2.gif";
import bg from "./assets/bg.jpg";
import intro from "./assets/intro.mp4";
import Counter from "./components/Counter";

export default function Example() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div
          className="absolute top-0 right-0"
          style={{ marginTop: -150, marginRight: -150 }}
        >
          <svg
            fill="#fbbf24"
            className="w-96 h-96"
            viewBox="0 0 64 64"
            style={{
              animation: "spin 2s linear infinite",
            }}
          >
            <g>
              <g>
                <path
                  d="M43.454,18.443h-2.437c-0.453-1.766-1.16-3.42-2.082-4.933l1.752-1.756c0.473-0.473,0.733-1.104,0.733-1.774
			c0-0.669-0.262-1.301-0.733-1.773l-2.92-2.917c-0.947-0.948-2.602-0.947-3.545-0.001l-1.826,1.815
			C30.9,6.232,29.296,5.56,27.529,5.128V2.52c0-1.383-1.105-2.52-2.488-2.52h-4.128c-1.383,0-2.471,1.137-2.471,2.52v2.607
			c-1.766,0.431-3.38,1.104-4.878,1.977l-1.825-1.815c-0.946-0.948-2.602-0.947-3.551-0.001L5.27,8.205
			C4.802,8.672,4.535,9.318,4.535,9.978c0,0.669,0.259,1.299,0.733,1.772l1.752,1.76c-0.921,1.513-1.629,3.167-2.081,4.933H2.501
			C1.117,18.443,0,19.555,0,20.935v4.125c0,1.384,1.117,2.471,2.501,2.471h2.438c0.452,1.766,1.159,3.43,2.079,4.943l-1.752,1.763
			c-0.474,0.473-0.734,1.106-0.734,1.776s0.261,1.303,0.734,1.776l2.92,2.919c0.474,0.473,1.103,0.733,1.772,0.733
			s1.299-0.261,1.773-0.733l1.833-1.816c1.498,0.873,3.112,1.545,4.878,1.978v2.604c0,1.383,1.088,2.498,2.471,2.498h4.128
			c1.383,0,2.488-1.115,2.488-2.498v-2.605c1.767-0.432,3.371-1.104,4.869-1.977l1.817,1.812c0.474,0.475,1.104,0.735,1.775,0.735
			c0.67,0,1.301-0.261,1.774-0.733l2.92-2.917c0.473-0.472,0.732-1.103,0.734-1.772c0-0.67-0.262-1.299-0.734-1.773l-1.75-1.77
			c0.92-1.514,1.627-3.179,2.08-4.943h2.438c1.383,0,2.52-1.087,2.52-2.471v-4.125C45.973,19.555,44.837,18.443,43.454,18.443z
			 M22.976,30.85c-4.378,0-7.928-3.517-7.928-7.852c0-4.338,3.55-7.85,7.928-7.85c4.379,0,7.931,3.512,7.931,7.85
			C30.906,27.334,27.355,30.85,22.976,30.85z"
                />
              </g>
            </g>
          </svg>
        </div>
        <img
          alt=""
          src={bg}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Time Management
            </h2>
            <div className="mt-5 px-2 flex flex-col sm:flex-row items-center text-center text-xl sm:text-2xl font-bold gap-x-1 sm:gap-x-4 text-white">
              <Counter duration={10000} endValue={0} startValue={24} />:
              <Counter duration={10000} endValue={0} startValue={59} />:
              <Counter duration={10000} endValue={0} startValue={59} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <main>
          <div className="relative isolate">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
            <div
              aria-hidden="true"
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            >
              <div
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="max-w-2xl ">
                      <video
                        src={intro}
                        width="600"
                        height="auto"
                        controls
                        autoPlay
                        loop
                        muted
                      />
                    </div>
                    <img src={anime} className="ml-10" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="text-wrap text-justify leading-loose">
              <h3 className=" font-semibold">
                Time Management: Finding Balance in Daily Life
              </h3>
              <br />
              <p>
                Time management is an important skill that helps turn busy and
                chaotic days into organized routines. This gives us a sense of
                control over our lives. At its heart, time management means
                setting specific times for tasks based on how urgent or
                important they are. It takes discipline, planning, and a bit of
                kindness to yourself. A day has 24 hours, an hour has 60
                minutes, and a minute has 60 seconds. Behind these familiar
                numbers, time management is about making the most of each moment
                to achieve limitless things within our limited time.
              </p>
              <br />
              <p>
                Time management isn’t just about filling every second with
                tasks; it’s about creating a balance so that we can enjoy life
                while still getting important things done. If our days are
                packed only with high-priority tasks, we can easily feel
                stressed and overwhelmed. Good time managers know that having
                some flexibility is key. They allow for breaks and don’t push
                themselves to the point of exhaustion, as working too hard can
                actually lower efficiency. With a balanced approach, they stay
                productive without burning out, making time for both
                responsibilities and relaxation.
              </p>
              <br />
              <p>
                There has a question –How to have good time management? Actually
                each time of day has its own strengths.So,plan tasks around
                these natural rhythms helps us to work better. Early morning is
                great for tasks that need focus and clear thinking, while midday
                is the best time for creative work and fresh ideas. In the
                afternoon, we’re more alert, making it perfect for detailed
                tasks. Evenings are good for relaxing and thinking about the
                day’s achievements, helping us recharge for tomorrow. By
                following these natural patterns, we can stay productive,
                focused, and balanced all day.
              </p>
              <br />
              <p>
                "The early bird catches the worm"—people with good time
                management make the most of each morning. Actually for those who
                have a well time management will plan to do some high-focus
                tasks that need their full attention are done in the
                morning.This is because morning is ideal for tackling difficult
                tasks because our minds are fresh and focused. This clarity
                helps improve productivity and decision-making.
              </p>
              <br />
              <p>
                "Success favors the prepared"—people who manage their time well
                make good use of the afternoon, too. Those with strong time
                management skills plan creative tasks for midday when their
                minds are most active. For them, the afternoon is the best time
                for fresh ideas and problem-solving. This burst of inspiration
                helps them find new solutions and adds energy to the rest of
                their day.
              </p>
              <br />
              <p>
                "Make hay while the sun shines"—people who use their time well
                know that late afternoon, from four to seven, is the best time
                of the day. During this period, our body and mind are at their
                strongest.This mean that we can make it perfect for focused and
                detailed work at that time.As examples,solving complex problems
                and organizing tasks. Using this time wisely can help to get
                important work done efficiently.
              </p>
              <br />
              <p>
                "Rest well to be your best"—people who manage their time well
                know that evening is perfect for relaxation and unwinding. In
                the evening, it's a good time to rest, watch a favorite show, or
                read a book you enjoy. This balance of work and rest helps
                recharge your energy. Before ending the day, take a few minutes
                to reflect on what you accomplished—it’s a small habit that
                wraps up the day and prepares you for tomorrow.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
