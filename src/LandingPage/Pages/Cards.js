import React from 'react'
import "./Cards.css"
import image2 from './assets/image-2.jpg'
import image3 from './assets/image-3.jpg'
import image1 from "./assets/image-1.jpg"

const Contents = () => {
  return (
    <section className='contents'>
      <h3>Manage Your Schools Anywhere In The world !</h3>
      <p className="paragraph">SkyLabs360 is the school managegent system that helps you to manage your shools in a very fashion way anywhere in the way world</p>
      <p className="paragraph">The system has digitilized the paper work of all the operations you do at your school to ease the preasure ,time and all the cost spent while working with huge files </p>
      <div className='grid'>
        <div>
          <img src={image1} alt='Content-1' />
          <h3>The Digital World</h3>
          <p>
            Create your account now and keep your school information secure
            .#Lets make it digital!
          </p>
        </div>

        <div>
          <img src={image2} alt='Content-2' />
          <h3>Huge Data Easly Managed</h3>
          <p>
            The paper work made digital!
            Store your school information in a secure system its only you who has access by making your login information private!
          </p>
        </div>

        <div>
          <img src={image3} alt='Content-3' />
          <h3>Communicate Easly</h3>
          <p>
            Sending the notifications or any massage to administartors,students,teachers and parents  at your school level
          </p>
        </div>
      </div>
      <div className='grid'>
        <div>
          <img src={image1} alt='Content-1' />
          <h3>The Digital World</h3>
          <p>
            Create your account now and keep your school information secure
            .#Lets make it digital!
          </p>
        </div>

        <div>
          <img src={image2} alt='Content-2' />
          <h3>Huge Data Easly Managed</h3>
          <p>
            The paper work made digital!
            Store your school information in a secure system its only you who has access by making your login information private!
          </p>
        </div>

        <div>
          <img src={image3} alt='Content-3' />
          <h3>Communicate Easly</h3>
          <p>
            Sending the notifications or any massage to administartors,students,teachers and parents  at your school level
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contents
