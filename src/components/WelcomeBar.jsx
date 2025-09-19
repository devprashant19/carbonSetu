import React from 'react'

function WelcomeBar({ userName }) {
  return (
  <div className="my-8 px-10 py-10 welcome-bar rounded-2xl bg-white shadow">
      <div className='font-bold text-4xl py-6 text-green-600 mb-4'>Welcome to CarbonSetu, {userName}!</div>
  <div className='text-gray-700 text-lg leading-relaxed break-words whitespace-normal'>Let's make the world a greener place together. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ex qui vel quibusdam repudiandae, aliquid aspernatur dolorum nulla quisquam quia sit praesentium, fugit veritatis distinctio mollitia repellat maxime dignissimos? Doloremque reprehenderit necessitatibus ab consequuntur cumque laudantium veniam iusto. Suscipit ipsum ullam similique tenetur sequi, et soluta, mollitia labore a voluptatem ipsam, quis magni ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt eveniet nobis quia cum culpa rem enim molestias distinctio eius suscipit ipsam reiciendis est voluptate esse, quo repudiandae possimus accusamus animi ratione!</div>
    </div>
  )
}

export default WelcomeBar