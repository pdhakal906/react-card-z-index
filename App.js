import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const App = () => {

  return (
    <div className='scale-[0.80]'>

      <div className='flex gap-[30px]'>
        <div>

          <div className='flex gap-[30px]'>
            <div className='bg-[#894aee] rounded-md w-[700px] p-8'>
              <div className='flex gap-[100px]'>
                <div className='flex gap-5'>
                  <div className='w-10 h-10 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src="assets/images/person.png" alt="" />
                  </div>

                  <div>
                    <p className='text-[15px] text-white font-bold'>Daniel Clifford</p>
                    <p className='text-[12px] text-white'>Verified Graduate</p>
                  </div>



                </div>
                <div className='flex-start'>
                  <div>
                    <span>
                      <FontAwesomeIcon icon={faQuoteLeft} className="quote text-[#b28dee] fa-7x mt-10 pt-5" />

                    </span>
                  </div>
                </div>
              </div>
              <p className='relative z-10 text-white font-bold text-[23px] mt-5'>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel i got every penny's worth.</p>
              <p className='text-gray-300 mt-5 text-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quibusdam sapiente et. Libero error ipsam eos laudantium sit iste eius deleniti doloremque ea quam, soluta distinctio maxime. Hic, quisquam facere. Vero magni et est distinctio! Veniam deserunt omnis, nisi eligendi, nihil enim aspernatur nobis quidem blanditiis soluta facilis praesentium dolorum.</p>
            </div>
            <div className='bg-[#49556D] w-[300px] p-8 rounded-md'>
              <div className='flex gap-5'>
                <div className='w-10 h-10 rounded-full overflow-hidden  border-2 border-black'><img className='w-full h-full object-cover' src="assets/images/person.png" alt="" /></div>
                <div>
                  <p className='text-[15px] text-white'>Jonathan Walters</p>
                  <p className='text-[12px] text-white'>Verified Graduate</p>
                </div>

              </div>
              <p className=' text-white font-bold text-[23px] mt-5'>The team was very supportive and kept me motivated</p>
              <p className='text-gray-300 mt-5 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem fugit officia sequi porro blanditiis repellendus ab est laudantium non.</p>
            </div>
          </div>
          <div className='flex gap-[30px] mt-10 mb-20 '>
            <div className='bg-white w-[400px] p-8 rounded-md'>
              <div className='flex gap-5'>
                <div className='w-10 h-10 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src="assets/images/person.png" alt="" /></div>
                <div>
                  <p className='text-[15px] font-bold'>Jeanetter Harmon</p>
                  <p className='text-[12px]'>Verified Graduate</p>
                </div>

              </div>
              <p className=' text-black font-bold text-[23px] mt-5'>An overall wonderful and rewarding experience</p>
              <p className='text-gray-400 mt-5 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto illum maxime officiis alias voluptatum nam fuga animi molestias repellendus.</p>
            </div>
            <div className='bg-[#191F2D] text-white w-[603px] p-8 rounded-md'>
              <div className='flex gap-5'>
                <div className='w-10 h-10 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src="assets/images/person.png" alt="" /></div>
                <div>
                  <p className='text-[15px] font-bold text-white'>Patrick Abramas</p>
                  <p className='text-[12px] text-white'>Verified Graduate</p>
                </div>

              </div>
              <p className=' text-white font-bold text-[23px] mt-5'>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy</p>
              <p className='text-gray-300 mt-5 text-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, iste eos expedita quam doloribus optio culpa ut et odio adipisci illo provident tempore dignissimos aut velit in, assumenda minus dicta.</p>
            </div>

          </div>

        </div>

        <div>
          <div className='w-[300px] h-[751px] bg-white p-8 rounded-md'>
            <div className='flex gap-5'>
              <div className='w-10 h-10 rounded-full overflow-hidden  '><img
                className='w-full h-full object-cover' src="assets/images/person.png" alt="" /></div>
              <div>
                <p className='text-[15px] font-bold'>Kira Whittle</p>
                <p className='text-[12px]'>Verified Graduate</p>
              </div>

            </div>
            <p className=' text-black font-bold text-[23px] mt-5'>Such a life-changing experience. Highly recommended!</p>
            <p className='text-gray-400 mt-5 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis culpa incidunt odit expedita veniam
              doloribus nam minus? Labore culpa ad, dolorem explicabo totam maxime dicta distinctio praesentium modi eum fuga
              tenetur voluptatum. Dolorum facere voluptates nesciunt? Nobis maiores, unde tempore ipsa tenetur dolorem repudiandae
              a incidunt. Ullam, fugit quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quibusdam aut libero dolores eos, deleniti excepturi ratione, voluptas ipsa nemo culpa facilis. Est, alias labore accusamus ut adipisci odit optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi laborum eos ad commodi. Officiis sequi?</p>
          </div>
        </div>
      </div>



    </div>


  )
}

export default App
