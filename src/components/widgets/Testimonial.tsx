import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { reviews } from '../../pages/video-courses/angular-evolution/reviews';



// indexType: 'even' or 'odd'
export function getRandomReview(reviews: any[]) {
  if (reviews.length === 0) {
    throw new Error("Array must not be empty.");
  }

  let filteredIndices = reviews
    .map((_, index) => index)
  // .filter(index => indexType === 'even' ? index % 2 === 0 : index % 2 !== 0);

  if (filteredIndices.length === 0) {
    throw new Error(`No ${indexType} indices available in the reviews.`);
  }

  let randomIndex = filteredIndices[Math.floor(Math.random() * filteredIndices.length)];
  return reviews[randomIndex];
}




export  default function SingleTestimonial(props: {user: any, maxLength: number, reviews: any[]}) {
  const [userReview, setUserReview] = useState(null)

  useEffect(() => {
    loadNewUser()
  }, [])
  if (!userReview) return <div>ciao</div>

  // const [userReview, setUserReview] = useState(getRandomReview(props.reviews))
  const {
    icon,
    link,
    img,
    name,
    job,
    review,
    rate
  } = userReview;


  function truncateString(str: string) {
    if (!props.maxLength) return str;
    if (str.length > props.maxLength) {
      return str.slice(0, props.maxLength) + '...';
    } else {
      return str;
    }
  }

  function loadNewUser() {
    setUserReview(getRandomReview(props.reviews))
  }
  const vote = rate / 2;
  const integer = Math.floor(vote);
  const areDecimals = vote !== integer;
  const stars = new Array(integer).fill(null);

  return (
    <figure className="max-w-screen-md mx-auto text-center">

      <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path
          d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg>


      <div>
        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"
          {truncateString(review)}"
          <i className="fa fa-refresh ml-3 cursor-pointer text-sky-500 hover:text-sky-300" onClick={loadNewUser}></i>
        </p>
      </div>

      <div>

        {
          stars.map((star, i) => {
            return <i key={i} className="fa fa-star fa-2x text-yellow-200"></i>
          })
        }
        {
          areDecimals && <i className="fa fa-star-half-o  fa-2x text-yellow-200"></i>
        }
      </div>

      <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">



        <div className="flex flex-col sm:flex-row  items-center sm:divide-x-2 sm:rtl:divide-x-reverse sm:divide-gray-500 dark:divide-gray-700 gap-4">
          <div className="pe-3 font-medium text-gray-900 dark:text-white">

            {
              link &&
              <a href={link} target="_blank">

                <i
                  className={clsx(
                    "fa mr-2 text-sky-500",
                    {
                      'fa-github': icon === 'github',
                      'fa-linkedin': icon === 'linkedin',
                      'fa-link': icon === 'link' || !icon,
                    }
                  )}

                ></i>
              </a>
            }

            {name}

          </div>
          <div className="ps-3 text-sm text-gray-500 dark:text-gray-400 px-4">{job}</div>
        </div>

      </figcaption>
    </figure>
  )
}


