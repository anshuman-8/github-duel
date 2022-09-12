import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function about() {
  return (
    <div className="bg-slate-600 min-h-screen ">
    <Head>
      <title>GitHub Duel - How Scoring Works </title>
      <meta name="Github Profile comparator" content="Compare GitHub profiles with your friends and know who has a better maintained GitHub profile " />
      <link rel="icon" href="favicon.ico" />
    </Head>
    <div className='h-10'></div>
    <div className=''>
    <Link href="/" ><a className='hover:bg-slate-800 p-3 ml-10 my-10 text-white top-10 rounded-xl hover:underline bg-slate-700'>Back to Home</a></Link>
    </div>

    <main className='text-white'>
            
        <div className="bg-lightblue py-20 px-4">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
                How does the Scoring works?
                </h2>

                <dl className="w-full md:w-2/3">
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            How does it Score the Repository?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            The Repository is scored based on the number of stars(value- 0.3), forks(value- 0.5), pull requests(value- 0.2), and other Community Standards i.e. Code of Conduct template, Licence, Pull Request Templates, Issue Templates where they stand one value each.
                        </p>
                    </dd>

                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                        How does it Score the Profile?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            The Profile is scored based on the number of followers(value- 0.3), Pull Requests made(value- 0.5), Repositories Contributed to(value- 1), Contributions(value- 0.05), Issues(value- 0.1), does the person has bio, Social media link, Portfolio link and finally their GitHub Highlights i.e. if the person is Campus Expert, Bounty Hunter, Developer Program Member, GitHub Star with 1 value each.
                        </p>
                    </dd>

                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            Are these the best measures for score?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            Not completely, Yes It does cover a lot of aspects of an user's profile but it is lacks in few aspects like how big are those projects, and projects in private Repositories due to limitations in GitHub API. It is just a start and we are working on improving it.
                        </p>
                        <p>
                        If you have any suggestions, please feel free to reach out to us on <a href="https://github.com/anshuman-8" target='_blank' className='text-blue-500 hover:underline'>GitHub</a> or <a href="https://twitter.com/Anshuman_8_" target='_blank' className='text-blue-500 hover:underline'>Twitter</a>.
                        </p>
                        <p className='my-5'>Like it? Give it a star 🌟 at <a href='https://github.com/anshuman-8/github-duel' target="_blank" className='text-blue-500 hover:underline'>Repo</a></p>

                    </dd>
                </dl>
            </div>
        </div>

    </main>
  
  </div>
  )
}

export default about
