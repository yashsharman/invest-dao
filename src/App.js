import "./App.css";
import "./App.css";
import people from "./img/people.png";
import why from "./img/why.png";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import linkedin from "./img/linkedin.png";
import laptop from "./img/laptop.png";

function App() {
  return (
    <>
      <nav className="flex flex-row  bg-gray-900  justify-between  text-white  p-4">
        <a
          className="navbar-brand  text-2xl text-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          href="/"
        >
          InvestDAO
        </a>
        <button className=" px-2 py-1 rounded-sm transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-200 ... ">
          Sign in
        </button>
      </nav>

      <div className=" bg-gray-100 w-fit">
        <div className="intro py-8 md:py-10 flex flex-col  md:flex-row">
          <div className="right md:p-10 md:md:w-1/2 flex flex-col justify-center">
            <h1 className="  text-3xl md: text-3xl md: text-3xl md:text-5xl my-2  mx-2 font-bold text-yellow-500 text-center md:text-left">
              What are DAOs?
            </h1>

            <ul className="  font-medium text-xl">
              <li className="my-2  mx-2">
                • Decentralized autonomous organizations.
              </li>
              <li className="my-2  mx-2">
                • Member-owned communities without centralized leadership.
              </li>
              <li className="my-2  mx-2">
                • A safe way to collaborate with internet strangers.
              </li>
              <li className="my-2  mx-2">
                • A safe place to commit funds to a specific cause.
              </li>
            </ul>
          </div>
          <div className="left  md:w-1/2 flex justify-center items-center">
            <img src={people} alt="people" srcset="" />
          </div>
        </div>
        <div className="why py-8 md:p-10 flex  flex-col-reverse  md:flex-row h-auto">
          <div className="left   md:p-10 md:w-1/2 md:flex justify-center items-center">
            <img
              className="h-80 hidden md:block "
              src={why}
              alt="why"
              srcset=""
            />
            <img
              className=" md:hidden px-2 "
              src={laptop}
              alt="laptop"
              srcset=""
            />
          </div>
          <div className="right my-8 md:p-10 md:w-1/2">
            <h1 className="  text-3xl md: text-3xl md:text-5xl my-2  mx-2 font-bold text-red-500">
              Why do we need DAOs?
            </h1>
            <p className="font-medium text-xl m-2">
              Starting an organization with someone that involves funding and
              money requires a lot of trust in the people you're working with.
              But it’s hard to trust someone you’ve only ever interacted with on
              the internet. With DAOs you don’t need to trust anyone else in the
              group, just the DAO’s code, which is 100% transparent and
              verifiable by anyone.
            </p>
          </div>
        </div>
        <div className="compare py-8 bg-blue-800 text-white">
          <h1 className=" text-3xl md: text-3xl md:text-5xl md:py-10 text-center font-bold text-white">
            A comparison
          </h1>
          <div className="comparison flex flex-col  md:flex-row">
            <div className="lhs md:p-10 md:w-1/2">
              <h2 className="text-2xl my-8 text-center font-bold ">DAO</h2>
              <ul className=" font-medium text-xl">
                <li className="my-2  mx-2">
                  • Usually flat, and fully democratized.
                </li>
                <li className="my-2  mx-2">
                  • Voting required by members for any changes to be
                  implemented.
                </li>
                <li className="my-2  mx-2">
                  • Votes tallied, and outcome implemented automatically without
                  trusted intermediary.
                </li>
                <li className="my-2  mx-2">
                  • Services offered are handled automatically in a
                  decentralized manner (for example distribution of
                  philanthropic funds).
                </li>
                <li className="my-2  mx-2">
                  • All activity is transparent and fully public.
                </li>
              </ul>
            </div>
            <div className="rht md:p-10 md:w-1/2">
              <h2 className="text-2xl my-8 text-center font-bold ">
                A traditional organization
              </h2>
              <ul className=" font-medium text-xl">
                <li className="my-2  mx-2">• Usually hierarchical.</li>
                <li className="my-2  mx-2">
                  • Depending on structure, changes can be demanded from a sole
                  party, or voting may be offered.
                </li>
                <li className="my-2  mx-2">
                  • If voting allowed, votes are tallied internally, and outcome
                  of voting must be handled manually.
                </li>
                <li className="my-2  mx-2">
                  • Requires human handling, or centrally controlled automation,
                  prone to manipulation.
                </li>
                <li className="my-2  mx-2">
                  • Activity is typically private, and limited to the public.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="how pt-8 bg-white md:py-10">
          <h1 className="md:py-10  text-3xl md: text-3xl md:text-5xl  my-2 mx-2 font-bold text-center">
            How do DAOs work?
          </h1>
          <p className="md:px-40 px-2 font-medium text-xl text-black">
            The backbone of a DAO is its smart contract. The contract defines
            the rules of the organization and holds the group's treasury. Once
            the contract is live on Ethereum, no one can change the rules except
            by a vote. If anyone tries to do something that's not covered by the
            rules and logic in the code, it will fail. And because the treasury
            is defined by the smart contract too that means no one can spend the
            money without the group's approval either.
          </p>
          <p className="md:px-40 px-2  py-2 font-medium text-xl">
            This means that DAOs don't need a central authority. Instead the
            group makes decisions collectively and payments are authorized
            automatically when votes pass. This is possible because smart
            contracts are tamper-proof once they go live on Ethereum. You can't
            just edit the code (the DAOs rules) without people noticing because
            everything is public.
          </p>
        </div>
        <div className="convinced text-center py-8 ">
          <h1 className="py-6  text-3xl md: text-3xl md:text-5xl font-bold text-center text-teal-700">
            Are you convinced?
          </h1>
          <p className="md:py-10 text-xl md:text-3xl font-bold text-center text-gray-900">
            Start your investment journey with InvestDAO
          </p>
          <button className="px-4 py-2 m-2 text-white md:text-2xl rounded-sm transition ease-in-out delay-150 bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-200 ...  ">
            Start Investing
          </button>
        </div>
        <footer className="flex flex-col  bg-gray-900  justify-between  text-white  text-center ">
          <div className="email-input">
            <input
              className="p-1 px-2 text-black"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail Address"
            />
            <button className=" bg-teal-800 p-1 px-4 my-6">Get Info</button>
          </div>
          <div className="socials my-2  mx-2 flex flex-row  justify-center">
            <img className="m-2 cursor-pointer" src={facebook} alt="facebook" />
            <img className="m-2 cursor-pointer" src={twitter} alt="twitter" />
            <img className="m-2 cursor-pointer" src={linkedin} alt="linkedin" />
          </div>
          <hr className="mx-10" />
          <div className="copyright my-3 text-gray-600">
            InvestDAO © 2012 - 2022{" "}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
