import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>


      <section>
        <div className="section__content">

          <svg>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
              Hello
            </text>
          </svg>
        </div>
      </section>
      <section>

        <div className="section__content">
          <p>
              I'm a passionate Front-end Developer.
              I craft beautiful websites and unique user experiences.
              My mission is to turn ideas into reality through clean code and great design.<br/>Pretty cool.
          </p>
        </div>
      </section>
      <section>
        <div className="section__content">
          <h2>nghianm</h2>

        </div>
      </section>
    </>
  )
}
